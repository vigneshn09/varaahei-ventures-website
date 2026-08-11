import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = { width: 34, height: 34, viewBox: '0 0 34 34', fill: 'none' };

/** Objective — target with arrow centred, dead on */
export function TargetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="17" cy="17" r="13.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="17" r="8.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="17" r="2.6" fill="currentColor" />
    </svg>
  );
}

/** Vision — telescope aimed at a star/target in the distance */
export function VisionIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M5 22.5 21 11l2.3 3.2-16 11.5-2.3-3.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="11" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M27 4.5 25.6 8M31 7l-3.8 1.3M29.5 11.8l-3.9-.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M5 22.5 3 26.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Mission — a winding path with waypoints, being actively walked */
export function MissionIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M4 27c3-1 4.5-3.5 4.5-6s-2-4-2-6.5 2.5-4.5 6-4.5 5.5 2.3 8 2.3 4.5-1.8 4.5-4.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="1 4.2"
      />
      <circle cx="4.2" cy="27.4" r="2" fill="currentColor" />
      <circle cx="25" cy="7.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M23.6 6.1 26.4 8.9M26.4 6.1l-2.8 2.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
