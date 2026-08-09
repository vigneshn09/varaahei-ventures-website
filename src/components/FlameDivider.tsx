interface FlameDividerProps {
  color?: string;
  className?: string;
}

/** The site's signature mark: an abstracted ascending flame-line,
 * echoing the third-eye flame in the Varaahei wordmark. Used sparingly
 * as a section accent rather than decoration. */
export default function FlameDivider({ color = 'var(--saffron)', className }: FlameDividerProps) {
  return (
    <svg
      className={className}
      width="64"
      height="40"
      viewBox="0 0 64 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M32 2C32 2 20 12 20 22C20 29.2 25.4 34 32 34C38.6 34 44 29.2 44 22C44 12 32 2 32 2Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M32 14C32 14 27 19 27 24C27 27.3 29.2 30 32 30C34.8 30 37 27.3 37 24C37 19 32 14 32 14Z"
        fill={color}
        opacity="0.9"
      />
      <line x1="2" y1="38" x2="18" y2="38" stroke={color} strokeWidth="1.4" />
      <line x1="46" y1="38" x2="62" y2="38" stroke={color} strokeWidth="1.4" />
    </svg>
  );
}
