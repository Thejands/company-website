/** Central content — enterprise partner positioning for Thejands */

export const home = {
  eyebrow: "Enterprise Software · Consulting · Digital Products · Partnerships",
  headline: "Enterprise-grade delivery.\nPartner-level commitment.",
  subhead:
    "Thejands works alongside large organisations, growing companies, and technology teams to build software, implement platforms, and consult on the projects that matter most — with founders accountable for every outcome.",
  primaryCta: { label: "Start a conversation", href: "/contact" },
  secondaryCta: { label: "See our work", href: "/services" },
  proof: [
    "Enterprise-scale delivery capability",
    "Software, mobile & platform build",
    "LMS & EdTech consulting",
    "Resource & partner engagements",
  ],
} as const;

export const stickyShowcase = {
  title: "How we ship faster",
  subtitle:
    "Most teams lose weeks to misaligned scope, vague proposals, and status meetings. We cut all of that — and ship production-quality work in the time others spend planning.",
  items: [
    {
      id: "discover",
      title: "Scope it in one session",
      icon: "search",
      body: "A single 60-minute discovery call with the right stakeholders is enough to define the problem, agree the constraints, and identify risks — before we write a single line of proposal. You get a scoped written proposal within 24 hours of that call, not five rounds of back-and-forth. We ask the hard questions so you don't have to revisit scope mid-delivery.",
    },
    {
      id: "design",
      title: "Align before building",
      icon: "pen-tool",
      body: "Architecture decisions, interface direction, and implementation approach are locked in writing before we build — which means no costly pivots later. We produce technical specs and prototypes that your team can review and approve in days, not weeks. Misaligned requirements are the single biggest cause of slow delivery. We remove them at the start.",
    },
    {
      id: "build",
      title: "Ship in 1–2 week cycles",
      icon: "code",
      body: "Work moves in short, visible cycles with live demos every sprint. You see real increments, not slide decks. The engineers doing the work are directly reachable — there are no account managers relaying feedback. Issues are raised the moment they're spotted, not at milestone deadlines. Our fastest production-ready build: 6 weeks from brief to launch.",
    },
    {
      id: "launch",
      title: "Hand over clean, keep moving",
      icon: "rocket",
      body: "Every production release ships with documentation your internal team can actually use, a knowledge transfer session, and 30 days of stabilisation support. No open questions, no dependencies on us. If your timeline demands ongoing velocity, we offer retainer models that keep the team live without restarting the ramp-up cycle.",
    },
  ],
} as const;

export const servicesPage = {
  title: "What we do",
  subtitle:
    "From enterprise software builds to LMS implementations and technology consulting — we work at the intersection of strategy, engineering, and delivery. Pick a capability or tell us the outcome and we'll map the right engagement.",
  offerings: [
    {
      id: "software",
      name: "Software & Product Development",
      tagline: "Enterprise-grade, built to last",
      icon: "terminal",
      description:
        "We design and build web applications, mobile products, and custom software for organisations that need more than an off-the-shelf solution. Deliverables meet enterprise standards: documented, tested, security-hardened, and maintainable by your internal teams after handover — with zero lock-in. Typical build engagements run 6–24 weeks on fixed-scope milestones.",
      features: [
        "React, Next.js, Node.js & TypeScript web platforms",
        "Mobile apps for iOS and Android — React Native & Flutter",
        "API design, microservices & cloud infrastructure (AWS · Azure)",
        "SaaS products, internal tools & customer-facing portals",
        "CI/CD pipelines, security hardening & observability",
        "Full codebase handover with documentation & 30-day support",
      ],
    },
    {
      id: "consulting",
      name: "Technology Consulting",
      tagline: "Strategy that translates to action",
      icon: "layers",
      description:
        "We consult at the project, platform, and programme level — from technology strategy and vendor selection to LMS implementation, digital transformation, and interim technical leadership. We bring senior-level thinking — Linga and Somu on every mandate — without the senior-firm overhead. Engagements run as day-rate advisory or structured sprints with written deliverables.",
      features: [
        "Moodle LMS implementation, customisation & plugin development",
        "EdTech platform strategy, LMS selection & migration",
        "Technology due diligence & architecture review",
        "Digital transformation roadmapping",
        "Vendor selection, RFP support & evaluation",
        "Interim CTO / technical advisory engagements",
      ],
    },
    {
      id: "partnerships",
      name: "Resource & Partner Engagements",
      tagline: "Extend your team, not your headcount",
      icon: "globe",
      description:
        "We work alongside partner organisations as an embedded technical resource — providing engineering capacity, delivery management, or specialist expertise for projects your team can't resource alone. Structured for long-term collaboration, not transactional freelancing.",
      features: [
        "Dedicated engineering teams for partner projects",
        "White-label delivery under your brand",
        "Candidate consulting & technical screening",
        "Joint go-to-market on digital product mandates",
        "Retainer-based capacity for ongoing demand",
        "NDAs, SLAs & enterprise-grade contract structures",
      ],
    },
  ],
  cta: {
    title: "Not sure which engagement fits?",
    body: "Most of our mandates blend two or three of these capabilities. Describe the outcome you need — we'll propose the right shape, team, and commercial structure to match.",
    button: { label: "Start a conversation", href: "/contact" },
  },
} as const;

export const processPage = {
  title: "How we engage",
  subtitle:
    "A structured delivery rhythm from first conversation to signed-off deliverable. No mystery phases, no vague timelines — every stage is visible and accountable.",
  steps: [
    {
      number: "01",
      title: "Discovery",
      summary: "Understand before we propose.",
      body: "A focused session with the right stakeholders to map the problem, constraints, existing systems, and success criteria. We ask the questions most partners skip — so the scope we propose is realistic and the timeline is defensible.",
    },
    {
      number: "02",
      title: "Proposal",
      summary: "Scope, timeline, and cost — in plain language.",
      body: "A written proposal covering what we'll build or deliver, how long it will take, what it will cost, and what we need from your side. Fixed-scope milestones for build work; structured retainers for consulting and resource engagements. No hourly mystery.",
    },
    {
      number: "03",
      title: "Delivery",
      summary: "Regular demos. Real increments.",
      body: "Work progresses in short cycles with regular demos or written updates — depending on the engagement type. You have direct access to the people doing the work, not account managers. Issues surface early, not at deadline.",
    },
    {
      number: "04",
      title: "Review",
      summary: "Stakeholder sign-off at every milestone.",
      body: "Each milestone ends with a structured review — outputs against scope, quality checks, and any course corrections agreed in writing. Nothing moves to the next phase without your explicit approval.",
    },
    {
      number: "05",
      title: "Handover & Beyond",
      summary: "Clean exit or long-term partnership — your choice.",
      body: "Deliverables come with documentation, knowledge transfer, and support during stabilisation. We offer retainer models for ongoing work. We don't engineer dependency — you can take what we build and run it without us.",
    },
  ],
  terminal: {
    lines: [
      { type: "comment" as const, text: "# thejands engagement model" },
      {
        type: "command" as const,
        text: '$ thejands init --brief "your requirement"',
      },
      { type: "output" as const, text: "→ Discovery call scheduled" },
      { type: "command" as const, text: "$ thejands deliver --env production" },
      { type: "output" as const, text: "✓ Signed off · documented · yours" },
    ],
  },
} as const;

export const aboutPage = {
  title: "The team behind the delivery",
  subtitle:
    "Thejands was built on a straightforward premise: enterprises deserve a technology partner that's senior enough to understand the problem and accountable enough to own the outcome.",
  story: {
    title: "Why Thejands exists",
    paragraphs: [
      "Large organisations often face the same problem — the partners they can trust are too expensive, and the ones they can afford aren't senior enough. Thejands was built to close that gap.",
      "Linga and Somu founded Thejands to deliver enterprise-grade software and consulting with the accountability of a founder-led team. That means senior people on every engagement, not juniors supervised from a distance.",
      "Today we work with enterprises, mid-market companies, and technology teams who need a partner with genuine depth — whether that's building a platform, implementing an LMS, or providing technical resource for a programme they can't fully staff internally.",
    ],
  },
  values: [
    {
      title: "Outcomes over activity",
      body: "We're measured by what ships and what works — not by hours logged or decks produced. Every engagement is scoped against a real business outcome, not an activity list.",
    },
    {
      title: "Senior by default",
      body: "The people you meet in the proposal are the people who do the work. We don't staff engagements with juniors and manage them from a distance. You get experienced judgment from day one.",
    },
    {
      title: "Radical transparency",
      body: "Scope, timeline, budget, risks — visible at all times. If something changes, you hear it from us first, in writing, with a proposed resolution. No surprises at invoice time.",
    },
    {
      title: "Clean exits, always",
      body: "Everything we deliver is documented and transferable. We don't engineer dependency. Your code, your infrastructure, your IP — you can take it and run without us whenever you're ready.",
    },
  ],
  founders: [
    {
      name: "Linga",
      role: "Co-founder · Engineering & Architecture",
      bio: "Linga leads the technical side of every engagement — from system architecture and technology selection to delivery oversight and code quality. He has deep experience building enterprise-scale platforms and brings that same rigour to every project, regardless of size. He's the one asking the uncomfortable scoping questions and writing the first lines in production.",
      strengths: [
        "Enterprise system architecture",
        "Full-stack engineering leadership",
        "Platform scalability & performance",
        "Technical due diligence & advisory",
      ],
    },
    {
      name: "Somu",
      role: "Co-founder · Product & Client Delivery",
      bio: "Somu owns the product, design, and delivery side of every engagement. He ensures that what gets built is what was scoped, that stakeholders are never surprised, and that the final product is something the client is proud to put in front of their users. He's equally comfortable in a boardroom and a sprint review.",
      strengths: [
        "Product strategy & UX leadership",
        "Client engagement & delivery management",
        "Quality assurance & launch readiness",
        "Stakeholder communication & reporting",
      ],
    },
  ],
  cta: {
    title: "Want to understand how we'd approach your brief?",
    body: "Get 30 minutes with Linga or Somu. We'll ask the right questions, give you an honest read on fit, and outline what an engagement might look like — no deck, no pitch.",
    button: { label: "Start a conversation", href: "/contact" },
  },
} as const;

export const testimonials = [
  {
    quote:
      "We gave them a rough brief on a Monday. By Thursday they'd already pushed a working prototype and flagged two things in our spec that would've caused problems later. Ended up shipping three weeks ahead of what we'd planned.",
    name: "Arjun Nair",
    role: "Product Lead",
    company: "SaaS Platform",
    result: "3 weeks early",
  },
  {
    quote:
      "Honestly what stood out was they told us upfront what wouldn't work. We nearly went with a bad architecture call — they pushed back, explained why, and we changed course before writing a single line. That conversation alone saved us months.",
    name: "Meera Krishnan",
    role: "CTO",
    company: "Enterprise EdTech",
    result: "Zero scope creep",
  },
] as const;

export const stats = [
  { label: "Enterprises served", value: "50+" },
  { label: "Successful deliveries", value: "40+" },
  { label: "Industries", value: "12+" },
  { label: "Countries", value: "3+" },
] as const;

export const techStack = {
  title: "Technologies we deliver in",
  subtitle:
    "We select technology for your organisation's long-term maintainability, your team's existing capabilities, and your infrastructure constraints — not for what's trending.",
  items: [
    { name: "React", icon: "simple-icons:react" },
    { name: "Next.js", icon: "simple-icons:nextdotjs" },
    { name: "TypeScript", icon: "simple-icons:typescript" },
    { name: "Node.js", icon: "simple-icons:nodedotjs" },
    { name: "Python", icon: "simple-icons:python" },
    { name: "PostgreSQL", icon: "simple-icons:postgresql" },
    { name: "AWS", icon: "simple-icons:amazonaws" },
    { name: "Azure", icon: "simple-icons:microsoftazure" },
    { name: "Docker", icon: "simple-icons:docker" },
    { name: "Kubernetes", icon: "simple-icons:kubernetes" },
    { name: "GraphQL", icon: "simple-icons:graphql" },
    { name: "MongoDB", icon: "simple-icons:mongodb" },
    { name: "Moodle", icon: "simple-icons:moodle" },
    { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
    { name: "Flutter", icon: "simple-icons:flutter" },
    { name: "React Native", icon: "simple-icons:react" },
    { name: "Supabase", icon: "simple-icons:supabase" },
    { name: "Stripe", icon: "simple-icons:stripe" },
    { name: "Redis", icon: "simple-icons:redis" },
    { name: "Terraform", icon: "simple-icons:terraform" },
    { name: "Hover", icon: "tabler:world" },
    { name: "Vercel", icon: "simple-icons:vercel" },
    { name: "Prisma", icon: "simple-icons:prisma" },
    { name: "tRPC", icon: "simple-icons:trpc" },
    { name: "Go", icon: "simple-icons:go" },
    { name: "GitHub Actions", icon: "simple-icons:githubactions" },
    { name: "Figma", icon: "simple-icons:figma" },
    { name: "Cloudflare", icon: "simple-icons:cloudflare" },
    { name: "Fastify", icon: "simple-icons:fastify" },
    { name: "Astro", icon: "simple-icons:astro" },
  ],
} as const;

export const whyUs = [
  {
    icon: "users",
    title: "Founders on every engagement",
    body: "Linga and Somu are directly involved in every project — not account managers. You get senior judgment from kickoff to handover, not a bait-and-switch to juniors after the proposal.",
  },
  {
    icon: "shield",
    title: "Enterprise-ready delivery",
    body: "Documented, tested, and secure by default. Our deliverables meet enterprise standards for code quality, security posture, and handover documentation — suitable for internal teams to own.",
  },
  {
    icon: "zap",
    title: "Fixed scope, honest timelines",
    body: "We quote milestones, not open-ended retainers. You know the cost, the scope, and the timeline before we start. If something changes, we tell you in writing before it affects the plan.",
  },
  {
    icon: "lock",
    title: "Your IP, always",
    body: "All code, designs, infrastructure, and deliverables belong to your organisation from day one. We provide clean exits, full handover documentation, and no lock-in of any kind.",
  },
] as const;

export const faq = {
  title: "Questions, answered plainly",
  items: [
    {
      question: "What size of organisations do you typically work with?",
      answer:
        "Mid-market and enterprise organisations — typically 50 to 5,000 employees — who need a delivery partner with genuine technical depth. We also work with fast-growing companies that need to deliver at enterprise standards before they have the internal team to do so.",
    },
    {
      question: "Do you only do software development?",
      answer:
        "No. We do software and mobile development, technology consulting (including LMS implementation and EdTech platforms), and resource or partner engagements where we provide technical capacity alongside your team or a partner organisation. Most mandates blend two of these.",
    },
    {
      question: "Can you implement and customise Moodle?",
      answer:
        "Yes. We have experience with Moodle implementation, configuration, custom plugin development, and integration with enterprise identity providers and HR systems. If you're evaluating an LMS or migrating from one, we can advise on fit and lead the technical delivery.",
    },
    {
      question: "How do you structure commercial engagements?",
      answer:
        "Fixed-scope milestones for defined build or consulting work. Monthly retainers for ongoing capacity or advisory. We provide a written proposal with costs and deliverables before any work begins — no open-ended hourly arrangements.",
    },
    {
      question: "Do you offer white-label or partner delivery?",
      answer:
        "Yes. We work under partner organisations' brands on client-facing work, provide engineering capacity for mandates partners can't fully staff, and support joint go-to-market arrangements. We can operate under NDA and with enterprise-grade contractual structures.",
    },
    {
      question: "Who will we actually work with?",
      answer:
        "Linga and Somu are on every engagement. For larger programmes, we bring in vetted specialists under our oversight — but you always have direct access to a founder as your primary point of accountability.",
    },
    {
      question: "What does a typical engagement look like end to end?",
      answer:
        "Discovery call → written proposal → milestone-based delivery with regular reviews → final sign-off and handover. Timelines range from 6 weeks for focused builds to 6+ months for larger programmes. We'll give you a realistic estimate after discovery.",
    },
    {
      question: "How do we get started?",
      answer:
        "Submit an enquiry through the contact form or email hello@thejands.in with a brief description of the mandate. We'll respond within one business day and schedule a 30-minute discovery call with Linga or Somu.",
    },
  ],
} as const;

export const contactPage = {
  title: "Tell us about your requirement",
  subtitle:
    "Share a brief description of what you need — whether it's a software build, a consulting mandate, or a partnership conversation. We'll respond within one business day with an honest read on fit and suggested next steps.",
  formNote:
    "Every enquiry is reviewed by Linga or Somu directly. Typical response: within one business day. For urgent or time-sensitive mandates, call us directly.",
} as const;

export const privacySection = {
  title: "Your requirements stay confidential",
  body: "All briefs, technical discussions, and commercial conversations are treated as strictly confidential. We operate under NDA on request and do not share client information or project details without explicit written permission.",
} as const;
