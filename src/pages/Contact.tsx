import { type FormEvent, useState } from 'react';
import PageHero from '../components/PageHero';
import { ADDRESS, EMAIL, PHONE_DISPLAY, WHATSAPP_URL } from '../data/site';
import './Contact.css';

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
          <div className="contact-form-wrap">
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
          </div>

          <aside className="contact-info">
            <div className="contact-info__block">
              <h3>Address</h3>
              <p>{ADDRESS.line1}<br />{ADDRESS.line2}</p>
            </div>
            <div className="contact-info__block">
              <h3>Email</h3>
              <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            </div>
            <div className="contact-info__block">
              <h3>Phone</h3>
              <p>{PHONE_DISPLAY}</p>
            </div>
            <div className="contact-info__block">
              <h3>WhatsApp</h3>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-ghost">Chat with us</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
