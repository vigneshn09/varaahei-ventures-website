import type { ReactNode } from 'react';
import './DeviceMockup.css';

interface DeviceMockupProps {
  url: string;
  children: ReactNode;
  accent?: string;
}

export default function DeviceMockup({ url, children, accent = '#F0A63A' }: DeviceMockupProps) {
  return (
    <div className="device-mockup">
      <div className="device-mockup__chrome">
        <div className="device-mockup__dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="device-mockup__url">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="5" y="10" width="14" height="10" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          <span>{url}</span>
        </div>
      </div>
      <div className="device-mockup__viewport" style={{ ['--accent' as string]: accent }}>
        {children}
      </div>
    </div>
  );
}
