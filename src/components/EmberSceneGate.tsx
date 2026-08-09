import { Suspense, lazy, useEffect, useState } from 'react';

const EmberScene = lazy(() => import('./EmberScene'));

export default function EmberSceneGate({ className }: { className?: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) setEnabled(true);
  }, []);

  if (!enabled) return null;

  return (
    <div className={className} aria-hidden="true">
      <Suspense fallback={null}>
        <EmberScene />
      </Suspense>
    </div>
  );
}
