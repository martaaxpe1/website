import type { CaseStudy } from "./types";
import { list, mediaFrom, split, text, youtube } from "./helpers";

const { img, vid } = mediaFrom("culligan");

// Redacted for confidentiality: keep text and media as published. Layout changes only.
export const culligan: CaseStudy = {
  id: "1",
  brand: "Culligan",
  title: "Creating a new product category",
  card: {
    image: "/images/culligan.png",
    tags: ["Product strategy", "Innovation", "Commercialisation"],
    summary:
      "Led the innovation path behind Culligan's new flavoured-water category, from the HydroMe pilot to Twist in market, connecting dispensers, phone touchpoints and a servicing platform.",
  },
  subtitle:
    "I led the innovation path that created the new flavoured-water category. Culligan had hardware and an insight: offices wanted flavoured water. There was no design practice, no cloud platform and no product. What we built instead is a connected ecosystem of dispensers, phone touchpoints and a servicing platform that makes water the drink of choice and cuts single-use plastic.",
  cover: { src: "/cases/culligan/01-hero.jpg", alt: "Culligan Twist flavoured water dispenser in an office" },
  overview:
    "It happened in three phases. HydroMe proved the idea on a retrofitted dispenser. Twist turned it into a commercial product for the US and UK. A new visual brand language then carried the experience across Culligan's whole portfolio, and Purity, the first product line built on it, won a Red Dot Award 2026.",
  client: "Culligan International",
  timeline: "2020 to 2025",
  industry: "Connected consumer goods",
  challenge: [
    { lead: "Starting from zero.", text: "Culligan had hardware and an insight, but no design language, no design team and no IoT infrastructure to build a connected product on." },
    { lead: "Water feels boring.", text: "Many people don't drink enough water because they find it dull. The drinks had to be zero calorie, made with natural ingredients and close to water, not another soda." },
    { lead: "Plastic is still the default.", text: "Single-use bottles remain the easy choice for flavoured drinks at work." },
    { lead: "A service, not just a machine.", text: "Flavours, CO2 and filters had to be stocked, monitored and serviced through Culligan's existing water service operations." },
    { lead: "Two businesses, one product.", text: "The UK and US business units had different needs, and both had to commit before anything could scale." },
  ],
  // The solution diagram is added by the page for this case (SolutionMap).
  delivered: [
    {
      id: "hydrome",
      eyebrow: "Phase 1",
      title: "HydroMe: prove it",
      nodes: [
        split(
          "An innovation sandbox on a retrofitted office dispenser: cheap to trial, good enough to fall for. We piloted HydroMe in London to test whether people would choose flavoured water over bottled drinks, and what it would take to run it as a service. The idea that travelled furthest was touch-free control: scan the QR code on the screen and drive the dispenser from your phone, with nothing to install. An accessible path for anyone who can't use the touchscreen comfortably, and a safe option during COVID-19.",
          vid("07-phone-control", "Touch-free dispensing.", "A hand holds a phone in front of the HydroMe touchscreen and uses it to control the dispenser.", { variant: "phone" }),
          [
            text("Around it, the pilot tested a full connected ecosystem experience:"),
            list([
              { lead: "Touch-free dispensing.", text: "Scan the QR code and pour from your phone, with no app to install. Built for accessibility and for COVID-19 hygiene requirements." },
              { lead: "Touchscreen UX/UI", text: "A dynamic menu combining water types, flavours and functional boosts, built without an existing design system." },
              { lead: "Loyalty without an app.", text: "Points collected in an Apple Wallet pass, tracking hydration and plastic avoided." },
              { lead: "Companion app.", text: "Daily hydration goals, tracked automatically with every pour." },
              { lead: "Connected bottle.", text: "A bottle the dispenser recognises as you approach, with your drink ready before you touch the screen." },
            ]),
          ]
        ),
      ],
    },
    {
      id: "twist",
      eyebrow: "Phase 2",
      title: "Twist: commercialise",
      nodes: [
        text("After trialling and stress-testing in the UK, Quench, Culligan's US business, wanted its own version. We hardened HydroMe into Twist: a commercial flavoured and sparkling water dispenser with a new set of flavours, a brand-aligned touchscreen, the same QR phone control and the same servicing platform underneath. Twist is in market in the US (quench.culligan.com) and the UK (zipwater.co.uk)."),
        youtube("A4jB3SOqyNw", "Culligan Twist, the commercial flavoured and sparkling water dispenser."),
        {
          kind: "split",
          title: "The touchscreen in market",
          text: "Choose chilled, sparkling or room temperature water, add up to three flavours or boosts, and pour. The flow carried over from the pilot, now on the Culligan brand.",
          item: img("13-twist-touchscreen.jpg", "The Twist touchscreen, on the new Culligan brand.", "A finger selects a flavour on the Twist touchscreen, which shows fruit flavours and a round Pour button."),
          wide: true,
        },
      ],
    },
    {
      id: "platform",
      eyebrow: "The servicing platform",
      title: "Culligan One",
      nodes: [
        text("Underneath every dispenser sits the servicing platform we built from the pilot onwards. It shows fleet health, tracks flavours, CO2 and filters, and pushes remote updates, so service teams visit when a machine needs them instead of on a fixed schedule."),
        list([
          { lead: "Lower cost to serve.", text: "Fewer wasted visits and less downtime, because technicians arrive with the right consumables at the right time." },
          { lead: "Recurring revenue.", text: "Consumption data turns flavour and CO2 refills into a predictable subscription business." },
          { lead: "A platform for all connected products.", text: "It was later adopted by every connected Culligan product, giving the company the IoT foundation it did not have." },
        ]),
      ],
    },
  ],
  approach: [
    { title: "Research first.", desc: "More than 100 user interviews before any design, so the product started from what people actually needed." },
    { title: "Time-boxed proofs of concept.", desc: "16 proofs of concept in fixed 8-week cycles, funded centrally. The business units were deliberately left out at this stage, so ideas weren't bent to fit today's roadmap. The first HydroMe prototype came out of this." },
    { title: "Pilot with the business.", desc: "Once a problem was validated, the business unit joined and the go or no-go decision was shared. Four collaborations followed, including the HydroMe pilot in London." },
    { title: "Commercialise and hand over.", desc: "The business unit owned the decision and the delivery, with innovation as the enabler. This is how Twist reached the US, UK and EU." },
    { title: "Systematise.", desc: "The design language came last. Design reviews went wide, then narrowed to three routes, then to the most unmistakably Culligan one. Each layer was defined with an expert lead, and product teams redesigned their flagship products on it to test it in real life." },
  ],
  role: `I led innovation at Culligan for close to five years and ran the operating model behind this work: a cross-functional team of about 15 people, internal and external, across design and engineering, with the COO as early sponsor.

• Led parallel streams: flavour development, IoT, mechanical engineering for flavour dispensing, water technologies and product design
• Built the design practice from zero: touchscreen UX/UI, brand guidelines and every digital touchpoint
• Took HydroMe from the London pilot through cost reduction to market rollout as Twist
• Briefed Ammunition on the brand parameters and drove the digital layer of the design language myself: interaction patterns, on-device UI and the user's mental model
• Ran design reviews throughout and brought sceptical stakeholders on board
• Led user testing and worked with external design and engineering partners
• Aligned the UK and US business units, balancing ambition with manufacturing and supply chain realities`,
  tags: ["Product strategy", "Innovation operating model", "Connected products (IoT)", "UX/UI design", "Design language"],
  impact: {
    items: [
      { metric: "Red Dot 2026", label: "Award for Purity, the first product line on the new design language" },
      { metric: "US, UK, EU", label: "Markets where Twist launched" },
      { metric: "$2.5M", label: "Projected first-year revenue" },
      { metric: "One platform", label: "Adopted by every connected Culligan product" },
      { metric: "16", label: "Proofs of concept in 8-week cycles" },
      { metric: "100+", label: "User interviews before any design" },
    ],
  },
};
