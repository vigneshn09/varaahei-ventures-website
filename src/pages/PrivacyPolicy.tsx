import PageHero from '../components/PageHero';
import { EMAIL, ADDRESS } from '../data/site';
import './Legal.css';

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated: August 2026" ambient={false} />
      <section className="section legal-section">
        <div className="container legal-container">
          <p>
            Varaahei Ventures ("we", "us", "our") operates varaaheiventures.in
            (the "Website"). This Privacy Policy explains how we collect, use,
            store, and protect personal information when you use our Website
            or engage us for our services, in accordance with the Information
            Technology Act, 2000 and the Information Technology (Reasonable
            Security Practices and Procedures and Sensitive Personal Data or
            Information) Rules, 2011.
          </p>

          <h2>1. Information we collect</h2>
          <p>We may collect the following categories of information:</p>
          <ul>
            <li><strong>Contact details</strong> you provide through our contact form, email, phone, or WhatsApp — such as your name, email address, phone number, and business name.</li>
            <li><strong>Project information</strong> you share with us to scope, quote, or deliver a project, including business requirements, documents, and account access you choose to provide for development or integration purposes.</li>
            <li><strong>Technical information</strong> such as browser type, device information, and pages visited, collected automatically through standard web analytics.</li>
            <li><strong>Billing information</strong> necessary to process payments, such as billing name, address, and GSTIN where applicable. We do not directly store full payment card or bank account numbers; these are processed by our payment gateway partners.</li>
          </ul>

          <h2>2. How we use your information</h2>
          <ul>
            <li>To respond to enquiries and provide quotes for our services.</li>
            <li>To design, develop, deliver, and support the projects you engage us for.</li>
            <li>To process payments and issue invoices.</li>
            <li>To communicate project updates via email, phone, or WhatsApp.</li>
            <li>To comply with applicable legal and tax obligations.</li>
            <li>To improve our Website and services.</li>
          </ul>
          <p>We do not sell or rent your personal information to third parties.</p>

          <h2>3. Sharing of information</h2>
          <p>
            We may share information with trusted third parties strictly where
            necessary to deliver our services — for example, hosting providers
            (such as Firebase/Google Cloud), domain registrars, payment
            gateways, and email service providers. These parties are only
            given the information required to perform their function and are
            expected to handle it securely. We may also disclose information
            where required by law, regulation, or a valid order from a
            government or judicial authority.
          </p>

          <h2>4. Data retention</h2>
          <p>
            We retain personal and project information for as long as
            necessary to provide our services, meet legal or tax obligations,
            and resolve any disputes. Project source code and business data
            handed over to a client remain the client's responsibility once
            delivered.
          </p>

          <h2>5. Data security</h2>
          <p>
            We follow reasonable security practices, consistent with industry
            standards and the requirements of the IT Rules, 2011, to protect
            information against unauthorised access, alteration, disclosure,
            or destruction. However, no method of transmission or storage over
            the internet is completely secure, and we cannot guarantee
            absolute security.
          </p>

          <h2>6. Cookies and analytics</h2>
          <p>
            Our Website may use cookies or similar technologies to understand
            how visitors use the site and to improve its performance. You can
            disable cookies through your browser settings, though some parts
            of the Website may not function as intended if you do.
          </p>

          <h2>7. Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of your
            personal information held by us, subject to our legal and
            contractual obligations, by contacting us using the details below.
          </p>

          <h2>8. Third-party links</h2>
          <p>
            Our Website may contain links to third-party websites (including
            client project links). We are not responsible for the privacy
            practices of those websites and encourage you to review their
            respective privacy policies.
          </p>

          <h2>9. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy periodically. The updated
            version will be posted on this page with a revised "last updated"
            date. Continued use of the Website after changes are posted
            constitutes acceptance of the revised policy.
          </p>

          <h2>10. Grievance Officer</h2>
          <p>
            In accordance with the Information Technology Act, 2000 and the
            rules made thereunder, the contact details of the Grievance
            Officer are provided below. Any complaints or concerns regarding
            this Privacy Policy or the processing of your information may be
            addressed to:
          </p>
          <p className="legal-contact">
            <strong>{ADDRESS.line1}</strong><br />
            {ADDRESS.line2}<br />
            Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <p className="legal-note">
            This Privacy Policy is a general template provided as a starting
            point and does not constitute legal advice. We recommend having it
            reviewed by a qualified legal professional before final publication.
          </p>
        </div>
      </section>
    </>
  );
}
