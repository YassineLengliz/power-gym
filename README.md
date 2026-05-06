# Power Gym Kelibia

Source-based Vite React site for Power Gym Kelibia.

## Structure

- `src/pages`: website pages.
- `src/components`: shared layout and UI.
- `src/data`: editable site data such as activities and staff.
- `api`: Vercel serverless endpoints for backend-style JSON data.
- `assets`: source images used by the app.

## Commands

```bash
npm install
npm run dev
npm run build
```

Vercel builds with `npm run build` and deploys the generated `dist` folder. JS and CSS filenames are content-hashed, so normal refreshes pick up new deployments without editing minified bundles.
