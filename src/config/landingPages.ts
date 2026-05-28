/**
 * Landing page content - GEO/AEO-optimised for high-intent commercial queries.
 *
 * Content design principles (Princeton GEO paper + AEO best practice):
 * - Answer-first opening paragraph (extractable definition)
 * - Specific statistics and timelines (citable data points)
 * - Authoritative, neutral language (no marketing puffery)
 * - Entity-rich text (named technologies, standards, integrations)
 * - Question-and-answer structures (mirror user prompts)
 * - One idea per paragraph (RAG chunk-friendly)
 */

export interface LandingTL {
  label: string;
  value: string;
}

export interface LandingFAQ {
  question: string;
  answer: string;
}

export interface LandingComparisonRow {
  dimension: string;
  thejands: string;
  alternative: string;
}

export interface LandingPage {
  slug: string;
  /** Primary keyword being targeted */
  primaryKeyword: string;
  /** SEO title (50-60 chars) */
  title: string;
  /** Meta description (140-160 chars) */
  description: string;
  /** Keywords meta (comma-separated) */
  keywords: string;
  /** H1 on page */
  heading: string;
  /** Eyebrow text */
  eyebrow: string;
  /** Answer-first opening paragraph (the AI-extractable definition) */
  definition: string;
  /** Quick facts table - extractable structured data */
  tldr: LandingTL[];
  /** Body sections - each is a short, focused chunk */
  sections: Array<{
    heading: string;
    body: string;
    /** Optional bullet list inside section */
    bullets?: string[];
  }>;
  /** Comparison table title + rows */
  comparison?: {
    title: string;
    alternativeLabel: string;
    rows: LandingComparisonRow[];
  };
  /** Long-tail prompt-mirrored FAQ */
  faqs: LandingFAQ[];
  /** Outbound authority citations */
  authorities?: Array<{ label: string; url: string }>;
  /** Service schema fields */
  serviceType: string;
  serviceCatalog: Array<{ name: string; description: string }>;
}

export const moodleImplementation: LandingPage = {
  slug: "moodle-implementation",
  primaryKeyword: "Moodle implementation services",
  title: "Moodle Implementation Services - Enterprise LMS Deployment",
  description:
    "End-to-end Moodle LMS implementation for enterprises and educational institutions. Custom plugin development, SSO integration, HR system connectors, branded UX. Founder-led delivery from Thejands.",
  keywords:
    "Moodle implementation services, Moodle LMS deployment India, Moodle customisation, Moodle plugin development, Moodle SSO integration, Moodle enterprise implementation, Moodle consulting India, Moodle partner",
  heading: "Moodle Implementation for Enterprises",
  eyebrow: "LMS · Moodle · EdTech",
  definition:
    "Moodle implementation is the end-to-end process of deploying, configuring, customising, and integrating the open-source Moodle Learning Management System for an organisation's specific use case. Thejands delivers Moodle implementation services for enterprises and educational institutions - covering installation, theme customisation, custom plugin development, integration with identity providers (LDAP, SAML 2.0, SSO) and HR systems (SAP, Workday, BambooHR), content migration, and post-launch support. Founder-led from discovery to handover, with full source-code ownership for the client.",
  tldr: [
    { label: "Typical timeline", value: "6–14 weeks" },
    { label: "Engagement model", value: "Fixed-scope milestones" },
    { label: "Moodle versions", value: "4.x LTS supported" },
    { label: "Hosting", value: "AWS · Azure · On-prem" },
    { label: "Handover", value: "Full IP transfer · Documentation · Training" },
    { label: "Response SLA", value: "1 business day" },
  ],
  sections: [
    {
      heading: "What's included in a Moodle implementation",
      body: "Every Moodle implementation engagement is scoped against the organisation's learner population, course catalogue, integration requirements, and compliance posture. The default scope covers installation on the client's preferred infrastructure, theme customisation matching the client's brand, role and permission configuration, course taxonomy setup, and core integrations.",
      bullets: [
        "Moodle 4.x LTS installation on AWS, Azure, GCP, or on-premises",
        "Custom theme and branded UX (Boost-based or fully custom)",
        "User roles, capabilities, and cohort structure configuration",
        "Single Sign-On via SAML 2.0, OAuth 2.0, LDAP, or Azure AD",
        "HR system sync (SAP SuccessFactors, Workday, BambooHR)",
        "Custom plugin development (block, mod, format, theme, local plugins)",
        "Content migration from legacy LMS (SCORM, xAPI, AICC packages)",
        "Reporting, analytics, and learning record store (LRS) setup",
        "Performance hardening, caching (Redis), and load testing",
        "Documentation, admin training, and 30-day stabilisation support",
      ],
    },
    {
      heading: "Why organisations choose Moodle",
      body: "Moodle is the most widely deployed Learning Management System globally, with over 400 million users across 240+ countries (Moodle Pty Ltd, 2025). It is open source, GPL-licensed, and avoids the vendor lock-in associated with proprietary platforms like Canvas, Blackboard, or Brightspace. Enterprises typically choose Moodle for cost predictability, customisation freedom, SCORM/xAPI compliance, and the ability to self-host for data residency or regulatory reasons.",
    },
    {
      heading: "Integrations Thejands has delivered",
      body: "Moodle integrations are the most common cause of implementation slippage when handled by general developers without LMS context. Thejands has delivered the following integrations under live enterprise constraints.",
      bullets: [
        "Identity: Microsoft Entra ID (Azure AD), Okta, Google Workspace, OneLogin, Auth0",
        "HRIS: SAP SuccessFactors, Workday, BambooHR, Zoho People",
        "Video: Zoom, Microsoft Teams, BigBlueButton, Cisco Webex",
        "Content: SCORM 1.2/2004, xAPI/Tin Can, AICC, IMS LTI 1.3",
        "Analytics: Power BI, Tableau, Metabase via xAPI LRS",
        "Payments: Stripe, Razorpay (for paid course portals)",
      ],
    },
    {
      heading: "Engagement structure",
      body: "Moodle implementations follow a five-stage engagement model: Discovery (1 week), Proposal (within 5 business days of discovery), Configuration and Plugin Build (4–10 weeks depending on scope), User Acceptance Testing (1–2 weeks with the client's stakeholders), and Handover with documentation and admin training. Pricing is milestone-based, not hourly. Linga and Somu are personally involved at every milestone review.",
    },
  ],
  comparison: {
    title: "Moodle vs proprietary LMS - when each makes sense",
    alternativeLabel: "Canvas / Blackboard / Brightspace",
    rows: [
      {
        dimension: "Licence cost",
        thejands: "Free (GPL open source)",
        alternative: "Per-user annual subscription",
      },
      {
        dimension: "Source-code ownership",
        thejands: "Full client control",
        alternative: "Vendor-controlled",
      },
      {
        dimension: "Customisation depth",
        thejands: "Unlimited (custom plugins)",
        alternative: "Limited to vendor APIs",
      },
      {
        dimension: "Data residency",
        thejands: "Client's choice (self-host or cloud)",
        alternative: "Vendor cloud (region-limited)",
      },
      {
        dimension: "Total cost over 5 years",
        thejands: "Implementation + hosting only",
        alternative: "Implementation + ongoing licence",
      },
      {
        dimension: "Vendor lock-in",
        thejands: "None - community-driven",
        alternative: "High - proprietary platform",
      },
    ],
  },
  faqs: [
    {
      question: "How long does a Moodle implementation take?",
      answer:
        "A standard Moodle 4.x implementation for an enterprise takes 6 to 14 weeks end-to-end. The variables are: scope of custom plugins, number of integrations (SSO, HRIS, video conferencing), content migration volume, and the client's internal review velocity. Thejands provides a written timeline in the proposal stage, after a 30–60 minute discovery call.",
    },
    {
      question: "How much does Moodle implementation cost?",
      answer:
        "Moodle is GPL-licensed open-source software, so there is no licence fee. Implementation cost depends on scope. A small-team deployment with branded theme and one SSO integration typically falls in the lower five-figure USD range; a multi-country enterprise rollout with custom plugins, multiple integrations, and content migration is materially higher. Thejands prices on fixed-scope milestones, not hourly, after a scoping call.",
    },
    {
      question: "Can Thejands customise Moodle beyond the built-in features?",
      answer:
        "Yes. Thejands develops custom Moodle plugins across every supported plugin type - blocks, activity modules, course formats, themes, local plugins, authentication plugins, enrolment plugins, and admin tools. Plugin development follows Moodle's coding guidelines and security review process, ensuring compatibility with Moodle's release cycle.",
    },
    {
      question: "Is Moodle better than Canvas or Blackboard for enterprises?",
      answer:
        "It depends on priorities. Moodle is better when source-code ownership, data residency control, customisation depth, and predictable total cost matter more than vendor-managed convenience. Canvas and Blackboard are better when the organisation wants a vendor-managed SaaS with no engineering involvement. Moodle wins on long-horizon total cost of ownership for organisations with 500+ users.",
    },
    {
      question: "Can Moodle integrate with our SSO and HR systems?",
      answer:
        "Yes. Moodle supports SAML 2.0, OAuth 2.0, LDAP, and OpenID Connect for SSO. HR system integration is delivered via custom enrolment plugins or scheduled sync. Thejands has integrated Moodle with SAP SuccessFactors, Workday, BambooHR, Microsoft Entra ID (Azure AD), Okta, Google Workspace, and OneLogin.",
    },
    {
      question: "Does Thejands provide post-launch Moodle support?",
      answer:
        "Yes. Every implementation includes 30 days of post-launch stabilisation support at no additional cost. Beyond that, Thejands offers monthly support retainers covering Moodle upgrades, security patches, plugin maintenance, and incident response.",
    },
    {
      question: "Will we own the Moodle code and customisations?",
      answer:
        "Yes. All custom plugins, themes, and configurations developed by Thejands belong to the client from day one. Thejands provides full source-code handover, technical documentation, and admin training. No lock-in or ongoing dependency on Thejands.",
    },
  ],
  authorities: [
    { label: "Moodle official documentation", url: "https://docs.moodle.org" },
    {
      label: "Moodle plugin development guide",
      url: "https://moodledev.io/docs/apis",
    },
    {
      label: "IMS LTI 1.3 specification",
      url: "https://www.imsglobal.org/spec/lti/v1p3",
    },
    { label: "xAPI specification", url: "https://xapi.com/specification/" },
  ],
  serviceType: "Moodle LMS Implementation",
  serviceCatalog: [
    {
      name: "Moodle installation & configuration",
      description:
        "Production-ready Moodle deployment on AWS, Azure, GCP, or on-premises with hardened security, caching, and monitoring.",
    },
    {
      name: "Custom Moodle plugin development",
      description:
        "Bespoke plugins across all Moodle plugin types - blocks, modules, themes, formats, authentication, enrolment.",
    },
    {
      name: "Moodle SSO integration",
      description:
        "Single Sign-On integration via SAML 2.0, OAuth 2.0, LDAP, Microsoft Entra ID, Okta, and Google Workspace.",
    },
    {
      name: "Moodle HRIS integration",
      description:
        "Synchronisation with SAP SuccessFactors, Workday, BambooHR for user lifecycle and course assignment.",
    },
    {
      name: "Moodle content migration",
      description:
        "Migration from Canvas, Blackboard, Brightspace, TalentLMS, and SCORM/xAPI/AICC content packages.",
    },
    {
      name: "Moodle theme & UX customisation",
      description:
        "Brand-aligned themes built on Boost or fully custom - including white-label rebranding for partner deployments.",
    },
  ],
};

export const lmsConsulting: LandingPage = {
  slug: "lms-consulting",
  primaryKeyword: "LMS consulting services",
  title: "LMS Consulting - Strategy, Selection, Implementation",
  description:
    "Independent LMS consulting for enterprises and EdTech companies. Platform selection, architecture review, RFP support, vendor evaluation, and implementation oversight from founder-led Thejands.",
  keywords:
    "LMS consulting India, LMS selection consulting, LMS strategy advisory, Moodle vs Canvas consulting, LMS RFP support, EdTech consulting India, learning platform consulting, corporate LMS consulting",
  heading: "LMS Consulting for Enterprises & EdTech",
  eyebrow: "Consulting · LMS · EdTech Strategy",
  definition:
    "LMS consulting is independent advisory on selecting, architecting, implementing, or migrating a Learning Management System for an organisation's specific learner population, content strategy, and compliance requirements. Thejands provides vendor-neutral LMS consulting - we are not a reseller for any LMS platform, which means our recommendations reflect the client's actual needs rather than partner commissions. Engagements cover platform selection (Moodle vs Canvas vs Brightspace vs Open edX vs proprietary), architecture review, RFP support, technical due diligence on vendors, implementation oversight, and migration planning.",
  tldr: [
    { label: "Engagement type", value: "Advisory retainer or fixed sprint" },
    { label: "Typical duration", value: "2–8 weeks" },
    { label: "Independence", value: "No LMS reseller relationships" },
    {
      label: "Deliverables",
      value: "Written recommendations · RFP · evaluation matrix",
    },
    { label: "Stakeholders engaged", value: "L&D, IT, Procurement, Finance" },
    { label: "Founder involvement", value: "Direct, every engagement" },
  ],
  sections: [
    {
      heading: "When to bring in an LMS consultant",
      body: "Most organisations bring in an LMS consultant at one of four decision points: when an existing LMS contract is up for renewal and other options are being evaluated; when the organisation is launching corporate learning for the first time and lacks internal expertise; when an in-progress LMS implementation has stalled and needs independent diagnosis; or when a platform migration is being planned and risk reduction matters more than execution speed.",
    },
    {
      heading: "What an LMS consulting engagement covers",
      body: "Every LMS consulting engagement is scoped to the decision being made. Common deliverables across engagements include a stakeholder requirements matrix, a vendor evaluation framework, a written platform recommendation with technical rationale, an RFP document if procurement requires one, and an implementation roadmap with milestones and dependencies.",
      bullets: [
        "Stakeholder requirements gathering (L&D, IT, Compliance, Procurement)",
        "Vendor shortlist and evaluation matrix",
        "Technical due diligence on candidate platforms",
        "Total cost of ownership modelling (3 and 5 year)",
        "RFP authoring and response evaluation",
        "Migration risk assessment and mitigation plan",
        "Implementation oversight (independent of the implementation vendor)",
      ],
    },
    {
      heading: "Platforms Thejands evaluates",
      body: "We have hands-on experience across the major LMS categories. We assess each against the client's specific requirements rather than promoting any single platform.",
      bullets: [
        "Open-source: Moodle, Open edX, Chamilo, ILIAS",
        "Enterprise SaaS: Canvas, Brightspace (D2L), Blackboard Learn",
        "Corporate learning: Cornerstone, SAP SuccessFactors Learning, Workday Learning, Docebo",
        "Lightweight: TalentLMS, LearnUpon, Absorb LMS",
        "Specialised: Thinkific, Teachable (for course-business models)",
      ],
    },
  ],
  comparison: {
    title: "Independent consulting vs vendor-led pre-sales",
    alternativeLabel: "LMS vendor pre-sales",
    rows: [
      {
        dimension: "Recommendation bias",
        thejands: "Independent of any LMS platform",
        alternative: "Promotes vendor's own platform",
      },
      {
        dimension: "Scope",
        thejands: "Full evaluation including competitors",
        alternative: "Vendor's platform only",
      },
      {
        dimension: "Deliverables",
        thejands: "Written analysis, TCO model, RFP",
        alternative: "Sales deck, demo, quote",
      },
      {
        dimension: "Commercial model",
        thejands: "Day-rate or fixed sprint",
        alternative: "Free (recovered in licence cost)",
      },
      {
        dimension: "Best for",
        thejands: "Selection, migration, advisory",
        alternative: "Pricing & feature deep-dives",
      },
    ],
  },
  faqs: [
    {
      question: "How do I choose the right LMS for my enterprise?",
      answer:
        "LMS selection should be driven by five factors in this order: (1) integration requirements with existing identity and HR systems, (2) total cost of ownership over a 3–5 year horizon, (3) customisation needs versus vendor-managed convenience, (4) data residency and compliance requirements, and (5) ease of content migration from the current setup. Thejands provides a written evaluation matrix mapping each candidate platform against these factors.",
    },
    {
      question: "Is Moodle better than Canvas for corporate L&D?",
      answer:
        "For corporate L&D, the choice depends on whether the organisation values vendor-managed convenience (Canvas) or source-code ownership and customisation depth (Moodle). Canvas is faster to launch with less engineering involvement; Moodle is materially cheaper over 5 years and supports unlimited customisation. For organisations with 500+ learners and any plan to customise or integrate deeply, Moodle's TCO advantage typically dominates.",
    },
    {
      question: "What does LMS consulting cost?",
      answer:
        "Independent LMS consulting engagements at Thejands are priced either as day-rate advisory retainers or as fixed-scope sprints (typically 2–8 weeks). A platform selection engagement for a mid-market enterprise is materially less expensive than a full implementation, and consulting fees are routinely offset by the cost savings of choosing the right platform the first time.",
    },
    {
      question: "Do you work with our existing LMS vendor?",
      answer:
        "Yes. Many of our consulting engagements involve oversight of an in-progress implementation being delivered by another vendor or partner. We act as an independent technical and delivery reviewer on the client's behalf, flagging risks and ensuring the implementation matches what was scoped.",
    },
    {
      question: "Can you help with an RFP for an LMS?",
      answer:
        "Yes. RFP authoring is one of our most common deliverables. We produce a structured RFP document covering technical requirements, integration scenarios, data residency, vendor stability, and pricing structure - then assist with evaluating vendor responses against the scoring framework.",
    },
  ],
  authorities: [
    { label: "Moodle.org official site", url: "https://moodle.org" },
    { label: "Open edX official site", url: "https://openedx.org" },
    {
      label: "IMS Global Learning Consortium",
      url: "https://www.imsglobal.org",
    },
    {
      label: "Brandon Hall Group LMS research",
      url: "https://www.brandonhall.com",
    },
  ],
  serviceType: "LMS Consulting",
  serviceCatalog: [
    {
      name: "LMS platform selection",
      description:
        "Independent evaluation of LMS platforms against your organisation's specific requirements with written recommendation and TCO model.",
    },
    {
      name: "RFP support",
      description:
        "RFP document authoring, vendor response evaluation, and shortlist scoring against a structured framework.",
    },
    {
      name: "Implementation oversight",
      description:
        "Independent technical and delivery review of an LMS implementation being delivered by another vendor or internal team.",
    },
    {
      name: "Migration planning",
      description:
        "Risk-assessed migration plan from legacy LMS to a new platform, including content, user data, and learning records.",
    },
  ],
};

export const enterpriseSoftware: LandingPage = {
  slug: "enterprise-software-development",
  primaryKeyword: "enterprise software development company India",
  title: "Enterprise Software Development - India · Founder-Led",
  description:
    "Custom enterprise software, web platforms, and mobile apps built to enterprise standards. Founder-led delivery from Thejands, India. Fixed-scope milestones, full IP ownership, 6–24 week engagements.",
  keywords:
    "enterprise software development company India, custom software development India, enterprise web application development, SaaS platform development India, mobile app development for enterprises, React Next.js development India, Node.js TypeScript development India",
  heading: "Enterprise Software Development",
  eyebrow: "Custom Software · Platforms · Mobile",
  definition:
    "Enterprise software development is the practice of designing, building, and delivering custom software applications that meet enterprise-grade requirements for security, scalability, maintainability, and integration with existing systems. Thejands builds enterprise software for organisations in fintech, EdTech, logistics, digital commerce, healthcare, and SaaS - using React, Next.js, Node.js, TypeScript, Python, Flutter, and React Native on AWS, Azure, or GCP. All engagements are founder-led, scoped against fixed milestones, and delivered with full source-code ownership to the client.",
  tldr: [
    { label: "Engagement timeline", value: "6–24 weeks per build" },
    { label: "Pricing model", value: "Fixed-scope milestones" },
    { label: "Team", value: "Senior practitioners only" },
    { label: "Stack", value: "React · Next.js · Node · Python · Flutter" },
    { label: "Infrastructure", value: "AWS · Azure · GCP · K8s" },
    { label: "Standards", value: "OWASP ASVS · WCAG 2.2 AA · ISO-aligned" },
  ],
  sections: [
    {
      heading: "What 'enterprise-grade' actually means at Thejands",
      body: "The term 'enterprise-grade' is often used loosely. At Thejands it has specific meaning: every deliverable has documented architecture, automated test coverage above 70%, OWASP ASVS Level 2 security review, accessibility audit against WCAG 2.2 AA, structured logging and observability, CI/CD pipeline with environment promotion, and complete handover documentation suitable for an internal team to maintain the system without further dependency on Thejands.",
    },
    {
      heading: "Technology stack",
      body: "We select technology based on the client's long-term maintainability requirements, the team's existing capabilities, and infrastructure constraints - not based on what is trending.",
      bullets: [
        "Frontend: React, Next.js, TypeScript, Tailwind CSS, Astro",
        "Backend: Node.js, NestJS, Python (FastAPI, Django), GraphQL",
        "Mobile: Flutter, React Native (both iOS and Android)",
        "Database: PostgreSQL, MongoDB, Redis, Supabase",
        "Cloud: AWS, Azure, GCP, Vercel, Cloudflare",
        "Infrastructure: Docker, Kubernetes, Terraform, GitHub Actions",
        "Observability: OpenTelemetry, Grafana, Datadog, Sentry",
      ],
    },
    {
      heading: "Engagement model",
      body: "Every engagement starts with a Discovery call (30–90 minutes), followed by a written proposal within 5 business days. Build engagements proceed in 1–2 week cycles with regular demos. Each milestone has a written acceptance criteria, and nothing progresses to the next stage without explicit client sign-off. Final handover includes production code, documentation, deployment runbooks, and a 30-day stabilisation support window.",
    },
  ],
  comparison: {
    title: "Thejands vs hiring in-house · vs Big-4 consultancy",
    alternativeLabel: "In-house team / Big-4 firm",
    rows: [
      {
        dimension: "Time to first delivery",
        thejands: "2–4 weeks from kickoff",
        alternative: "3–6 months (hiring) · 8–12 weeks (Big-4 setup)",
      },
      {
        dimension: "Seniority on the work",
        thejands: "Founders involved at every milestone",
        alternative: "Variable - often junior staff",
      },
      {
        dimension: "Commercial model",
        thejands: "Fixed-scope milestones, no hourly mystery",
        alternative: "T&M billing (in-house) or premium day rate (Big-4)",
      },
      {
        dimension: "IP ownership",
        thejands: "Client owns everything from day one",
        alternative: "Client-owned (in-house) · varies (Big-4)",
      },
      {
        dimension: "Handover",
        thejands: "Clean exit with documentation",
        alternative: "Continuous (in-house) · billable (Big-4)",
      },
    ],
  },
  faqs: [
    {
      question: "How much does enterprise software development cost in India?",
      answer:
        "Enterprise software development cost in India varies dramatically by scope, team seniority, and engagement model. A focused enterprise web platform (6–10 weeks scope) with senior practitioners typically falls in the mid-to-high five-figure USD range. Larger multi-phase platforms run materially higher. Thejands prices on fixed-scope milestones agreed in writing before work begins - no hourly billing surprises.",
    },
    {
      question:
        "Should I hire an in-house team or work with a partner like Thejands?",
      answer:
        "Hire in-house if the work is permanent, ongoing, and core to your business identity. Work with a partner if the work is project-bounded, requires senior expertise that doesn't justify a full-time hire, or has a defined timeline where speed matters more than long-term retention. Most enterprises blend both: in-house for product ownership, partners for delivery acceleration on specific builds.",
    },
    {
      question: "How fast can you start a new project?",
      answer:
        "Discovery calls are typically scheduled within 1–3 business days of an enquiry. A written proposal follows within 5 business days of discovery. Once a proposal is signed, kickoff occurs within 1–2 weeks. End-to-end, from first enquiry to first line of production code, typically takes 3–4 weeks.",
    },
    {
      question: "Do you work with non-Indian clients?",
      answer:
        "Yes. Thejands has active engagements with clients in the United Kingdom, United States, Singapore, and the United Arab Emirates. We work across time zones with overlap windows agreed upfront. Contracts can be signed in INR, USD, GBP, SGD, or AED depending on the client's preference.",
    },
    {
      question: "What if the scope changes mid-project?",
      answer:
        "Scope changes are handled through a written change request - proposed by either side, agreed in writing, with impact on timeline and cost stated explicitly before the change is accepted. We don't absorb scope creep silently, and we don't bill for changes that haven't been agreed. This is one of the most common reasons clients move from agencies to founder-led firms like Thejands.",
    },
  ],
  authorities: [
    {
      label: "OWASP Application Security Verification Standard",
      url: "https://owasp.org/www-project-application-security-verification-standard/",
    },
    { label: "WCAG 2.2 specification", url: "https://www.w3.org/TR/WCAG22/" },
    { label: "ISO/IEC 27001:2022", url: "https://www.iso.org/standard/27001" },
    { label: "12-Factor App methodology", url: "https://12factor.net" },
  ],
  serviceType: "Custom Enterprise Software Development",
  serviceCatalog: [
    {
      name: "Web platform development",
      description:
        "Custom web applications built with React, Next.js, TypeScript, and modern cloud infrastructure - to enterprise standards.",
    },
    {
      name: "Mobile app development",
      description:
        "Cross-platform mobile apps for iOS and Android using Flutter or React Native, with native performance.",
    },
    {
      name: "API & microservices",
      description:
        "API design, microservices architecture, and integration platforms using Node.js, Python, GraphQL, REST.",
    },
    {
      name: "Cloud infrastructure",
      description:
        "Infrastructure as code on AWS, Azure, or GCP using Terraform, Docker, and Kubernetes.",
    },
    {
      name: "SaaS product development",
      description:
        "Multi-tenant SaaS products with billing, role-based access control, and tenant-aware data isolation.",
    },
  ],
};

export const whiteLabelDevelopment: LandingPage = {
  slug: "white-label-development",
  primaryKeyword: "white label software development partner",
  title: "White-Label Software Development Partner - Thejands",
  description:
    "Embedded engineering capacity for agencies, consultancies, and technology firms. White-label delivery under your brand, NDA-protected, with senior practitioners. Founder-led from Thejands.",
  keywords:
    "white label software development India, white label development partner, white label software agency, outsourced engineering team India, embedded development team, partner agency development, agency white label developer",
  heading: "White-Label Software Development",
  eyebrow: "Partnerships · Embedded · White-Label",
  definition:
    "White-label software development is a partnership model in which a development firm builds software for an agency, consultancy, or technology partner's end client under the partner's brand - without the end client knowing the work is being delivered by a third party. Thejands operates as a white-label development partner for digital agencies, management consultancies, and technology firms that have won mandates exceeding their internal engineering capacity. Engagements are NDA-protected, follow the partner's branding and communication standards, and can be structured as dedicated teams, project-bounded delivery, or retainer-based capacity.",
  tldr: [
    {
      label: "Engagement structures",
      value: "Dedicated team · project · retainer",
    },
    { label: "Branding", value: "Partner's brand or co-branded" },
    { label: "Contracts", value: "NDA · SLA · enterprise-grade" },
    { label: "Team size", value: "2–8 engineers per engagement" },
    { label: "Stack", value: "Web · mobile · cloud · LMS" },
    { label: "Onboarding", value: "1–2 weeks from contract" },
  ],
  sections: [
    {
      heading: "How white-label engagement works",
      body: "The partner sells the work to their end client under their own brand. Thejands delivers the engineering work under the partner's standards - using the partner's project management tools, communication channels, and branded deliverables. End clients see only the partner. Internal Thejands branding never appears in any deliverable, communication, or documentation. NDAs cover both the engagement and any client information shared.",
    },
    {
      heading: "Who this is for",
      body: "White-label development at Thejands is typically a fit for one of three partner types.",
      bullets: [
        "Digital agencies that win projects exceeding their internal engineering capacity",
        "Management consultancies that need engineering delivery alongside strategy work",
        "Technology firms that need specialist capability (Moodle, mobile, cloud) they don't have in-house",
        "Boutique product firms that want to expand offering without hiring",
      ],
    },
    {
      heading: "Why partners choose Thejands over offshore staff augmentation",
      body: "Staff augmentation typically supplies individual contributors who report into the partner's existing structure. Thejands provides a complete delivery unit - engineers, technical lead, and founder oversight - that operates as an autonomous team within the partner's brand. Quality control, code review, and architecture decisions happen at Thejands; the partner focuses on client relationship and commercial structure.",
    },
  ],
  comparison: {
    title: "White-label partnership vs offshore staff augmentation",
    alternativeLabel: "Staff augmentation (body shop)",
    rows: [
      {
        dimension: "Unit of supply",
        thejands: "Complete delivery team",
        alternative: "Individual contributors",
      },
      {
        dimension: "Quality oversight",
        thejands: "Thejands founder accountability",
        alternative: "Partner's responsibility",
      },
      {
        dimension: "Architecture decisions",
        thejands: "Thejands senior practitioners",
        alternative: "Partner's senior staff",
      },
      {
        dimension: "Commercial model",
        thejands: "Fixed-scope or capacity retainer",
        alternative: "Per-engineer hourly rate",
      },
      {
        dimension: "Risk",
        thejands: "Outcome-bound delivery",
        alternative: "Time-bound, outcome unclear",
      },
    ],
  },
  faqs: [
    {
      question:
        "How does white-label development protect our client relationship?",
      answer:
        "Thejands operates fully behind your brand. All communication with the end client flows through your team. Thejands engineers don't appear in client meetings unless you explicitly invite them. Deliverables ship under your name. NDAs cover both the partnership and any client information you share. End clients have no visibility that Thejands is involved unless you choose to disclose.",
    },
    {
      question: "What is the minimum engagement size?",
      answer:
        "Our smallest viable white-label engagement is a 6-week fixed-scope build with a 2-engineer team. Below that, the onboarding overhead exceeds the value. For ongoing capacity, the minimum retainer is typically 80 hours per month from a dedicated engineer.",
    },
    {
      question: "How do you handle code ownership in a white-label engagement?",
      answer:
        "All source code, designs, and deliverables belong to the partner from day one. Thejands retains no IP and signs over all rights. This is standard in every white-label engagement and explicitly covered in the master service agreement.",
    },
    {
      question: "Can you sign our standard NDA and MSA?",
      answer:
        "Yes. Thejands routinely signs partner-provided NDAs, master service agreements, and statements of work. We are comfortable with enterprise procurement processes, data processing addenda, and vendor onboarding requirements common at large agencies and consultancies.",
    },
    {
      question: "Do you work directly with our end client or only through us?",
      answer:
        "By default, only through you. If a specific engagement benefits from direct technical conversation with the end client, we can join - but always under your brand, with you setting the agenda, and never positioning Thejands as a separate entity. The default is full intermediation.",
    },
  ],
  authorities: [
    { label: "Industry Standard MSA templates", url: "https://www.iaccm.com" },
    { label: "Common NDA structures", url: "https://www.lawinsider.com" },
  ],
  serviceType: "White-Label Software Development",
  serviceCatalog: [
    {
      name: "Dedicated engineering team",
      description:
        "A complete 2–8 person engineering team embedded under your brand, with senior practitioners and Thejands founder oversight.",
    },
    {
      name: "Project-bounded white-label delivery",
      description:
        "Fixed-scope white-label builds delivered to your specification, on your timeline, under your brand.",
    },
    {
      name: "Retainer capacity",
      description:
        "Monthly reserved engineering hours for ongoing demand - flexed across multiple end-client engagements.",
    },
    {
      name: "Technical screening for partners",
      description:
        "Technical interviews and screening of candidates on behalf of partner organisations hiring engineers.",
    },
  ],
};

export const aiDataSolutions: LandingPage = {
  slug: "ai-data-solutions",
  primaryKeyword: "AI solutions for enterprise India",
  title: "AI & Data Solutions - Enterprise LLM Integration & Automation",
  description:
    "Thejands integrates generative AI, LLM-powered features, RAG systems, and intelligent automation into enterprise platforms. Founder-led AI engineering with full IP ownership and production-grade security.",
  keywords:
    "AI solutions India, LLM integration enterprise, generative AI development India, RAG system development, AI agent development, ML pipeline India, enterprise AI consulting, OpenAI GPT integration India, Claude LLM integration",
  heading: "AI & Data Solutions for Enterprise",
  eyebrow: "AI · LLM · Automation · Data Intelligence",
  definition:
    "Thejands designs and integrates AI capabilities into enterprise software platforms - including large language model (LLM) integration using GPT-4o, Claude, Gemini, and Llama; retrieval-augmented generation (RAG) systems and vector-search knowledge bases; custom AI agents and agentic workflow automation; ML pipelines with model deployment on AWS, Azure, or GCP; and intelligent document processing for classification, extraction, and summarisation. Engagements follow the same fixed-scope model as software builds - discovery, written proposal, milestone delivery, and full IP transfer - with enterprise data security and on-premise model options available.",
  tldr: [
    { label: "Typical timeline", value: "4–14 weeks" },
    { label: "Engagement model", value: "Fixed-scope milestones" },
    { label: "Models supported", value: "GPT-4o · Claude · Gemini · Llama" },
    { label: "Deployment", value: "Cloud · on-premise · hybrid" },
    { label: "Standards", value: "OWASP LLM Top 10 · data residency" },
    { label: "IP ownership", value: "Full client ownership from day one" },
  ],
  sections: [
    {
      heading: "What 'production-ready AI' means at Thejands",
      body: "Most AI proof-of-concepts fail to reach production because they ignore enterprise constraints: data security, latency SLAs, cost predictability, observability, and integration with existing authentication and data systems. At Thejands, AI engagements are scoped and delivered with the same rigour as enterprise software builds - with structured logging, error handling, rate-limit management, prompt versioning, and handover documentation your internal team can maintain without further dependency on us.",
    },
    {
      heading: "AI capabilities we deliver",
      body: "Engagements are scoped against the specific capability the organisation needs - not a generic 'AI transformation' programme.",
      bullets: [
        "LLM integration: GPT-4o, Claude 3.5 Sonnet/Opus, Gemini 1.5 Pro, Llama 3.1 (hosted or on-premise via Ollama, vLLM)",
        "RAG systems: vector embeddings, semantic search, document chunking, re-ranking pipelines",
        "AI agents: multi-step task automation, tool-calling agents, agentic workflows with human-in-the-loop",
        "ML pipelines: feature engineering, model training, evaluation, deployment on AWS SageMaker / Azure ML / Vertex AI",
        "Document intelligence: PDF/OCR extraction, classification, structured data extraction, contract analysis",
        "Conversational AI: enterprise chatbots, internal knowledge assistants, customer-facing AI with guardrails",
        "Vector databases: Pinecone, Weaviate, pgvector, Qdrant - chosen against retrieval requirements",
      ],
    },
    {
      heading: "Data security and residency",
      body: "Enterprise AI workloads often involve sensitive data. Thejands architectures for data residency and security from the start - not as an afterthought. We have experience deploying on-premise LLMs (Llama, Mistral) using Ollama and vLLM where data must not leave the client's infrastructure, and configuring Azure OpenAI Service and Vertex AI where managed cloud with regional data residency is acceptable. All AI integrations include prompt injection mitigation, output validation, and access control aligned with your existing IAM.",
    },
    {
      heading: "Engagement structure for AI projects",
      body: "AI projects require a tighter discovery process than standard software builds because the feasibility of a given approach depends heavily on data quality, existing system architecture, and model capability boundaries. Our AI engagements typically follow: a technical feasibility discovery (1–2 weeks), a written proposal with approach, model selection rationale, and milestone breakdown, a prototype phase with evaluation metrics agreed upfront, and a production build phase with CI/CD, monitoring, and documentation. Cost is fixed at milestone boundaries, not hourly.",
    },
  ],
  comparison: {
    title:
      "Thejands AI delivery vs off-the-shelf AI tools vs large consultancy",
    alternativeLabel: "AI SaaS tool / Big-4 AI practice",
    rows: [
      {
        dimension: "Customisation depth",
        thejands: "Fully custom, integrated into your platform",
        alternative: "Limited to vendor API / generic solution",
      },
      {
        dimension: "Data residency",
        thejands: "On-premise or chosen cloud region",
        alternative: "Vendor cloud (limited control)",
      },
      {
        dimension: "IP ownership",
        thejands: "Full client ownership from day one",
        alternative: "Vendor-owned (SaaS) · varies (consultancy)",
      },
      {
        dimension: "Seniority on the work",
        thejands: "Founders involved at every milestone",
        alternative: "Variable - often junior staff (Big-4)",
      },
      {
        dimension: "Pricing model",
        thejands: "Fixed-scope milestones",
        alternative: "Per-seat subscription / T&M billing",
      },
      {
        dimension: "Production readiness",
        thejands: "Enterprise-grade security and observability",
        alternative: "Demo-quality by default (SaaS)",
      },
    ],
  },
  faqs: [
    {
      question:
        "How long does it take to integrate an LLM into an existing platform?",
      answer:
        "A focused LLM integration - for example, adding a RAG-powered knowledge assistant to an existing web application - typically takes 4 to 8 weeks end-to-end. The variables are: data pipeline complexity, the number of existing system integrations, security and access control requirements, and the client's review velocity. Thejands provides a written timeline in the proposal stage after a technical feasibility discovery.",
    },
    {
      question: "Which AI model should we use - GPT-4o, Claude, or Gemini?",
      answer:
        "Model selection depends on your specific use case, data residency requirements, latency needs, and cost constraints. GPT-4o is strongest for general reasoning and code generation; Claude 3.5 Sonnet excels at long-context document analysis; Gemini 1.5 Pro has a large context window suited for multi-document tasks. For organisations where data cannot leave their infrastructure, open-source models like Llama 3.1 deployed on-premise are the right choice. Thejands makes model recommendations in the written proposal after evaluating your requirements, not before.",
    },
    {
      question:
        "Can you build an AI agent that automates our internal workflows?",
      answer:
        "Yes. AI agent development is a growing part of our work. We build tool-calling agents that interact with internal APIs, databases, and third-party services - with structured task decomposition, error recovery, and human-in-the-loop checkpoints for decisions that require human approval. Agents are deployed on your infrastructure with full observability.",
    },
    {
      question:
        "How do you handle the security risks of using LLMs in enterprise software?",
      answer:
        "We follow the OWASP LLM Top 10 as a baseline for AI security. This covers prompt injection, sensitive data exposure, insecure output handling, model denial-of-service, and supply chain risks. Every AI integration includes input validation, output sanitisation, rate limiting, audit logging, and role-based access control aligned with the client's existing IAM. For sensitive workloads, we recommend on-premise model deployment to eliminate data transfer risks.",
    },
    {
      question: "What is a RAG system and do we need one?",
      answer:
        "Retrieval-Augmented Generation (RAG) is an architecture that augments an LLM's responses with content retrieved from your own document corpus or knowledge base - so the AI answers questions based on your organisation's specific data rather than general training data. You need a RAG system if you want an AI assistant that can accurately answer questions about internal policies, product documentation, contracts, or any proprietary knowledge that was not in the LLM's training data.",
    },
    {
      question: "Will we own the AI code and models?",
      answer:
        "Yes. All integration code, RAG pipelines, agent logic, prompt templates, and fine-tuned model weights belong to the client from day one. Thejands retains no IP. The base LLM models (GPT-4o, Claude, etc.) are subject to their respective provider terms, but the integration, orchestration, and customisation layer is fully client-owned.",
    },
  ],
  authorities: [
    {
      label: "OWASP LLM Top 10 security risks",
      url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    },
    {
      label: "OpenAI API documentation",
      url: "https://platform.openai.com/docs",
    },
    {
      label: "Anthropic Claude documentation",
      url: "https://docs.anthropic.com",
    },
    {
      label: "LangChain framework docs",
      url: "https://python.langchain.com/docs/introduction/",
    },
  ],
  serviceType: "AI & Data Solutions",
  serviceCatalog: [
    {
      name: "LLM integration",
      description:
        "Integration of GPT-4o, Claude, Gemini, or open-source models into existing enterprise platforms with full security and observability.",
    },
    {
      name: "RAG system development",
      description:
        "Retrieval-augmented generation pipelines with vector databases, document ingestion, semantic search, and re-ranking.",
    },
    {
      name: "AI agent development",
      description:
        "Custom AI agents with tool-calling, multi-step reasoning, and human-in-the-loop workflows for internal automation.",
    },
    {
      name: "ML pipeline & model deployment",
      description:
        "End-to-end ML pipelines from feature engineering and training to production deployment on AWS SageMaker, Azure ML, or Vertex AI.",
    },
    {
      name: "Document intelligence",
      description:
        "Intelligent document processing for extraction, classification, and summarisation of unstructured data from PDFs, emails, and forms.",
    },
    {
      name: "AI strategy advisory",
      description:
        "Use-case identification, feasibility assessment, model selection, and production roadmap for organisations beginning their AI journey.",
    },
  ],
};

export const allLandingPages: LandingPage[] = [
  moodleImplementation,
  lmsConsulting,
  enterpriseSoftware,
  whiteLabelDevelopment,
  aiDataSolutions,
];
