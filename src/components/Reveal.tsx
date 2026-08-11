import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  as?: 'div' | 'section';
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
}

export default function Reveal({ children, as = 'div', delay = 0, className = '' }: RevealProps) {
  const { ref, className: revealClass } = useReveal<HTMLElement>();
  const Tag = as as 'div';
  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} className={`${revealClass} ${delay ? `reveal-delay-${delay}` : ''} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
