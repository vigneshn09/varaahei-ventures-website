import { useEffect, useRef, useState } from 'react';
import { processIcons } from './ProcessIcons';
import heroBg from '../assets/images/hero-bg.jpg';
import './ProcessFlow.css';

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessFlowProps {
  steps: ProcessStep[];
}

const VB_W = 1000;
const VB_H = 220;
const MID_Y = 110;
const AMP = 55;

function buildNodes(n: number) {
  return Array.from({ length: n }, (_, i) => ({
    x: (i / (n - 1)) * VB_W,
    y: MID_Y + (i % 2 === 0 ? -AMP : AMP),
  }));
}

function buildSmoothPath(nodes: { x: number; y: number }[]) {
  let d = `M ${nodes[0].x} ${nodes[0].y}`;
  for (let i = 0; i < nodes.length - 1; i++) {
    const a = nodes[i];
    const b = nodes[i + 1];
    const midX = a.x + (b.x - a.x) / 2;
    d += ` C ${midX} ${a.y}, ${midX} ${b.y}, ${b.x} ${b.y}`;
  }
  return d;
}

const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

export default function ProcessFlow({ steps }: ProcessFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [progress, setProgress] = useState(0);
  const [dot, setDot] = useState({ x: 0, y: MID_Y });
  const [totalLen, setTotalLen] = useState(2600);
  const started = useRef(false);

  const n = steps.length;
  const nodes = buildNodes(n);
  const pathD = buildSmoothPath(nodes);

  useEffect(() => {
    if (pathRef.current) setTotalLen(pathRef.current.getTotalLength());
  }, [pathD]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || started.current) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        observer.disconnect();

        if (reduceMotion || !pathRef.current) {
          setProgress(1);
          if (pathRef.current) {
            const len = pathRef.current.getTotalLength();
            const p = pathRef.current.getPointAtLength(len);
            setDot({ x: p.x, y: p.y });
          }
          return;
        }

        const duration = 4200;
        const start = performance.now();
        const len = pathRef.current.getTotalLength();

        const tick = (now: number) => {
          const elapsed = now - start;
          const t = Math.min(1, elapsed / duration);
          const eased = ease(t);
          setProgress(eased);
          if (pathRef.current) {
            const p = pathRef.current.getPointAtLength(eased * len);
            setDot({ x: p.x, y: p.y });
          }
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const reachedCount = nodes.filter((_, i) => i / (n - 1) <= progress + 0.005).length;

  return (
    <div className="process-flow" ref={containerRef}>
      <div className="process-flow__panel">
        <img src={heroBg} alt="" className="process-flow__bgtexture" aria-hidden="true" />

        <div className="process-flow__map">
          <svg
            className="process-flow__svg"
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="pf-line" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#F0A63A" />
                <stop offset="100%" stopColor="#0C6B4E" />
              </linearGradient>
              <radialGradient id="pf-dot-glow">
                <stop offset="0%" stopColor="#F0A63A" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#F0A63A" stopOpacity="0" />
              </radialGradient>
              <filter id="pf-blur" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="7" />
              </filter>
            </defs>

            {/* base dim track */}
            <path d={pathD} className="process-flow__track" fill="none" />

            {/* lit progress track */}
            <path
              ref={pathRef}
              d={pathD}
              fill="none"
              stroke="url(#pf-line)"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{
                strokeDasharray: totalLen,
                strokeDashoffset: totalLen * (1 - progress),
              }}
            />

            {/* traveling glow */}
            {progress > 0 && (
              <>
                <circle cx={dot.x} cy={dot.y} r="16" fill="url(#pf-dot-glow)" filter="url(#pf-blur)" />
                <circle cx={dot.x} cy={dot.y} r="6" fill="#fff" stroke="#F0A63A" strokeWidth="3" />
              </>
            )}
          </svg>

          {nodes.map((node, i) => {
            const Icon = processIcons[i % processIcons.length];
            const isReached = i < reachedCount;
            return (
              <div
                className={`process-flow__node ${isReached ? 'is-reached' : ''}`}
                key={steps[i].title}
                style={{
                  left: `${(node.x / VB_W) * 100}%`,
                  top: `${node.y}px`,
                }}
              >
                <div className="process-flow__node-icon">
                  <Icon />
                </div>
                <div className="process-flow__node-body">
                  <span className="process-flow__node-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{steps[i].title}</h3>
                  <p>{steps[i].description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
