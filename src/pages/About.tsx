import PageHero from '../components/PageHero';
import { processSteps } from '../data/content';
import './About.css';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A studio built to actually finish what it starts"
        description="Varaahei Ventures is a technology and growth studio based in Coimbatore, working with businesses across India that are ready to move from manual processes to systems that scale with them."
      />

      <section className="section about-who">
        <div className="container about-who__grid">
          <div className="section-head">
            <span className="eyebrow">Who we are</span>
            <h2>Builders first, consultants second</h2>
            <p>
              We started Varaahei Ventures because too many small and mid-sized
              businesses were being sold software they didn’t need, or left
              without support after launch. We wanted to build the opposite kind
              of studio — one where the people who understand your business are
              the same people writing the code.
            </p>
          </div>
          <div className="about-pillars">
            <div>
              <span className="pillar-card__label">Objective</span>
              <h3>Build once, build right</h3>
              <p>Give Indian businesses the same calibre of technology large companies take for granted — without the overhead.</p>
            </div>
            <div>
              <span className="pillar-card__label">Vision</span>
              <h3>A digitally confident India</h3>
              <p>A future where every business, from a single clinic to a growing chain, runs on software built for how they actually work.</p>
            </div>
            <div>
              <span className="pillar-card__label">Mission</span>
              <h3>Understand, then build</h3>
              <p>We spend real time understanding a business before writing a line of code, so what we deliver gets used, not shelved.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section why-choose">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why choose us</span>
            <h2>What working with us actually looks like</h2>
          </div>
          <div className="why-choose__grid">
            <div className="why-choose__card">
              <h3>One team, start to finish</h3>
              <p>No handoffs between a sales team, a design team, and an offshore dev team you never speak to. The people who scope your project build it.</p>
            </div>
            <div className="why-choose__card">
              <h3>Built around your workflow</h3>
              <p>We don’t force your business into a generic template. Requirement gathering exists precisely so the software fits how you work.</p>
            </div>
            <div className="why-choose__card">
              <h3>Honest feasibility, always</h3>
              <p>If something can’t be done the way you’ve imagined it, we’ll tell you early — and offer what can.</p>
            </div>
            <div className="why-choose__card">
              <h3>Transparent, milestone-based delivery</h3>
              <p>You always know what stage your project is at, what’s been paid for, and what comes next.</p>
            </div>
            <div className="why-choose__card">
              <h3>We handle what others leave to you</h3>
              <p>Domain, hosting, email, registrations — the operational pieces most agencies quietly skip.</p>
            </div>
            <div className="why-choose__card">
              <h3>Support after go-live</h3>
              <p>Launch day isn’t the finish line. Every project includes a defined support window after it goes live.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section how-detailed">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>Our process, start to finish</h2>
            <p>The same seven stages for every client — a repeatable process is what makes the outcome predictable.</p>
          </div>
          <ol className="how-detailed__list">
            {processSteps.map((step, i) => (
              <li key={step.title}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
