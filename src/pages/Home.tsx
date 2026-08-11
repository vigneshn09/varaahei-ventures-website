import { Link } from 'react-router-dom';
import FlameDivider from '../components/FlameDivider';
import EmberSceneGate from '../components/EmberSceneGate';
import Reveal from '../components/Reveal';
import { TargetIcon, VisionIcon, MissionIcon } from '../components/PillarIcons';
import { categoryIcons } from '../components/ServiceIcons';
import logo from '../assets/images/logo-full.png';
import onnLogo from '../assets/images/onn-realty-logo.png';
import { processSteps, serviceCatalog } from '../data/content';
import './Home.css';

const featuredServiceSlugs = ['web-app-development', 'ai-services', 'erp-business-systems'];

export default function Home() {
  const featured = serviceCatalog.filter((c) => featuredServiceSlugs.includes(c.slug));

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <h1>
              We build the systems<br />
              your business <em>runs on.</em>
            </h1>
            <p>
              Websites, apps, AI, and the everyday software that keeps a business
              moving — designed and built by one team, from first sketch to
              go-live.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn-primary">Start a project</Link>
              <Link to="/services" className="btn btn-ghost">Explore services</Link>
            </div>
          </div>

          <div className="hero__mark">
            <div className="hero__mark-plate float">
              <EmberSceneGate className="hero__ember" />
              <img src={logo} alt="Varaahei Ventures mark" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- OBJECTIVE / VISION / MISSION ---------- */}
      <section className="section pillars">
        <div className="container pillars__grid">
          <Reveal>
            <PillarCard
              icon={<TargetIcon />}
              index="Objective"
              title="Build once, build right"
              body="To give small and growing Indian businesses the same calibre of technology that large companies take for granted — without the large-company overhead."
            />
          </Reveal>
          <Reveal delay={1}>
            <PillarCard
              icon={<VisionIcon />}
              index="Vision"
              title="A digitally confident India"
              body="A future where every business owner — from a single clinic to a growing chain — runs on software built for exactly how they work, not the other way around."
            />
          </Reveal>
          <Reveal delay={2}>
            <PillarCard
              icon={<MissionIcon />}
              index="Mission"
              title="Understand, then build"
              body="We spend real time understanding a business before writing a line of code, so what we deliver gets used — not shelved."
            />
          </Reveal>
        </div>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <Reveal as="section" className="section why">
        <div className="container why__grid">
          <div className="section-head">
            <span className="eyebrow">Why Varaahei</span>
            <h2>People who stay with your project, not just the pitch</h2>
            <p>
              We believe good software comes from people who genuinely
              understand your business, stay accountable through every stage,
              and never hand your project off to someone new halfway through.
            </p>
          </div>
          <ul className="why__list">
            <li>
              <h3>One team, start to finish</h3>
              <p>The people who scope your project are the same people who build and ship it.</p>
            </li>
            <li>
              <h3>Built around your workflow</h3>
              <p>We design software to match how your business actually operates, not a generic template.</p>
            </li>
            <li>
              <h3>Transparent, milestone-based delivery</h3>
              <p>You always know what stage your project is at, and what’s coming next.</p>
            </li>
            <li>
              <h3>Beyond launch</h3>
              <p>Registration, hosting, email, maintenance — we handle the parts most agencies leave to you.</p>
            </li>
          </ul>
        </div>
      </Reveal>

      {/* ---------- HOW IT WORKS ---------- */}
      <Reveal as="section" className="section how">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>Seven stages. No guesswork.</h2>
            <p>A process that’s the same for every client, because a repeatable process is what makes the outcome predictable.</p>
          </div>
          <ol className="how__steps">
            {processSteps.map((step, i) => (
              <li key={step.title}>
                <span className="how__num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      {/* ---------- SERVICES PREVIEW ---------- */}
      <section className="section services-preview">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow eyebrow--lg">What we do</span>
              <h2>Where most projects begin</h2>
            </div>
          </Reveal>
          <div className="services-preview__grid">
            {featured.map((cat, i) => {
              const Icon = categoryIcons[cat.slug];
              return (
                <Reveal delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4} key={cat.slug}>
                  <div className="service-card">
                    <div className="service-card__icon">{Icon && <Icon />}</div>
                    <h3>{cat.category}</h3>
                    <p>{cat.tagline}</p>
                    <ul>
                      {cat.services.slice(0, 3).map((s) => (
                        <li key={s.name}>{s.name}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="services-preview__cta">
            <Link to="/services" className="btn btn-primary">See all services</Link>
          </div>
        </div>
      </section>

      {/* ---------- CLIENTS TEASER ---------- */}
      <Reveal as="section" className="section clients-teaser">
        <div className="container clients-teaser__inner">
          <div>
            <span className="eyebrow">Trusted by</span>
            <h2>Real businesses. Real launches.</h2>
            <Link to="/products" className="clients-teaser__link">See all completed work →</Link>
          </div>
          <Link to="/clients" className="client-card">
            <img src={onnLogo} alt="ONN Realty logo" />
            <span>
              ONN Realty
              <small>onnrealty.in</small>
            </span>
          </Link>
        </div>
      </Reveal>

      {/* ---------- TESTIMONIAL ---------- */}
      <Reveal as="section" className="section testimonial">
        <div className="container">
          <div className="testimonial__card">
            <FlameDivider color="var(--gold)" />
            <blockquote>
              “Varaahei Ventures built our website exactly the way we needed it —
              clear, fast, and easy for our clients to find and trust us. What stood
              out was how closely they listened before they started building.”
            </blockquote>
            <div className="testimonial__author">
              <img src={onnLogo} alt="ONN Realty" />
              <div>
                <strong>Onnuvel P</strong>
                <span>Founder, ONN Realty</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ---------- CONTACT CTA ---------- */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Have a project in mind?</h2>
            <p>Tell us what you’re building — we’ll tell you honestly what it takes.</p>
          </div>
          <Link to="/contact" className="btn btn-on-dark">Get in touch</Link>
        </div>
      </section>
    </>
  );
}

function PillarCard({
  icon,
  index,
  title,
  body,
}: {
  icon: React.ReactNode;
  index: string;
  title: string;
  body: string;
}) {
  return (
    <div className="pillar-card">
      <div className="pillar-card__icon">{icon}</div>
      <span className="pillar-card__label">{index}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
