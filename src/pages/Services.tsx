import PageHero from '../components/PageHero';
import { categoryIcons } from '../components/ServiceIcons';
import Reveal from '../components/Reveal';
import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { serviceCatalog } from '../data/content';
import './Services.css';

const CapabilityChart = lazy(() => import('../components/CapabilityChart'));

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Eleven categories. One team building all of them."
        description="From your first website to the systems running behind it — here’s everything we build, organised the way you’ll actually need it."
      />

      <section className="section services-overview">
        <div className="container">
          <Reveal>
            <Suspense fallback={<div className="capability-chart__loading" />}>
              <CapabilityChart />
            </Suspense>
          </Reveal>
        </div>
      </section>

      <section className="section services-index">
        <div className="container">
          <div className="services-index__jump">
            {serviceCatalog.map((cat) => (
              <a key={cat.slug} href={`#${cat.slug}`}>{cat.category}</a>
            ))}
          </div>
        </div>
      </section>

      {serviceCatalog.map((cat) => {
        const Icon = categoryIcons[cat.slug];
        return (
          <section className="section service-block" id={cat.slug} key={cat.slug}>
            <div className="container">
              <div className="service-block__head">
                <div className="service-block__icon">{Icon && <Icon />}</div>
                <div>
                  <span className="eyebrow">{cat.category}</span>
                  <p className="service-block__tagline">{cat.tagline}</p>
                </div>
              </div>
              <div className="service-block__list">
                {cat.services.map((s) => (
                  <div className="service-row" key={s.name}>
                    <h3>{s.name}</h3>
                    <p>{s.examples}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Don’t see exactly what you need?</h2>
            <p>Tell us the problem — most projects are a mix of two or three of these.</p>
          </div>
          <Link to="/contact" className="btn btn-on-dark">Talk to us</Link>
        </div>
      </section>
    </>
  );
}
