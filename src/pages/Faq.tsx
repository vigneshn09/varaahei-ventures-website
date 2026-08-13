import { useState } from 'react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
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
                <Reveal
                  as="li"
                  delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4}
                  className={isOpen ? 'is-open' : ''}
                  key={item.q}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      <span className="faq-icon__bar faq-icon__bar--h" />
                      <span className="faq-icon__bar faq-icon__bar--v" />
                    </span>
                  </button>
                  <div className="faq-answer-wrap">
                    <div className="faq-answer-inner">
                      <p className="faq-answer">{item.a}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
