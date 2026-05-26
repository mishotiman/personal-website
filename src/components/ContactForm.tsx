"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<Status>("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [website, setWebsite] = useState(""); // honeypot

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("sending");
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message, website }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong.");
            }

            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");
            setWebsite("");
        } catch (err) {
            setStatus("error");
            setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="relative space-y-4 max-w-xl">
            <div>
                <label htmlFor="name" className="block text-sm text-neutral-400 mb-2">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={status === "sending"}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2.5 text-sm text-neutral-100 focus:outline-none focus:border-neutral-500 transition disabled:opacity-50"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm text-neutral-400 mb-2">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === "sending"}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2.5 text-sm text-neutral-100 focus:outline-none focus:border-neutral-500 transition disabled:opacity-50"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm text-neutral-400 mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    disabled={status === "sending"}
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-md px-4 py-2.5 text-sm text-neutral-100 focus:outline-none focus:border-neutral-500 transition disabled:opacity-50 resize-y"
                />
            </div>

            {/* Honeypot - hidden from humans, bots fill it */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website (leave blank)</label>
                <input
                    id="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />
            </div>

            <button
                type="submit"
                disabled={status === "sending"}
                className="border border-neutral-700 px-5 py-2.5 rounded-md text-sm hover:bg-neutral-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "success" && (
                <p className="text-sm text-green-400 mt-2">
                    Message sent. I&apos;ll read it as soon as I can.
                </p>
            )}

            {status === "error" && (
                <p className="text-sm text-red-400 mt-2">
                    {errorMessage}
                </p>
            )}
        </form>
    );
}