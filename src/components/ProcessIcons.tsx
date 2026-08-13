import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;
const base = { width: 22, height: 22, viewBox: '0 0 22 22', fill: 'none' };

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9.5" cy="9.5" r="6" stroke="currentColor" strokeWidth="1.7" />
      <path d="M14 14l5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function ClipboardCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4.5" y="3.5" width="13" height="16" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 3.5V2.8a1.3 1.3 0 0 1 1.3-1.3h3.4a1.3 1.3 0 0 1 1.3 1.3v.7" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 11.5l2 2 4-4.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ReceiptIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5.5 2.5h11v17l-2.2-1.5-2 1.5-2-1.5-2 1.5-2.3-1.5-2.5 1.5v-17Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 7h6M8 10.3h6M8 13.6h3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function CodeBracketsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 5 3 11l5 6M14 5l5 6-5 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M11 2 4 4.8v5.4c0 5 3 7.9 7 9.8 4-1.9 7-4.8 7-9.8V4.8L11 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7.7 11.2 10 13.5l4.5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M14.8 3.2a4.6 4.6 0 0 0-5.9 5.9L3.3 14.7a1.9 1.9 0 0 0 2.7 2.7l5.6-5.6a4.6 4.6 0 0 0 5.9-5.9l-3.1 3.1-2-2 3.1-3.1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RocketIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M11 2c2.8 1 4.8 4 5.2 8.1-1.2.7-2.6 1.1-4 1.1H9.8c-1.4 0-2.8-.4-4-1.1C6.2 6 8.2 3 11 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="8.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8.5 14.5 6 20l3.2-1.8M13.5 14.5 16 20l-3.2-1.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const processIcons = [
  SearchIcon,
  ClipboardCheckIcon,
  ReceiptIcon,
  CodeBracketsIcon,
  ShieldCheckIcon,
  WrenchIcon,
  RocketIcon,
];
