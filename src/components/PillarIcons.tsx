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

/** Vision — a clear, open eye: seeing what's ahead */
export function VisionIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M3 17c3.6-6.5 9-9.8 14-9.8s10.4 3.3 14 9.8c-3.6 6.5-9 9.8-14 9.8S6.6 23.5 3 17Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="17" r="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="17" r="1.8" fill="currentColor" />
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
