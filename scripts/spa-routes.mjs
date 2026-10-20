// GitHub Pages serves static files only. Copy index.html to every app route so
// direct links like /case/1 load the site instead of a 404, and use it as the 404 page.
import { copyFileSync, mkdirSync } from "node:fs";

const routes = ["about", "case/1", "case/2", "case/3", "case/4", "case/5"];
copyFileSync("dist/index.html", "dist/404.html");
for (const route of routes) {
  mkdirSync(`dist/${route}`, { recursive: true });
  copyFileSync("dist/index.html", `dist/${route}/index.html`);
}
console.log(`SPA routes written: ${routes.join(", ")} + 404.html`);
