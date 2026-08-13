import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  as?: 'div' | 'section' | 'li';
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  id?: string;
}

export default function Reveal({ children, as = 'div', delay = 0, className = '', id }: RevealProps) {
  const { ref, className: revealClass } = useReveal<HTMLElement>();
  const Tag = as as 'div';
  return (
    <Tag
      id={id}
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${revealClass} ${delay ? `reveal-delay-${delay}` : ''} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
