import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import onnLogo from '../assets/images/onn-realty-logo.png';
import './Clients.css';

const clients = [
  {
    name: 'ONN Realty',
    url: 'https://www.onnrealty.in',
    logo: onnLogo,
    description: 'A real estate business website built end-to-end, from brand presence to live property listings.',
  },
];

export default function Clients() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Businesses we’ve built for"
        description="Every project starts as a real conversation with a real business owner. Here’s who we’ve worked with so far."
      />

      <section className="section clients-gallery">
        <div className="container">
          <div className="clients-gallery__grid">
            {clients.map((c, i) => (
              <Reveal delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4} key={c.name}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="client-tile"
                >
                  <div className="client-tile__image">
                    <img src={c.logo} alt={`${c.name} logo`} />
                  </div>
                  <div className="client-tile__footer">
                    <span className="client-tile__name">{c.name}</span>
                    <p className="client-tile__desc">{c.description}</p>
                    <span className="client-tile__link">{c.url.replace('https://www.', '')} ↗</span>
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal delay={Math.min(clients.length, 4) as 0 | 1 | 2 | 3 | 4}>
              <div className="client-tile client-tile--placeholder">
                <p>Your business could be next.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal as="section" className="section clients-note">
        <div className="container clients-note__inner">
          <span className="eyebrow">A note on this page</span>
          <p>
            We’re a young studio, and we’d rather show one real, honest
            client relationship than pad this page with names that aren’t
            here yet. This list grows as the work does.
          </p>
        </div>
      </Reveal>
    </>
  );
}
