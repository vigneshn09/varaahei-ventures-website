import { useEffect, useRef, useState } from 'react';
import './ProcessFlow.css';

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessFlowProps {
  steps: ProcessStep[];
}

export default function ProcessFlow({ steps }: ProcessFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(-1);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (reduceMotion) {
            setActive(steps.length - 1);
          }
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [steps.length]);

  useEffect(() => {
    if (!inView) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let i = -1;
    const advance = () => {
      i += 1;
      setActive(i);
      if (i < steps.length - 1) {
        window.setTimeout(advance, 480);
      }
    };
    const t = window.setTimeout(advance, 200);
    return () => window.clearTimeout(t);
  }, [inView, steps.length]);

  const n = steps.length;

  return (
    <div className="process-flow" ref={containerRef}>
      {/* Desktop: horizontal winding route */}
      <div className="process-flow__rail" aria-hidden="true">
        <svg viewBox={`0 0 ${n * 180} 120`} preserveAspectRatio="none" className="process-flow__svg">
          <path
            d={buildPath(n)}
            className="process-flow__track"
            fill="none"
          />
          <path
            d={buildPath(n)}
            className="process-flow__track-progress"
            fill="none"
            style={{
              strokeDasharray: 2000,
              strokeDashoffset: active < 0 ? 2000 : 2000 - (2000 * (active + 1)) / n,
            }}
          />
        </svg>
      </div>

      <ol className="process-flow__steps">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className={`process-flow__step ${i <= active ? 'is-active' : ''}`}
          >
            <div className="process-flow__node">
              <span className="process-flow__num">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <div className="process-flow__body">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Builds a gentle zig-zag path across n segments for the connecting rail. */
function buildPath(n: number): string {
  const segW = 180;
  const midY = 60;
  const amp = 28;
  let d = `M 20 ${midY}`;
  for (let i = 0; i < n; i++) {
    const x1 = i * segW + segW * 0.5;
    const y1 = midY + (i % 2 === 0 ? -amp : amp);
    const x2 = (i + 1) * segW + 20;
    d += ` Q ${x1} ${y1} ${x2} ${midY}`;
  }
  return d;
}
