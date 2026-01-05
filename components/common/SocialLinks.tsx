import React from 'react';
import { Github, Mail } from 'lucide-react';
import { profile } from '../../data';

interface SocialLink {
  href: string;
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  external?: boolean;
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/natsumi-kawahara-blowish',
    icon: Github,
    label: 'GitHub',
    external: true,
  },
  {
    href: `mailto:${profile.email}`,
    icon: Mail,
    label: 'Email',
    external: false,
  },
];

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  iconSize = 22,
}) => {
  return (
    <div className={`flex gap-6 text-muted ${className}`}>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        const linkProps = link.external
          ? { target: '_blank', rel: 'noopener noreferrer' as const }
          : {};
        
        return (
          <a
            key={link.label}
            href={link.href}
            className="p-2 bg-white rounded-full shadow-sm hover:text-primary hover:shadow-md transition-all transform hover:-translate-y-1"
            aria-label={link.label}
            {...linkProps}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;

