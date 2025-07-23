# Next.js Basic Setup

This project is a **ready-to-develop** starter template featuring a modern Next.js setup with best practices and essential tools pre-configured.

## Features

- **Next.js App Router** (with `src` directory structure)
- **TypeScript** for type-safe development
- **Tailwind CSS** for rapid UI styling
- **ESLint** for code quality and consistency
- **Prettier** for code formatting
- **Multilingual Locale Support**
  - Automatic locale detection and redirect
  - Easily extendable for additional languages

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Folder Structure

- `src/app/` — Main application code using the App Router
- `src/i18n/` — Internationalization logic
- `src/messages/` — Translation files (JSON)
- `public/` — Static assets

## Customization

- Add new locales by updating `src/messages/` and i18n logic.
- Configure ESLint and Prettier rules as needed.
- Extend Tailwind CSS via `tailwind.config.js`.

---

Happy coding! 🚀
