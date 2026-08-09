import PageHero from '../components/PageHero';
import { Link } from 'react-router-dom';
import onnLogo from '../assets/images/onn-realty-logo.png';
import { products } from '../data/content';
import './Products.css';

const logoMap: Record<string, string> = {
  'onn-realty': onnLogo,
};

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Work we’ve shipped"
        description="A growing record of projects we’ve designed, built, and launched — real businesses, running on real software."
      />

      <section className="section products-section">
        <div className="container">
          {products.length > 0 ? (
            <div className="products-grid">
              {products.map((p) => (
                <article className="product-card" key={p.name}>
                  {p.logoKey && (
                    <div className="product-card__image">
                      <img src={logoMap[p.logoKey]} alt={`${p.name} logo`} />
                    </div>
                  )}
                  <div className="product-card__body">
                    <span className="eyebrow">{p.category}</span>
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <ul className="product-card__highlights">
                      {p.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noreferrer" className="btn btn-ghost">
                        Visit site ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}

              <div className="product-card product-card--placeholder">
                <p>Your project could be featured here next.</p>
                <Link to="/contact" className="btn btn-primary">Start a project</Link>
              </div>
            </div>
          ) : (
            <div className="products-empty">
              <p>Our first shipped projects will appear here shortly.</p>
              <Link to="/contact" className="btn btn-primary">Start the first one</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
