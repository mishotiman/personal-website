# Personal Website — Michail

> Build a body & mind to thrive.

My personal website for short articles/essays on health, wellbeing, performance, and what it means to thrive physically as well as mentally.

## Stack

- **[Next.js](https://nextjs.org)** (App Router) — React framework
- **TypeScript** — type-safe development
- **[Tailwind CSS](https://tailwindcss.com)** — utility-first styling
- **Fonts:** [Newsreader](https://fonts.google.com/specimen/Newsreader) (headings) + [Inter](https://fonts.google.com/specimen/Inter) (body), via `next/font`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project structure

    src/
    ├── app/
    │   ├── layout.tsx       # Root layout, fonts, metadata
    │   ├── page.tsx         # Homepage (long-scroll, all sections)
    │   ├── globals.css      # Tailwind + theme tokens
    │   └── favicon.ico
    └── components/
        └── Nav.tsx          # Sticky nav with mobile hamburger

## Deployment

Hosted on [Vercel](https://vercel.com).

## License

Personal project — all rights reserved.