import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    setProgress(0);
  }, [pathname]);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
      setProgress(pct);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__bar" style={{ width: `${progress}%` }} />
    </div>
  );
}
