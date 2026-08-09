import PageHero from '../components/PageHero';
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
            {clients.map((c) => (
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="client-tile"
                key={c.name}
              >
                <div className="client-tile__image">
                  <img src={c.logo} alt={`${c.name} logo`} />
                </div>
                <div className="client-tile__footer">
                  <span className="client-tile__name">{c.name}</span>
                  <p className="client-tile__desc">{c.description}</p>
                  <span className="client-tile__link">{c.url.replace('https://www.', '')}</span>
                </div>
              </a>
            ))}

            <div className="client-tile client-tile--placeholder">
              <p>Your business could be next.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
