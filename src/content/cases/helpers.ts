import type { CaseNode, LeadItem, MediaItem } from "@/components/case/CaseMedia";

/** Media helpers bound to one case folder in public/cases/<folder>/ */
export const mediaFrom = (folder: string) => {
  const base = `/cases/${folder}/`;
  return {
    img: (file: string, caption: string | undefined, alt: string, opts: Partial<MediaItem> = {}): MediaItem => ({
      type: "image",
      src: base + file,
      caption,
      alt,
      ...opts,
    }),
    /** video "<name>.mp4" with poster "<name>-poster.jpg" */
    vid: (name: string, caption: string | undefined, alt: string, opts: Partial<MediaItem> = {}): MediaItem => ({
      type: "video",
      src: `${base}${name}.mp4`,
      poster: `${base}${name}-poster.jpg`,
      caption,
      alt,
      ...opts,
    }),
  };
};

export const text = (t: string): CaseNode => ({ kind: "text", text: t });
export const lead = (l: string, t: string): CaseNode => ({ kind: "lead", lead: l, text: t });
export const media = (item: MediaItem): CaseNode => ({ kind: "media", item });
export const list = (items: LeadItem[]): CaseNode => ({ kind: "list", items });
export const split = (t: string, item: MediaItem, after?: CaseNode[]): CaseNode => ({ kind: "split", text: t, item, after });
export const phones = (items: MediaItem[]): CaseNode => ({ kind: "phoneRow", items });
export const screens = (items: MediaItem[]): CaseNode => ({ kind: "screens", items });
export const quote = (t: string, cite?: string): CaseNode => ({ kind: "quote", text: t, cite });
export const youtube = (id: string, caption: string): CaseNode => ({ kind: "youtube", id, caption });
export const placeholder = (label: string, isMedia = false): CaseNode => ({ kind: "placeholder", label, media: isMedia });
