# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 portfolio application using:
- **Next.js 16.1.6** with App Router
- **React 19**
- **TypeScript 5** with strict mode enabled
- **Tailwind CSS v4** (with PostCSS)
- **Geist** font family (sans and mono variants)

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture

### App Router Structure
This project uses Next.js App Router (not Pages Router). All routes are defined in the `app/` directory:
- `app/layout.tsx` - Root layout with font configuration and metadata
- `app/page.tsx` - Home page component
- `app/globals.css` - Global styles with Tailwind v4 imports and CSS variables

### Styling System
- **Tailwind CSS v4** imported directly in `globals.css` using `@import "tailwindcss"`
- CSS variables defined in `:root` for theme colors (`--background`, `--foreground`)
- Inline theme configuration using `@theme inline` directive
- Dark mode support via `prefers-color-scheme` media query
- Custom font CSS variables (`--font-geist-sans`, `--font-geist-mono`) injected by Next.js font optimization

### TypeScript Configuration
- Path alias: `@/*` maps to project root
- Target: ES2017
- JSX: react-jsx (automatic runtime)
- Module resolution: bundler
- Strict mode enabled

### ESLint Configuration
Uses flat config (`eslint.config.mjs`) with:
- `eslint-config-next/core-web-vitals`
- `eslint-config-next/typescript`
- Custom ignores for `.next/`, `out/`, `build/`, and `next-env.d.ts`

## Key Patterns

### Font Loading
Fonts are loaded using `next/font/google` in the root layout and applied via CSS variables. The pattern uses:
```tsx
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
```
Applied to body via className with the variable property.

### Image Optimization
Static assets are in `public/` and loaded using Next.js `Image` component with proper width/height for optimization.

## Development Notes

- The app auto-updates on file changes during development
- TypeScript is configured with strict type checking
- Next.js handles font optimization automatically via the `next/font` system
- Tailwind v4 uses a new configuration system with `@theme inline` rather than `tailwind.config.js`
