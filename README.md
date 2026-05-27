# Next.js 16 Landing Starter

A minimal, clean landing page template built with Next.js 16, TypeScript, Tailwind CSS 4, and Framer Motion.

No auth. No database. No env vars required. Perfect starting point for your marketing site or product landing.

## ✨ What's Included

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS 4 + CSS variables theming (light/dark)
- Framer Motion for smooth animations
- next-themes for theme switching
- ESLint + Prettier
- Responsive, accessible, production-ready base

## 🚀 Quick Start

```bash
git clone <your-fork-or-the-template-repo>
cd nextjs-16-template
npm install
npm run dev
```

Open http://localhost:3000 — zero config, zero env vars needed.

## 📋 Scripts

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `npm run dev`    | Start dev server             |
| `npm run build`  | Production build             |
| `npm run start`  | Start prod server            |
| `npm run lint`   | Lint code                    |
| `npm run format` | Format with Prettier         |

## 🧹 Customization

- Edit `src/app/page.tsx` for your hero, features, CTA
- Update `src/app/layout.tsx` metadata
- Tweak colors in `src/styles/globals.css`
- Navbar/Footer in `src/components/`

## 📁 Structure

```
src/
├── app/           # pages, layout, loading, error
├── components/    # Navbar, Footer, ThemeToggle + ui/
├── hooks/         # optional hooks
├── lib/           # utils
├── styles/        # globals + fonts
└── types/
```

MIT licensed. Clone, tweak, ship.

```
src/
├── app/              # App router pages and API routes
├── components/       # Reusable UI components
├── lib/              # Utility functions and library wrappers
├── providers/        # React Context providers
├── styles/           # Global styles and Tailwind configuration
└── types/            # TypeScript definitions

prisma/
├── schema.prisma     # Database schema
└── seed.ts           # Database seeding script
```

## 💅 Styling with Tailwind CSS 4

This project utilizes the latest Tailwind CSS 4 features, including the new canonical syntax and CSS-first configuration:

```tsx
// Canonical syntax for variables
className = 'bg-(--primary) text-(--foreground)';
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/AnwarHossainSR">Anwar Hossain</a></p>
</div>
