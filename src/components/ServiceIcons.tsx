import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 26,
  height: 26,
  viewBox: '0 0 26 26',
  fill: 'none',
};

/** Web & Application Development — globe */
export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="13" cy="13" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="13" cy="13" rx="4" ry="9.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 13h19M4.7 8.5h16.6M4.7 17.5h16.6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

/** Mobile App Development — phone */
export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="7.5" y="2.5" width="11" height="21" rx="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 20.2h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** AI Services — spark / neural node */
export function SparkIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M13 2.5c.7 4 2.9 6.2 6.9 6.9-4 .7-6.2 2.9-6.9 6.9-.7-4-2.9-6.2-6.9-6.9 4-.7 6.2-2.9 6.9-6.9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 17.2c.35 1.9 1.35 2.9 3.25 3.25-1.9.35-2.9 1.35-3.25 3.25-.35-1.9-1.35-2.9-3.25-3.25 1.9-.35 2.9-1.35 3.25-3.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** CRM & Patient Management — people / connection */
export function PeopleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.2 21c.6-3.6 3-5.6 5.8-5.6s5.2 2 5.8 5.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M15.6 21c.4-2.7 2.1-4.3 4.2-4.3 1.1 0 2.1.4 2.9 1.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** ERP & Business Systems — gears */
export function GearsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9.5" cy="15.5" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.5 9.8v1.7M9.5 19.5v1.7M4.9 15.5h1.7M12.4 15.5h1.7M6.4 12.4l1.2 1.2M11.3 18.6l1.2 1.2M12.6 12.4l-1.2 1.2M6.4 18.6l1.2-1.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M17.5 6.2v1M17.5 9.8v1M15 8.5h1M19 8.5h1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/** Business Process & Consulting — compass */
export function CompassIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="13" cy="13" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16.5 9.5 14.3 14.3 9.5 16.5l2.2-4.8 4.8-2.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

/** Registration Services — document/stamp */
export function DocumentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 2.5h8l4 4V22a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3.5A1 1 0 0 1 7 2.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M15 2.5V7h4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 13.5h8M9 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Domain, Hosting & Email — server / signal */
export function ServerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="20" height="6" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="15.5" width="20" height="6" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="7" cy="7" r="1" fill="currentColor" />
      <circle cx="7" cy="18.5" r="1" fill="currentColor" />
    </svg>
  );
}

/** Branding & Design — pen nib */
export function PenNibIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2.5 22 11l-9.5 9.5L3 21l.5-9.5L13 2.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12.5 13.5 8 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Digital Marketing — megaphone */
export function MegaphoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 10.5v5a1.5 1.5 0 0 0 1.5 1.5H6l2 5 2-.7-1.7-4.3H9l10 4V6.5l-10 4H4.5A1.5 1.5 0 0 0 3 10.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M21.5 10v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** 360 Photo & Video — camera aperture */
export function CameraIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="13" cy="13" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="13" cy="13" r="3.6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 3.5v3.4M13 22.1v-3.4M3.5 13h3.4M22.1 13h-3.4M6.5 6.5l2.4 2.4M17.1 17.1l2.4 2.4M19.5 6.5l-2.4 2.4M8.9 17.1l-2.4 2.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export const categoryIcons: Record<string, (props: IconProps) => React.JSX.Element> = {
  'web-app-development': GlobeIcon,
  'mobile-app-development': PhoneIcon,
  'ai-services': SparkIcon,
  'crm-patient-management': PeopleIcon,
  'erp-business-systems': GearsIcon,
  'business-consulting': CompassIcon,
  'registration-services': DocumentIcon,
  'domain-hosting-email': ServerIcon,
  'branding-design': PenNibIcon,
  'digital-marketing': MegaphoneIcon,
  'photo-video-production': CameraIcon,
};
