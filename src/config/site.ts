import { getSocialLinks, getTwitterHandle } from "@/config/site-env";

export const siteConfig = {
  name: "Thejands",
  tagline: "Enterprise-grade delivery. Partner-level commitment.",
  title: "Thejands — Software, Consulting & Digital Products for Enterprise",
  description:
    "Thejands partners with enterprises and growing companies to build software, mobile products, and digital platforms — and consults on technology strategy, LMS implementation, and resource partnerships.",
  url: "https://thejands.in",
  lang: "en",
  locale: "en_IN",
  author: "Thejands",
  twitter: getTwitterHandle() ?? "",
  logo: "/logo.svg",
  favicon: "/favicon.svg",
  ogImage: "/og-image.svg",
  appleTouchIcon: "/logo.svg",
  contact: {
    email: "hello@thejands.in",
    phones: ["+91 8807825309", "+91 9345416994"],
  },
  socialLinks: getSocialLinks(),
  navLinks: [
    { text: "Services", href: "/services" },
    { text: "Process", href: "/process" },
    { text: "About", href: "/about" },
    { text: "Careers", href: "/careers" },
    { text: "Contact", href: "/contact" },
  ],
  footerLinks: [
    { text: "Services", href: "/services" },
    { text: "Process", href: "/process" },
    { text: "About", href: "/about" },
    { text: "Careers", href: "/careers" },
    { text: "Contact", href: "/contact" },
    { text: "Privacy", href: "/privacy" },
    { text: "Terms", href: "/terms" },
    { text: "Cookies", href: "/cookies" },
  ],
} as const;
