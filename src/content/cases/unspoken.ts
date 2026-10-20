import type { CaseStudy } from "./types";
import { mediaFrom, phones, screens, text } from "./helpers";

const { img, vid } = mediaFrom("unspoken");
const phone = { variant: "phone" as const };

export const unspoken: CaseStudy = {
  id: "4",
  brand: "Unspoken",
  title: "Unspoken Diary",
  card: {
    image: "/images/unspoken.png",
    tags: ["Product design", "Experience design", "AI-assisted development"],
    summary:
      "A photo diary for a three-day summit: a secret lens, one sealed photo a day and an anonymous reveal for the room. Designed end to end and taken live with Claude Code.",
  },
  subtitle:
    "A photo diary for a three-day summit. I designed it and took it live with Claude Code, making every trade-off myself.",
  overview: `For the Unspoken Summit, 10 to 12 October 2026, I wanted people to look differently, not just take more photos. Each attendee got a secret lens, such as Workarounds, Reflections or Light and shadow, and one photo a day for three days. Each photo came with one line on why. Once saved, it was sealed for good. On the last day I presented every diary to the room, one lens at a time, without names.

I designed the product end to end and built it with Claude Code, without a background in development. The point was not only to ship it, but to understand what I shipped: I chose tools I could follow, wrote the rules the AI had to respect, and tested every step on real phones.`,
  heroMedia: vid(
    "01-hero-presenting-a-lens",
    "Presenting one diary to the room: the lens, three days, and the whole diary.",
    "The Light and shadow diary on the projector, moving from the lens to each day's photo and the reason behind it.",
    { loop: true }
  ),
  client: "Unspoken",
  timeline: "12 hours of build, 3 days of testing",
  industry: "UX Research",
  challenge: [
    { lead: "Personal, without accounts.", text: "Seven people, three days, no app to install and no password to forget." },
    { lead: "Slow looking, not more photos.", text: "One lens, one photo a day and a reason, so the exercise is about attention." },
    { lead: "Saved is final.", text: "A sealed photo can never be changed or deleted, and that rule has to hold on the server, not just on screen." },
    { lead: "A reveal without exposure.", text: "The room sees every diary, but never who made it." },
    { lead: "Shipping as a designer.", text: "A real product, online and safe with personal data, built by someone learning to code." },
  ],
  delivered: [
    {
      id: "private-diary",
      title: "A private diary behind one link",
      nodes: [
        text("Each person opens their diary from a personal link: no sign-up, nothing to remember. The first visit frames the exercise, introduces their lens and asks them to accept the challenge."),
        phones([
          img("02-phone-onboarding.jpg", "Onboarding.", "A personal welcome screen on a phone.", phone),
          img("03-phone-diary.jpg", "The diary on day two.", "A diary with day one sealed and day two open.", phone),
          img("04-phone-your-lens.jpg", "The secret lens.", "The Light and shadow lens card.", phone),
        ]),
      ],
    },
    {
      id: "sealed",
      title: "One photo a day, sealed for good",
      nodes: [
        text("Each morning's prompt sharpens the lens. People pick a photo, add one line on why and seal the day. The confirm step is calm, not alarming, and nothing is uploaded until they seal."),
        phones([
          vid("07-phone-sealing-a-day", "Sealing day three, from the diary to the Done screen.", "A phone recording: opening day three, choosing a photo, typing why, and sealing it.", { ...phone, loop: true }),
          img("05-phone-todays-photo.jpg", undefined, "Today's photo chosen, with a line on why.", phone),
          img("06-phone-seal-this-day.jpg", undefined, "The confirm step to seal the day.", phone),
        ]),
      ],
    },
    {
      id: "record",
      title: "A record that cannot be rewritten",
      nodes: [
        text("Sealed days show the photo, the reason and when it was saved. When all three are in, the diary says so and points to the reveal."),
        phones([
          img("08-phone-sealed-day.jpg", "A sealed day.", "A sealed day with its photo and reason.", phone),
          img("09-phone-done.jpg", "All three days sealed.", "The Done state of the diary.", phone),
        ]),
      ],
    },
    {
      id: "nudge",
      title: "A morning nudge",
      nodes: [
        text("At 08:00 each day, an email carries that day's prompt and a link back to the diary, whether or not that day's photo is already in."),
        screens([img("12-laptop-nudges.jpg", "Nudge schedule and email preview.", "The nudge schedule with a preview of the morning email.")]),
      ],
    },
    {
      id: "dashboard",
      title: "A facilitator dashboard",
      nodes: [
        text("From my laptop I could set up lenses and daily prompts, add people, copy each personal link and follow progress day by day."),
        screens([
          img("10-laptop-participants.jpg", "Progress across the three days.", "Facilitator screen showing participants with a thumbnail per day."),
          img("11-laptop-lenses.jpg", "Lenses and their daily prompts.", "The lens editor with daily prompts."),
        ]),
      ],
    },
    {
      id: "reveal",
      title: "A reveal for the room",
      nodes: [
        text("On the last day, each lens is shown on the projector in five steps: the lens, each day's photo with its reason behind \"Show why\", and the whole diary. Names never appear."),
        screens([img("13-laptop-reveal.jpg", "Choosing which lens to present.", "The reveal screen listing the lenses to present.")]),
        screens([
          img("14-projector-lens.jpg", "The lens.", "The Workarounds lens on the projector."),
          img("15-projector-day-with-why.jpg", "One day, with its reason revealed.", "One day's photo on the projector with its reason shown."),
        ]),
      ],
    },
    {
      id: "lenses",
      title: "Seven lenses, written for the summit",
      nodes: [
        text("Traces, Workarounds, Thresholds, Together and apart, Framing within the frame, Reflections, and Light and shadow. Each has a one-line prompt, a short explanation and three daily prompts that build on each other."),
      ],
    },
  ],
  approach: [
    {
      title: "Design in Claude Design.",
      desc: "22 screens across phone, laptop and projector, with design tokens and every state.",
      tradeoff: "HTML screens as the spec instead of a Figma file and a handoff doc. Exact sizes, colours and copy go straight into the build, but every design change needs a fresh export.",
    },
    {
      title: "A spec the AI reads every session.",
      desc: "A product requirements doc and standing instructions for Claude Code: flows, copy, and the rules that must hold, like \"sealed is final\" and \"names never appear\". The build was split into ten tickets, each small enough to test on its own.",
      tradeoff: "a secret personal link per guest instead of accounts. One tap from the morning email, but the link is the key, so it is never logged or shared.",
    },
    {
      title: "Build with Claude Code.",
      desc: "I planned, reviewed and tested, and the AI wrote the code: a small Express server, pages as HTML templates, a SQLite database in one file, and photos resized with location data removed.",
      tradeoff: "simple server-rendered pages instead of a React app and a hosted database. The code reads like my HTML and uses six packages I can follow, at the cost of less app-like motion.",
    },
    {
      title: "Test on real phones.",
      desc: "Every ticket was tried on iPhone Safari and Android Chrome before it counted as done, with a fake date to rehearse all three days in advance.",
      tradeoff: "one layout on the projector instead of my portrait and landscape split. Every photo reads the same way in the room, but landscape photos show a little smaller.",
    },
    {
      title: "Run it live.",
      desc: "Hosted on Render with a disk for photos, emails through Resend, every version on GitHub, and secrets kept out of the code.",
      tradeoff: "a small paid server instead of the free tier. It is always on, so the 08:00 email goes out and photos persist, for a monthly bill on a three-day event.",
    },
  ],
  role: `I took the product from idea to live use:

• Designed the experience and all 22 screens, from the participant's phone to the projector
• Wrote the lenses, daily prompts and every line of copy
• Wrote the product spec and the rules the build had to respect
• Directed the build with Claude Code ticket by ticket, reviewing and testing each step
• Put it online, ran it during the summit and presented the diaries to the room`,
  tags: ["Product design", "Experience design", "Content design", "Facilitation", "AI-assisted development"],
  extra: [
    {
      id: "diaries",
      label: "Two diaries",
      title: "Two of the seven diaries",
      nodes: [
        text("Real diaries from the summit, shown the way the room saw them."),
        screens([
          img("16-projector-whole-diary-workarounds.jpg", "Workarounds.", "The whole Workarounds diary on the projector: three photos, each day's prompt and the reason behind each photo."),
          img("17-projector-whole-diary-light-and-shadow.jpg", "Light and shadow.", "The whole Light and shadow diary on the projector: three photos, each day's prompt and the reason behind each photo."),
        ]),
      ],
    },
  ],
  impact: {
    items: [
      { metric: "7 of 7", label: "People accepted the challenge" },
      { metric: "19 of 21", label: "Photos sealed across the three days" },
      { metric: "7", label: "Lenses presented to the room" },
    ],
  },
};
