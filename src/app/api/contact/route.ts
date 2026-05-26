import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter
const submissions = new Map<string, { count: number; resetAt: number }>();
const MAX_PER_HOUR = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
    const now = Date.now();
    const entry = submissions.get(ip);

    if (!entry || now > entry.resetAt) {
        submissions.set(ip, { count: 1, resetAt: now + WINDOW_MS });
        return { allowed: true };
    }

    if (entry.count >= MAX_PER_HOUR) {
        return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
    }

    entry.count += 1;
    return { allowed: true };
}

export async function POST(request: Request) {
    try {
        const { name, email, message, website } = await request.json();

        // Honeypot - bots fill hidden "website" field
        if (website) {
            // Silently succeed so the bot thinks it worked
            return NextResponse.json({ success: true });
        }

        // Rate limit
        const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
        const { allowed, retryAfter } = checkRateLimit(ip);
        if (!allowed) {
            return NextResponse.json(
                { error: `Too many messages. Try again in ${Math.ceil((retryAfter ?? 0) / 60)} minutes.` },
                { status: 429 }
            );
        }

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required." },
                { status: 400 }
            );
        }

        // Min length
        if (message.trim().length < 10) {
            return NextResponse.json(
                { error: "Message is too short. Tell me a bit more." },
                { status: 400 }
            );
        }


        // Send the email
        const { data, error } = await resend.emails.send({
            from: "Personal Website <onboarding@resend.dev>",
            to: process.env.CONTACT_EMAIL!,
            replyTo: email,
            subject: `New message from ${name}`,
            text: `From: ${name} <${email}>\n\n${message}`,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json({ error: "Failed to send." }, { status: 500 });
        }

        return NextResponse.json({ success: true, id: data?.id });
    } catch (err) {
        console.error("Server error:", err);
        return NextResponse.json({ error: "Server error." }, { status: 500 });
    }
}