import { culligan } from "./culligan";
import { tikkie } from "./tikkie";
import { unspoken } from "./unspoken";
import { vueling } from "./vueling";
import type { CaseStudy } from "./types";

/**
 * Draft cases live in ./drafts/ and are git-ignored: they show when you preview on this
 * computer but never reach GitHub or the live site. To publish one, move its file up into
 * this folder, import it here, and remove its media folder from .gitignore.
 */
const drafts = Object.values(import.meta.glob<Record<string, CaseStudy>>("./drafts/*.ts", { eager: true })).flatMap(
  (mod) => Object.values(mod)
);

/** Order here = order of the cards on the home page. New case: add a file, import it, add it here and its route in scripts/spa-routes.mjs. */
export const cases: CaseStudy[] = [culligan, ...drafts, unspoken, vueling, tikkie];

export const getCase = (id: string | undefined) => cases.find((c) => c.id === id);

export type { CaseStudy } from "./types";
