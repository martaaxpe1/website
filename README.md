# martaaxpe.com

Marta Axpe's personal site. Vite + React + TypeScript + Tailwind (originally scaffolded with Lovable, now maintained here).

## Work on it

```sh
npm install      # once
npm run dev      # local preview at http://localhost:8080
npm run build    # production build into dist/
```

- Home page sections: `src/components/` (Hero, Work, Capabilities, Help, Contact)
- Case studies (text, images, order): `src/pages/CaseStudy.tsx`
- Case media and diagram: `src/components/case/`
- Images and videos: `public/` (Culligan media in `public/cases/culligan/`)

## Publish

The site is hosted on GitHub Pages. Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/`.

- `public/CNAME` holds the custom domain (martaaxpe.com).
- `scripts/spa-routes.mjs` copies `index.html` to each route (`/about`, `/case/1` ...) and to `404.html`, so direct links work on static hosting. Add new routes there when you add pages.
