import { type FormEvent, useState } from 'react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { WhatsAppSmallIcon } from '../components/SocialIcons';
import { ADDRESS, EMAIL, PHONE_DISPLAY, WHATSAPP_URL } from '../data/site';
import './Contact.css';

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="5" width="19" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 6.5 12 13l8.5-6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneCallIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M4.5 4h3.8l1.4 4.6-2.3 1.9a13.8 13.8 0 0 0 6.1 6.1l1.9-2.3 4.6 1.4v3.8c0 1-.9 1.8-1.9 1.7a17.6 17.6 0 0 1-15.3-15.3C4.7 4.9 4.5 4 4.5 4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to a backend endpoint / Firebase function via CLI.
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Tell us what you’re building"
        description="Share a few details and we’ll get back to you — usually within one business day."
      />

      <section className="section contact-section">
        <div className="container contact-grid">
          <Reveal className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <h3>Thank you — we’ve received your message.</h3>
                <p>Someone from our team will reach out shortly. You can also message us directly on WhatsApp for a faster response.</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Message us on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" type="text" required autoComplete="name" />
                </div>
                <div className="form-row form-row--split">
                  <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" required autoComplete="email" />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" />
                  </div>
                </div>
                <div className="form-row">
                  <label htmlFor="service">What are you looking for?</label>
                  <select id="service" name="service" defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Web & Application Development</option>
                    <option>Mobile App Development</option>
                    <option>AI Services</option>
                    <option>CRM & Patient Management Systems</option>
                    <option>ERP & Business Systems</option>
                    <option>Business Process & Consulting</option>
                    <option>Registration Services</option>
                    <option>Domain, Hosting & Email</option>
                    <option>Branding & Design</option>
                    <option>Digital Marketing</option>
                    <option>360° Photo & Video Production</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="form-row">
                  <label htmlFor="message">Tell us about your project</label>
                  <textarea id="message" name="message" rows={5} required />
                </div>
                <button type="submit" className="btn btn-primary">Send message</button>
                <p className="form-note">This form isn’t connected to an inbox yet — it will be wired up before launch.</p>
              </form>
            )}
          </Reveal>

          <Reveal as="div" delay={1}>
            <aside className="contact-info">
              <div className="contact-info__block">
                <div className="contact-info__icon"><MapPinIcon /></div>
                <div>
                  <h3>Address</h3>
                  <p>{ADDRESS.line1}<br />{ADDRESS.line2}</p>
                </div>
              </div>
              <div className="contact-info__block">
                <div className="contact-info__icon"><MailIcon /></div>
                <div>
                  <h3>Email</h3>
                  <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
                </div>
              </div>
              <div className="contact-info__block">
                <div className="contact-info__icon"><PhoneCallIcon /></div>
                <div>
                  <h3>Phone</h3>
                  <p>{PHONE_DISPLAY}</p>
                </div>
              </div>
              <div className="contact-info__block">
                <div className="contact-info__icon contact-info__icon--whatsapp"><WhatsAppSmallIcon /></div>
                <div>
                  <h3>WhatsApp</h3>
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-ghost">Chat with us</a>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
