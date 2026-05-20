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
  title: "Built with intention",
  subtitle:
    "Every engagement follows the same rhythm — understand the business, define the solution, deliver with precision. Here's how we work with you.",
  items: [
    {
      id: "discover",
      title: "Understand the brief",
      icon: "search",
      body: "We invest time upfront to understand your organisation's constraints, technical landscape, and what success actually looks like. Whether it's a full product build, a platform migration, or a consulting mandate — we ask the hard questions before we propose anything. You get a scoped plan, not a vague proposal.",
    },
    {
      id: "design",
      title: "Architect the solution",
      icon: "pen-tool",
      body: "From system architecture to interface design — we define the solution in enough detail that every stakeholder can align before we build. Prototypes, technical specs, and implementation plans are shared early so there are no surprises downstream. Your team reviews and approves before we write production code.",
    },
    {
      id: "build",
      title: "Deliver in the open",
      icon: "code",
      body: "Iterative delivery with direct access to the people doing the work. Regular demos, written progress updates, and a codebase or deliverable that meets enterprise standards for quality, security, and maintainability. No junior staff rotations, no black-box delivery.",
    },
    {
      id: "launch",
      title: "Deploy & hand over",
      icon: "rocket",
      body: "Production releases with documentation, monitoring, and clean handover to your internal teams. We stay close post-launch and support any stabilisation period. If you want us to continue as an embedded partner, we have retainer models for that too.",
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
        "We design and build web applications, mobile products, and custom software for organisations that need more than an off-the-shelf solution. Our delivery meets enterprise standards: documented, tested, secure, and maintainable by your internal teams after handover.",
      features: [
        "React, Next.js, Node.js & TypeScript platforms",
        "Mobile apps (React Native & Flutter) for iOS and Android",
        "API design, microservices & cloud infrastructure",
        "SaaS products, internal tools & customer portals",
        "CI/CD, security hardening & observability",
        "Codebase handover with full documentation",
      ],
    },
    {
      id: "consulting",
      name: "Technology Consulting",
      tagline: "Strategy that translates to action",
      icon: "layers",
      description:
        "We consult at the project, platform, and programme level — from technology strategy and vendor selection to LMS implementation, digital transformation, and resource advisory. We bring senior-level thinking without the senior-firm price tag.",
      features: [
        "LMS implementation & customisation (Moodle & others)",
        "EdTech platform strategy and rollout",
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
    button: { label: "Talk to us", href: "/contact" },
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
    button: { label: "Book a discovery call", href: "/contact" },
  },
} as const;

export const testimonials = [
  {
    quote:
      "Thejands delivered a production-ready platform in weeks — clear communication throughout, zero drama, and quality we didn't expect at that pace. They flagged risks before they became problems, which saved us a full month of rework.",
    name: "Priya Sharma",
    role: "COO",
    company: "Enterprise Fintech",
    result: "Delivered in 6 weeks",
  },
  {
    quote:
      "They understand both the business problem and the technical solution, which is rare. The platform they built became the backbone of our operations, and the handover was clean enough that our in-house team could own it immediately.",
    name: "Rahul Verma",
    role: "Managing Director",
    company: "Digital Commerce",
    result: "Full IP handover",
  },
  {
    quote:
      "We needed a partner who could work alongside our internal team without friction. Thejands embedded seamlessly, met every milestone, and left us with documentation detailed enough that we didn't need them to stay on.",
    name: "Arun Kumar",
    role: "Head of Technology",
    company: "Enterprise Operations",
    result: "Zero rework post-handover",
  },
] as const;

export const stats = [
  { label: "Enterprises served", value: "50+" },
  { label: "Successful deliveries", value: "40+" },
  { label: "Industries", value: "12+" },
  { label: "Countries", value: "8+" },
] as const;

export const techStack = {
  title: "Technologies we deliver in",
  subtitle:
    "We select technology for your organisation's long-term maintainability, your team's existing capabilities, and your infrastructure constraints — not for what's trending.",
  items: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "MongoDB",
    "Moodle",
    "Tailwind CSS",
    "Flutter",
    "React Native",
    "Supabase",
    "Stripe",
    "Redis",
    "Terraform",
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
