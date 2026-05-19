import { getSocialLinks, getTwitterHandle } from "@/config/site-env";

export const siteConfig = {
  name: "Thejands",
  tagline: "We build products for you",
  title: "Thejands - Product development for web, mobile & software",
  description:
    "Thejands is a product studio that designs and builds web apps, mobile apps, and custom software - from first sketch to launch and beyond.",
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
