import { useEffect, useRef, useState } from "react";

export type MediaItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
  caption?: string;
  alt: string;
  /** "phone" = phone screen in a dark phone frame */
  variant?: "phone";
  /** in fixed frames: "cover" fills the frame and crops, default fits inside it */
  fit?: "cover";
  /** silent looping clip (a former GIF): autoplays, no controls */
  loop?: boolean;
  /** caps the width of a standalone figure, e.g. for portrait photos */
  maxWidth?: "sm" | "md";
};

export type LeadItem = { lead: string; text: string };

export type CaseNode =
  | { kind: "text"; text: string }
  /** paragraph that opens with a bold lead-in */
  | { kind: "lead"; lead: string; text: string }
  | { kind: "media"; item: MediaItem }
  | { kind: "list"; items: LeadItem[] }
  /** paragraph on the left, media on the right (stacks on mobile); "after" continues in the text column */
  | { kind: "split"; title?: string; text: string; item: MediaItem; after?: CaseNode[]; wide?: boolean }
  /** two or three phone screens side by side; scrolls sideways on mobile */
  | { kind: "phoneRow"; items: MediaItem[] }
  /** laptop or projector screens, two per row on desktop */
  | { kind: "screens"; items: MediaItem[] }
  | { kind: "quote"; text: string; cite?: string }
  | { kind: "youtube"; id: string; caption: string }
  /** visible stand-in for content still to come */
  | { kind: "placeholder"; label: string; media?: boolean };

const LazyVideo = ({ item, className, onFail }: { item: MediaItem; className?: string; onFail: () => void }) => {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      src={item.src}
      poster={item.poster}
      muted
      loop
      playsInline
      controls={!item.loop}
      preload="none"
      aria-label={item.alt}
      onError={onFail}
      className={className}
    />
  );
};

/** Renders an image, or a video that falls back to its poster if the file is missing. */
export const Media = ({ item, className }: { item: MediaItem; className: string }) => {
  const [videoFailed, setVideoFailed] = useState(false);
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;
  if (item.type === "video" && !videoFailed) {
    return <LazyVideo item={item} className={className} onFail={() => setVideoFailed(true)} />;
  }
  const src = item.type === "video" ? item.poster : item.src;
  if (!src) return null;
  return <img src={src} alt={item.alt} loading="lazy" decoding="async" onError={() => setHidden(true)} className={className} />;
};

const phoneFrame = "w-full h-auto rounded-[1.75rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-xl";
const screenFrame = "w-full h-auto rounded-xl border bg-muted";

export const CaseFigure = ({ item, compact = false }: { item: MediaItem; compact?: boolean }) => {
  const phone = item.variant === "phone" || compact;
  const width = phone
    ? compact
      ? "w-full max-w-[220px] mx-auto md:max-w-none"
      : "max-w-[260px] mx-auto"
    : item.maxWidth === "sm"
      ? "w-full max-w-sm"
      : item.maxWidth === "md"
        ? "w-full max-w-md"
        : "w-full";
  return (
    <figure className={width}>
      <Media item={item} className={phone ? phoneFrame : screenFrame} />
      {item.caption && <figcaption className="text-sm text-muted-foreground mt-2">{item.caption}</figcaption>}
    </figure>
  );
};

/** Short lead + text items: a grid of small cards, or a plain divided list beside media. */
const CaseList = ({ items, plain = false }: { items: LeadItem[]; plain?: boolean }) =>
  plain ? (
    <ul className="divide-y border-y">
      {items.map((li) => (
        <li key={li.lead} className="py-3 text-muted-foreground">
          <strong className="text-foreground">{li.lead.replace(/\.$/, "")}.</strong> {li.text}
        </li>
      ))}
    </ul>
  ) : (
    <ul className={`grid gap-4 sm:grid-cols-2 ${items.length % 3 === 0 ? "lg:grid-cols-3" : ""}`}>
      {items.map((li) => (
        <li key={li.lead} className="rounded-xl border bg-card p-5">
          <span className="mb-3 block h-1 w-6 rounded-full bg-primary" />
          <p className="font-bold text-foreground">{li.lead.replace(/\.$/, "")}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{li.text}</p>
        </li>
      ))}
    </ul>
  );

export const Placeholder = ({ label, media = false }: { label: string; media?: boolean }) => (
  <div
    className={`flex items-center justify-center rounded-xl border-2 border-dashed border-primary/40 bg-primary/5 p-6 text-center text-sm font-medium text-primary-text ${
      media ? "min-h-48 md:min-h-64" : ""
    }`}
  >
    <span>
      <span className="mr-1 uppercase tracking-[0.15em] text-[11px]">Placeholder</span> {label}
    </span>
  </div>
);

export const CaseNodes = ({ nodes, plainLists = false }: { nodes: CaseNode[]; plainLists?: boolean }) => (
  <div className="space-y-6">
    {nodes.map((n, i) => {
      switch (n.kind) {
        case "text":
          return <p key={i} className="text-muted-foreground">{n.text}</p>;
        case "lead":
          return (
            <p key={i} className="text-muted-foreground">
              <strong className="text-foreground">{n.lead}</strong> {n.text}
            </p>
          );
        case "media":
          return <CaseFigure key={i} item={n.item} />;
        case "list":
          return <CaseList key={i} items={n.items} plain={plainLists} />;
        case "split":
          return (
            <div
              key={i}
              className={`grid gap-6 md:gap-10 md:items-start ${
                n.wide ? "md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]" : "md:grid-cols-[minmax(0,1fr)_220px] md:gap-14"
              }`}
            >
              <div className="min-w-0 space-y-4 md:self-center">
                {n.title && <h4 className="font-bold text-foreground">{n.title}</h4>}
                <p className="text-muted-foreground">{n.text}</p>
                {n.after && <CaseNodes nodes={n.after} plainLists />}
              </div>
              {n.wide ? <CaseFigure item={n.item} /> : <CaseFigure item={n.item} compact />}
            </div>
          );
        case "phoneRow":
          return (
            <div key={i} className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
              <div className="flex gap-5 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:gap-6">
                {n.items.map((it) => (
                  <figure key={it.src} className="w-[62%] shrink-0 snap-start sm:w-auto">
                    <Media item={it} className={phoneFrame} />
                    {it.caption && <figcaption className="text-sm text-muted-foreground mt-2">{it.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </div>
          );
        case "screens":
          return (
            <div key={i} className={`grid gap-6 ${n.items.length > 1 ? "md:grid-cols-2" : ""}`}>
              {n.items.map((it) => (
                <CaseFigure key={it.src} item={it} />
              ))}
            </div>
          );
        case "quote":
          return (
            <blockquote key={i} className="border-l-2 border-primary pl-5 py-1">
              <p className="text-lg sm:text-xl font-display text-foreground leading-snug">{n.text}</p>
              {n.cite && <footer className="mt-2 text-sm text-muted-foreground">{n.cite}</footer>}
            </blockquote>
          );
        case "youtube":
          return (
            <figure key={i} className="space-y-2">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border bg-muted">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${n.id}`}
                  title={n.caption}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <figcaption className="text-sm text-muted-foreground">{n.caption}</figcaption>
            </figure>
          );
        case "placeholder":
          return <Placeholder key={i} label={n.label} media={n.media} />;
      }
    })}
  </div>
);
