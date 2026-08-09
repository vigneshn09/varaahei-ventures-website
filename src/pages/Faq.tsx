import { useState } from 'react';
import PageHero from '../components/PageHero';
import { faqs } from '../data/content';
import './Faq.css';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions we get asked before day one"
      />

      <section className="section faq-section">
        <div className="container faq-container">
          <ul className="faq-list">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <li key={item.q} className={isOpen ? 'is-open' : ''}>
                  <button
                    className="faq-question"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && <p className="faq-answer">{item.a}</p>}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
