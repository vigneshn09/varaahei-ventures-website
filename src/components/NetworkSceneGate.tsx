import { Suspense, lazy, useEffect, useState } from 'react';

const NetworkScene = lazy(() => import('./NetworkScene'));

export default function NetworkSceneGate({ className }: { className?: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) setEnabled(true);
  }, []);

  if (!enabled) return null;

  return (
    <div className={className} aria-hidden="true">
      <Suspense fallback={null}>
        <NetworkScene />
      </Suspense>
    </div>
  );
}
