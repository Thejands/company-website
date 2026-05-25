import { getSocialLinks, getTwitterHandle } from "@/config/site-env";

export const siteConfig = {
  name: "Thejands",
  tagline: "Enterprise-grade delivery. Partner-level commitment.",
  title: "Thejands — Software, Consulting & Digital Products",
  description:
    "Thejands builds enterprise software, LMS solutions, mobile apps, and digital platforms — with consulting on technology strategy and resource partnerships.",
  url: "https://thejands.in",
  lang: "en",
  locale: "en_IN",
  author: "Thejands",
  twitter: getTwitterHandle() ?? "",
  logo: "/logo.svg",
  favicon: "/favicon.svg",
  ogImage: "/og-image.jpg",
  appleTouchIcon: "/apple-touch-icon.png",
  contact: {
    email: "hello@thejands.in",
    phones: ["+91 8807825309", "+91 9345416994"],
  },
  socialLinks: getSocialLinks(),
  navLinks: [
    { text: "Services", href: "/services" },
    { text: "Process", href: "/process" },
    { text: "About", href: "/about" },
    { text: "Blog", href: "/blog" },
    { text: "Careers", href: "/careers" },
  ],
  footerLinks: [
    { text: "Services", href: "/services" },
    { text: "Process", href: "/process" },
    { text: "About", href: "/about" },
    { text: "Blog", href: "/blog" },
    { text: "Careers", href: "/careers" },
    { text: "Contact", href: "/contact" },
    { text: "Privacy", href: "/privacy" },
    { text: "Terms", href: "/terms" },
    { text: "Cookies", href: "/cookies" },
  ],
} as const;
