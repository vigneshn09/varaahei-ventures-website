import PageHero from '../components/PageHero';
import { ADDRESS, EMAIL } from '../data/site';
import './Legal.css';

export default function TermsAndConditions() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" description="Last updated: August 2026" ambient={false} />
      <section className="section legal-section">
        <div className="container legal-container">
          <p>
            These Terms & Conditions ("Terms") govern your use of the
            varaaheiventures.in website and any services provided by Varaahei
            Ventures ("we", "us", "our"). By using this Website or engaging
            our services, you agree to these Terms. If you do not agree,
            please do not use this Website or our services.
          </p>

          <h2>1. About us</h2>
          <p>
            Varaahei Ventures is a technology and growth studio based in
            Coimbatore, Tamil Nadu, India, providing web and application
            development, AI services, CRM/ERP systems, business registration
            assistance, branding, digital marketing, and related services.
          </p>

          <h2>2. Use of this Website</h2>
          <p>
            You agree to use this Website only for lawful purposes and in a
            manner that does not infringe the rights of, or restrict or
            inhibit the use of, this Website by any third party. You must not
            attempt to gain unauthorised access to this Website, its servers,
            or any systems connected to it.
          </p>

          <h2>3. Services and project engagements</h2>
          <p>
            Descriptions of services on this Website are indicative. The
            actual scope, timeline, deliverables, and cost of any project are
            defined in a separate written quote or agreement between you and
            Varaahei Ventures, following our requirement-gathering and
            feasibility process. In the event of any conflict between this
            Website and a signed project agreement, the project agreement
            will prevail.
          </p>

          <h2>4. Payments</h2>
          <p>
            Projects are billed on a milestone basis as described in our{' '}
            <a href="/refund-policy">Refund Policy</a>. Applicable taxes (such
            as GST) will be added to invoices where required by law. Delayed
            payments may result in a pause of ongoing work until outstanding
            amounts are cleared.
          </p>

          <h2>5. Client responsibilities</h2>
          <p>
            You agree to provide accurate information, timely feedback, and
            any content, credentials, or access required for us to deliver
            the project. Delays caused by pending client inputs may extend
            agreed timelines accordingly.
          </p>

          <h2>6. Intellectual property</h2>
          <p>
            Upon full and final payment for a project, ownership of the
            final, delivered source code, design files, and custom-built
            assets transfers to you, except for any third-party libraries,
            frameworks, stock assets, or licensed tools used in the build,
            which remain subject to their own licence terms. Until final
            payment is made, all work-in-progress remains the property of
            Varaahei Ventures. We retain the right to showcase completed,
            publicly available projects in our portfolio and marketing
            materials, unless otherwise agreed in writing.
          </p>

          <h2>7. Third-party services</h2>
          <p>
            Certain services (domain registration, hosting, SSL certificates,
            payment gateways, government registration portals, email
            providers) are provided by third parties. We facilitate the setup
            of these services on your behalf where agreed, but are not liable
            for outages, policy changes, or issues arising from those
            third-party providers themselves.
          </p>

          <h2>8. Warranties and limitation of liability</h2>
          <p>
            We take reasonable care in delivering our services, and provide a
            defined post-launch support window for defect fixes as agreed per
            project. Beyond this, our services and this Website are provided
            on an "as is" and "as available" basis. To the extent permitted
            by law, Varaahei Ventures shall not be liable for any indirect,
            incidental, or consequential loss arising from the use of our
            Website or services, including loss of business, revenue, or
            data, except where such liability cannot be excluded under
            applicable Indian law.
          </p>

          <h2>9. Confidentiality</h2>
          <p>
            We treat business information shared with us for the purpose of a
            project as confidential and will not disclose it to unrelated
            third parties, except as required to deliver the project or as
            required by law.
          </p>

          <h2>10. Termination</h2>
          <p>
            Either party may terminate an ongoing project engagement by
            written notice, subject to the payment terms described in our{' '}
            <a href="/refund-policy">Refund Policy</a> for work already
            completed or costs already incurred.
          </p>

          <h2>11. Governing law and jurisdiction</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes
            arising out of or relating to these Terms or our services shall
            be subject to the exclusive jurisdiction of the courts at
            Coimbatore, Tamil Nadu.
          </p>

          <h2>12. Changes to these Terms</h2>
          <p>
            We may revise these Terms from time to time. The updated version
            will be posted on this page with a revised "last updated" date.
          </p>

          <h2>13. Contact us</h2>
          <p className="legal-contact">
            <strong>{ADDRESS.line1}</strong><br />
            {ADDRESS.line2}<br />
            Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>

          <p className="legal-note">
            These Terms & Conditions are a general template provided as a
            starting point and do not constitute legal advice. We recommend
            having them reviewed by a qualified legal professional before
            final publication.
          </p>
        </div>
      </section>
    </>
  );
}
