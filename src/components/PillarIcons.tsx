import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = { width: 34, height: 34, viewBox: '0 0 34 34', fill: 'none' };

/** Objective — target */
export function TargetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="17" cy="17" r="13.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="17" r="8.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="17" r="2.6" fill="currentColor" />
    </svg>
  );
}

/** Vision — horizon / eye */
export function VisionIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M3 17c3.6-6 9-9 14-9s10.4 3 14 9c-3.6 6-9 9-14 9S6.6 23 3 17Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="17" r="4.4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="17" r="1.4" fill="currentColor" />
    </svg>
  );
}

/** Mission — compass path / arrow forward */
export function MissionIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M4.5 24.5 20 9c1.6-1.6 4.2-1.6 5.8 0s1.6 4.2 0 5.8L10.3 30"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4.5 24.5 8 21l1.8 1.8L6.3 26 4.5 24.5Z" fill="currentColor" />
      <circle cx="24" cy="10.5" r="1.4" fill="currentColor" />
    </svg>
  );
}
