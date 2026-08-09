import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import FlameDivider from '../components/FlameDivider';
import { trainingTracks } from '../data/content';
import { EMAIL } from '../data/site';
import './Training.css';

export default function Training() {
  return (
    <>
      <PageHero
        eyebrow="Training"
        title="Learn to build with AI — not just talk about it."
        description="We teach people how to actually use AI tools to build real websites, applications, and games — the same tools and workflow we use ourselves, every day, to ship client work."
      />

      {/* ---------- WHY THIS EXISTS ---------- */}
      <section className="section training-why">
        <div className="container training-why__grid">
          <div>
            <span className="eyebrow">Why we teach this</span>
            <h2>Building software stopped requiring a computer science degree.</h2>
            <p>
              It still requires knowing how to think clearly, break a problem
              down, and direct a powerful tool well. That's the actual skill —
              and it's learnable, at any starting point, faster than most
              people expect.
            </p>
          </div>
          <div className="training-why__list">
            <div>
              <h4>No prior coding background needed</h4>
              <p>We start from wherever you are — including nowhere at all.</p>
            </div>
            <div>
              <h4>Real tools, real projects</h4>
              <p>The same AI-assisted workflow we use to build client work — not a watered-down version.</p>
            </div>
            <div>
              <h4>You leave with something built</h4>
              <p>Every track ends with a real, working, shippable project — not just slides.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TRACKS ---------- */}
      <section className="section training-tracks">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What you can learn</span>
            <h2>Pick a track, or combine a few.</h2>
            <p>Training is scoped around what you actually want to build — individually or as a team.</p>
          </div>
          <div className="tracks-grid">
            {trainingTracks.map((t) => (
              <div className="track-card" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.description}</p>
                <ul>
                  {t.outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TRAINER ---------- */}
      <section className="section trainer-section">
        <div className="container trainer-card">
          <div className="trainer-card__badge">
            <FlameDivider color="var(--saffron)" />
          </div>
          <div>
            <span className="eyebrow">Who's teaching</span>
            <h2>Trained by the people actually building the software.</h2>
            <p>
              Training at Varaahei Ventures is led directly by our own build
              team — the same people designing and shipping client websites,
              applications, and AI systems day to day. You're not learning
              from a course written once and repeated forever; you're
              learning current, real-world workflow from people actively
              using it.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- FORMAT ---------- */}
      <section className="section training-format">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it runs</span>
            <h2>Simple, structured, hands-on.</h2>
          </div>
          <div className="format-grid">
            <div className="format-card">
              <span className="format-card__num">1</span>
              <h4>Tell us what you want to build</h4>
              <p>A website, an app, a game, or just general fluency with AI tools — we scope training around your actual goal.</p>
            </div>
            <div className="format-card">
              <span className="format-card__num">2</span>
              <h4>Individual or group sessions</h4>
              <p>One-on-one for focused, fast progress, or group sessions for teams and organisations learning together.</p>
            </div>
            <div className="format-card">
              <span className="format-card__num">3</span>
              <h4>Build a real project as you learn</h4>
              <p>Every session is hands-on — you're building your own project from day one, not just watching a screen.</p>
            </div>
            <div className="format-card">
              <span className="format-card__num">4</span>
              <h4>Leave with a working result</h4>
              <p>You walk away with a real, live project and the ability to keep building on your own.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="training-cta">
        <div className="container training-cta__inner">
          <div>
            <h2>Ready to learn how to build?</h2>
            <p>Tell us what you'd like to build, and we'll put together a training plan around it.</p>
          </div>
          <div className="training-cta__actions">
            <Link to="/contact" className="btn btn-on-dark">Enquire about training</Link>
            <a href={`mailto:${EMAIL}?subject=Training%20Enquiry`} className="training-cta__email">
              {EMAIL}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
