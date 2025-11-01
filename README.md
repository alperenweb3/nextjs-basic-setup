# Next.js Basic Multilingual Setup

This project is a **ready-to-develop** starter template featuring a modern Next.js setup with best practices and essential tools pre-configured.

## Features

- **Next.js App Router** (with `src` directory structure)
- **TypeScript** for type-safe development
- **Tailwind CSS** for rapid UI styling
- **ESLint** for code quality and consistency
- **Prettier** for code formatting
- **Multilingual Locale Support**
  - Supported locales: English (en), German (de), Turkish (tr)
  - Automatic locale detection and redirect
  - Easily extendable for additional languages

## Getting Started

1. **Install dependencies:**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

4. **Access different locales:**
   - English: [http://localhost:3000/en](http://localhost:3000/en)
   - German: [http://localhost:3000/de](http://localhost:3000/de)
   - Turkish: [http://localhost:3000/tr](http://localhost:3000/tr)

## Folder Structure

- `src/app/` — Main application code using the App Router
- `src/i18n/` — Internationalization logic
- `src/messages/` — Translation files (JSON)
- `public/` — Static assets

## Customization

### Adding New Locales

To add a new locale:

1. Create a new JSON file in `src/messages/` (e.g., `fr.json`)
2. Add the locale to the `locales` array in `src/i18n/routing.ts`
3. The new locale will be automatically available at `/fr`

### Other Customizations

- Configure ESLint and Prettier rules as needed.
- Extend Tailwind CSS via `tailwind.config.js`.

---

Happy coding! 🚀
