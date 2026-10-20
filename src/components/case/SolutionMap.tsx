import { useId, useLayoutEffect, useRef, useState } from "react";

const culliganLogo = "/cases/culligan/culligan-logo.webp";

type Node = { tag: string; title: string; text: string };

const left: Node[] = [
  { tag: "On-device", title: "Personalised flavour selection", text: "End-user touchscreen UX/UI. Custom water and flavour profiles in a dynamic menu." },
  { tag: "Back office servicing", title: "Culligan One dashboard", text: "Proactive maintenance and alerts: consumable levels and real-time dispenser health." },
];
const right: Node[] = [
  { tag: "No app", title: "Touchfree dispensing", text: "Hands-free dispensing via App Clip: scan, choose, pour. Instant, with no install needed." },
  { tag: "No app", title: "Wallet-based loyalty program", text: "Loyalty lives in a Wallet Pass, points earned automatically, no separate account." },
  { tag: "Companion app", title: "Culligan HydroMe app", text: "Rich hydration tracking and wellness: personalised goals, tracked automatically every dispense." },
];

const Card = ({ n, side }: { n: Node; side: "l" | "r" }) => (
  <div data-solution-card={side} className="relative flex items-center">
    <div className="flex-1 rounded-xl border bg-card p-4 shadow-sm">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-text mb-1">{n.tag}</p>
      <p className="font-display font-bold text-foreground leading-snug">{n.title}</p>
      <p className="text-sm text-muted-foreground mt-1">{n.text}</p>
    </div>
  </div>
);

export const SolutionMap = ({ deviceSrc }: { deviceSrc: string }) => {
  const diagramRef = useRef<HTMLDivElement>(null);
  const markerId = useId().replace(/:/g, "");
  const [connectors, setConnectors] = useState<Array<{ x1: number; y1: number; x2: number; y2: number }>>([]);

  useLayoutEffect(() => {
    const diagram = diagramRef.current;
    const image = diagram?.querySelector("img");
    if (!diagram || !image) return;
    const update = () => {
      const bounds = diagram.getBoundingClientRect();
      const device = image.getBoundingClientRect();
      setConnectors(Array.from(diagram.querySelectorAll<HTMLElement>("[data-solution-card]")).map((card) => {
        const target = card.getBoundingClientRect();
        const isLeft = card.dataset.solutionCard === "l";
        // Horizontal connector: start at the device's edge, level with the card's centre.
        const y = target.top + target.height / 2 - bounds.top;
        return {
          x1: (isLeft ? device.left : device.right) - bounds.left,
          y1: y,
          x2: (isLeft ? target.right : target.left) - bounds.left,
          y2: y,
        };
      }));
    };
    const observer = new ResizeObserver(update);
    observer.observe(diagram);
    observer.observe(image);
    diagram.querySelectorAll("[data-solution-card]").forEach((card) => observer.observe(card));
    update();
    return () => observer.disconnect();
  }, [deviceSrc]);

  return (
  <figure className="mt-10">
    <h3 className="mb-6 text-sm font-semibold text-primary-text">The shape of the solution</h3>
    <div className="flex flex-col items-center mb-4">
      <div className="relative w-64 h-36 text-center">
        <svg viewBox="0 0 280 156" aria-hidden="true" className="absolute inset-0 h-full w-full fill-card stroke-border" strokeWidth="1.5">
          <path d="M54 145C26 145 8 128 8 105C8 83 24 66 46 64C45 39 65 19 90 19C104 19 117 25 125 35C136 17 155 8 175 12C199 16 215 35 216 58C247 57 272 76 272 102C272 127 253 145 227 145Z" />
        </svg>
        <div className="relative flex h-full flex-col items-center justify-center gap-1 pt-8 px-8">
          <img src={culliganLogo} alt="Culligan" loading="lazy" className="h-10 w-28 object-contain" />
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary-text">Central cloud platform</p>
        </div>
      </div>
      <span className="flex items-end gap-3">
        <span className="flex flex-col items-center">
          <span className="w-px h-6 bg-muted-foreground" />
          <span className="w-0 h-0 border-x-[5px] border-x-transparent border-t-[7px] border-t-muted-foreground" />
        </span>
        <span className="flex flex-col-reverse items-center">
          <span className="w-px h-6 bg-muted-foreground" />
          <span className="w-0 h-0 border-x-[5px] border-x-transparent border-b-[7px] border-b-muted-foreground" />
        </span>
      </span>
    </div>
    <div ref={diagramRef} className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 lg:gap-12 items-center">
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible text-muted-foreground md:block">
        <defs>
          <marker id={markerId} markerWidth="7" markerHeight="10" refX="7" refY="5" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M0 0L7 5L0 10Z" fill="currentColor" />
          </marker>
        </defs>
        {connectors.map((line, index) => <line key={index} {...line} stroke="currentColor" strokeWidth="1" markerEnd={`url(#${markerId})`} />)}
      </svg>
      <div className="space-y-4 order-2 md:order-1">{left.map((n) => <Card key={n.title} n={n} side="l" />)}</div>
      <div className="order-1 md:order-2 flex flex-col items-center px-2">
        <img src={deviceSrc} alt="The connected HydroMe dispenser at the centre of the system." loading="lazy" className="w-40 md:w-52 object-contain" />
        <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground text-center">Connected dispenser · HydroMe</p>
      </div>
      <div className="space-y-4 order-3">{right.map((n) => <Card key={n.title} n={n} side="r" />)}</div>
    </div>
  </figure>
  );
};
