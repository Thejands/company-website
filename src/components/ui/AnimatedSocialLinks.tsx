import type { ComponentType } from "react";
import InstagramIcon from "./instagram-icon";
import LinkedinIcon from "./linkedin-icon";
import TwitterXIcon from "./twitter-x-icon";
import GithubIcon from "./github-icon";

interface SocialLink {
  id: string;
  href: string;
  label: string;
}

interface Props {
  links: SocialLink[];
  className?: string;
}

type IconComponent = ComponentType<{
  size?: number;
  className?: string;
  strokeWidth?: number;
}>;

const iconMap: Record<string, IconComponent> = {
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  x: TwitterXIcon,
  github: GithubIcon,
};

export default function AnimatedSocialLinks({ links, className = "" }: Props) {
  const filtered = links.filter((l) => iconMap[l.id]);
  if (filtered.length === 0) return null;

  return (
    <ul
      className={`flex flex-wrap items-center gap-2 ${className}`}
      aria-label="Social media"
    >
      {filtered.map((link) => {
        const Icon = iconMap[link.id];
        return (
          <li key={link.id}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} (opens in new tab)`}
              className="inline-flex size-10 items-center justify-center rounded-full border border-hairline text-ink transition-colors hover:bg-surface-soft"
            >
              <Icon size={18} className="text-ink" strokeWidth={1.75} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
