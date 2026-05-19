/** Central content - product studio positioning for Thejands */

export const home = {
  eyebrow: "Product studio · Web · Mobile · Software",
  headline: "We turn your ideas into products people love to use.",
  subhead:
    "Thejands is the team behind the build - design, engineering, and launch handled in one place, with founders in the loop from day one.",
  primaryCta: { label: "Start your project", href: "/contact" },
  secondaryCta: { label: "See what we build", href: "/services" },
  proof: [
    "End-to-end product delivery",
    "Founder-led, no hand-offs",
    "Ship fast, scale clean",
  ],
} as const;

export const stickyShowcase = {
  title: "Built with intention",
  subtitle:
    "Every engagement follows the same rhythm - clarity first, then craft. Scroll to see how we work with you.",
  items: [
    {
      id: "discover",
      title: "Discover together",
      body: "We map users, constraints, and success metrics in a focused workshop - so scope and timeline are honest before a single feature ships.",
    },
    {
      id: "design",
      title: "Design you can click",
      body: "Figma prototypes you can share with stakeholders. Flows approved early, so development starts with confidence.",
    },
    {
      id: "build",
      title: "Build in the open",
      body: "Weekly demos with Linga and Somu in the room. You watch the product grow - no black box, no surprise invoices.",
    },
    {
      id: "launch",
      title: "Launch & grow",
      body: "Production-ready releases with docs, monitoring, and a clean handoff. Stay with us for v2 or run solo - your call.",
    },
  ],
} as const;

export const servicesPage = {
  title: "What we build",
  subtitle:
    "Whether you're launching an MVP, rebuilding a legacy system, or adding a mobile app to your stack - we design and ship products that fit your business, not the other way around.",
  offerings: [
    {
      id: "web",
      name: "Web products",
      tagline: "Fast, polished, built to grow",
      description:
        "Marketing sites, SaaS dashboards, customer portals, and internal tools - built on modern stacks with performance and SEO baked in from the first commit.",
      features: [
        "React & Next.js applications",
        "Design systems that scale",
        "APIs, auth & integrations",
        "Analytics & conversion-ready UX",
      ],
    },
    {
      id: "mobile",
      name: "Mobile apps",
      tagline: "Native feel, cross-platform speed",
      description:
        "iOS and Android apps your users actually enjoy - clear flows, reliable offline behaviour, and store-ready releases without the drama.",
      features: [
        "React Native & Flutter",
        "App Store & Play deployment",
        "Push, payments & device features",
        "Crash-free releases & updates",
      ],
    },
    {
      id: "software",
      name: "Custom software",
      tagline: "Tools that match how you work",
      description:
        "Backends, automations, and platforms when off-the-shelf software stops fitting. We architect for reliability today and change tomorrow.",
      features: [
        "Node.js & TypeScript services",
        "Databases, queues & cloud infra",
        "Third-party & legacy integrations",
        "CI/CD & observability",
      ],
    },
  ],
  cta: {
    title: "Not sure which bucket you fit?",
    body: "Most projects blend all three. Tell us the outcome you want - we'll map the right shape together.",
    button: { label: "Book a discovery call", href: "/contact" },
  },
} as const;

export const processPage = {
  title: "How we build",
  subtitle:
    "No mystery phases or endless decks. A clear rhythm from first conversation to production - so you always know what's happening and what's next.",
  steps: [
    {
      number: "01",
      title: "Discover",
      summary: "We listen before we line-code.",
      body: "A focused workshop on your users, constraints, and success metrics. You leave with a shared picture of scope - and an honest timeline.",
    },
    {
      number: "02",
      title: "Design",
      summary: "Interfaces you can click before we build.",
      body: "Wireframes and high-fidelity prototypes in Figma. You approve flows early, so development starts with clarity, not guesswork.",
    },
    {
      number: "03",
      title: "Build",
      summary: "Weekly demos, real progress.",
      body: "Short sprints, visible increments, and direct access to Linga and Somu. No black box - you see the product grow every week.",
    },
    {
      number: "04",
      title: "Launch",
      summary: "Ship with confidence.",
      body: "QA, performance checks, deployment, and handover docs. We stay close through launch week and the first weeks in the wild.",
    },
    {
      number: "05",
      title: "Grow",
      summary: "Products evolve - so do we.",
      body: "Retainers, feature roadmaps, or clean handoff to your team. However you scale, the codebase we leave is maintainable and yours.",
    },
  ],
  terminal: {
    lines: [
      { type: "comment" as const, text: "# thejands build pipeline" },
      {
        type: "command" as const,
        text: '$ thejands init --idea "your product"',
      },
      { type: "output" as const, text: "→ Discovery workshop scheduled" },
      { type: "command" as const, text: "$ thejands ship --env production" },
      { type: "output" as const, text: "✓ Live · monitored · documented" },
    ],
  },
} as const;

export const aboutPage = {
  title: "The team behind the build",
  subtitle:
    "Thejands started with a simple frustration: too many agencies sell hours, not outcomes. We built a studio where founders stay close to the work and clients get products - not promises.",
  story: {
    title: "Why Thejands exists",
    paragraphs: [
      "Every business deserves software that feels intentional - fast when it should be fast, simple where it should be simple, and honest about what it can't do yet.",
      "Linga and Somu started Thejands to be the product partner they wished they'd had: technical depth without jargon, design without ego, and delivery without vanishing after launch.",
      "Today we work with startups, growing brands, and teams inside larger companies who need a product built right the first time - or rebuilt better the second time.",
    ],
  },
  values: [
    {
      title: "Outcomes over output",
      body: "We measure success in shipped features your users touch - not story points on a board.",
    },
    {
      title: "Radical clarity",
      body: "Plain language, visible timelines, and demos you can share with your board without a translator.",
    },
    {
      title: "Craft at every layer",
      body: "From database schema to button hover - details matter because your brand lives in the details.",
    },
  ],
  founders: [
    {
      name: "Linga",
      role: "Co-founder · Product & Engineering",
      bio: "Linga turns fuzzy ideas into architectures that ship. With years across full-stack development and product leadership, he owns the technical roadmap - choosing the right stack, unblocking the team, and making sure what we build can scale when you need it to.",
      strengths: [
        "System design & technical strategy",
        "Full-stack engineering leadership",
        "MVP → production scaling",
      ],
    },
    {
      name: "Somu",
      role: "Co-founder · Design & Delivery",
      bio: "Somu makes complex products feel effortless. He leads UX, visual design, and client delivery - so every screen earns its place and every sprint ends with something you're proud to show stakeholders.",
      strengths: [
        "Product UX & interface design",
        "Client communication & delivery",
        "Quality, polish & launch readiness",
      ],
    },
  ],
  cta: {
    title: "Want to meet the people who'll build your product?",
    body: "Grab 30 minutes with Linga or Somu. No pitch deck - just a real conversation about what you're building.",
    button: { label: "Say hello", href: "/contact" },
  },
} as const;

export const testimonials = [
  {
    quote:
      "Thejands took our rough concept and shipped a production-ready app in weeks - clear updates, zero drama, and quality we didn't expect at that speed.",
    name: "Priya Sharma",
    role: "COO, Fintech startup",
  },
  {
    quote:
      "Finally a team that speaks business and code in the same sentence. Somu's design sense and Linga's architecture gave us a product our customers actually compliment.",
    name: "Rahul Verma",
    role: "Founder, D2C brand",
  },
  {
    quote:
      "Transparent timelines, weekly demos, and a codebase we could hand to our in-house team later. Exactly what we needed.",
    name: "Arun Kumar",
    role: "Operations lead, Tamil Nadu",
  },
] as const;

export const stats = [
  { label: "Products shipped", value: "50+" },
  { label: "Happy clients", value: "40+" },
  { label: "Industries served", value: "12+" },
  { label: "Countries", value: "8+" },
] as const;

export const techStack = {
  title: "Tools we trust",
  subtitle: "Proven stacks - chosen for your product, not our comfort zone.",
  items: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Astro",
    "PostgreSQL",
    "AWS",
    "Docker",
    "GraphQL",
    "MongoDB",
    "Tailwind CSS",
    "Vercel",
    "Figma",
    "Flutter",
  ],
} as const;

export const faq = {
  title: "Questions, answered plainly",
  items: [
    {
      question: "What kind of companies do you work with?",
      answer:
        "Startups validating an idea, SMBs modernising operations, and product teams that need extra firepower. If you have a problem worth solving with software, we're interested.",
    },
    {
      question: "Do you only build MVPs?",
      answer:
        "No. We build MVPs, v2 rebuilds, mobile companions to existing products, and internal tools. Scope follows your stage - we won't upsell you into more than you need.",
    },
    {
      question: "How do you price projects?",
      answer:
        "Fixed-scope milestones or monthly retainers after discovery - never open-ended hourly mystery. You'll see a clear proposal before we write production code.",
    },
    {
      question: "Who will I actually talk to?",
      answer:
        "Linga and Somu. Founders stay on your project - not account managers reading from a script.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "Mostly TypeScript, React, Next.js, Node, and modern cloud infra. We pick tools for maintainability and your team's future, not trends.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "Yes. We embed alongside your designers or engineers, or hand off cleanly when you're ready to run solo.",
    },
    {
      question: "How do we get started?",
      answer:
        "Email hello@thejands.in or use the contact form. We'll reply within one business day with times for a short discovery call.",
    },
  ],
} as const;

export const contactPage = {
  title: "Let's build something worth shipping",
  subtitle:
    "Tell us what you're making - even if it's still a napkin sketch. We'll reply with next steps, not a generic brochure.",
  formNote:
    "We read every message. Typical reply: within 24 hours on business days.",
} as const;

export const privacySection = {
  title: "Your product ideas stay confidential",
  body: "Roadmaps, designs, and source code belong to you. We treat every engagement under strict confidentiality - no portfolio leaks without your written OK.",
} as const;
