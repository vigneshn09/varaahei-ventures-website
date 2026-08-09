import type { ReactNode } from 'react';
import FlameDivider from './FlameDivider';
import NetworkSceneGate from './NetworkSceneGate';
import './PageHero.css';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  ambient?: boolean;
}

export default function PageHero({ eyebrow, title, description, ambient = true }: PageHeroProps) {
  return (
    <section className="page-hero">
      {ambient && <NetworkSceneGate className="page-hero__scene" />}
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        <FlameDivider className="page-hero__flame" />
      </div>
    </section>
  );
}
