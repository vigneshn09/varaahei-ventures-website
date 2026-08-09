import PageHero from '../components/PageHero';
import { EMAIL } from '../data/site';
import './Legal.css';

export default function RefundPolicy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Refund Policy" description="Last updated: August 2026" ambient={false} />
      <section className="section legal-section">
        <div className="container legal-container">
          <p>
            This Refund Policy applies to all services provided by Varaahei
            Ventures, including website design and development, application
            development, AI services, CRM/ERP systems, registration services,
            branding, digital marketing, and related offerings. By engaging
            our services, you agree to the terms outlined below.
          </p>

          <h2>1. Milestone-based payments</h2>
          <p>
            Most projects are structured around the stages described in our{' '}
            <a href="/about">process</a>: requirement gathering, feasibility
            study, quote, development, validation, correction, and go-live.
            Payments are typically split across these stages — an upfront
            amount to begin work, further payments at agreed checkpoints, and
            a final payment on delivery or go-live. Exact terms are confirmed
            in your project quote before work begins.
          </p>

          <h2>2. When a full refund applies</h2>
          <ul>
            <li>If work on the project has not yet commenced.</li>
            <li>If we are unable to begin the project within the timeframe agreed at quoting.</li>
            <li>If, after the feasibility study, we determine we cannot deliver the project as specified, and no development work has started.</li>
          </ul>

          <h2>3. When a partial refund may apply</h2>
          <ul>
            <li>If a milestone has been paid for but the corresponding stage of work was not delivered.</li>
            <li>If a project is mutually discontinued mid-way, a partial refund reflecting work not yet completed may be issued, after deducting for stages already delivered and any third-party costs already incurred on your behalf (such as domain, hosting, or registration fees paid to external providers).</li>
          </ul>

          <h2>4. When refunds do not apply</h2>
          <ul>
            <li>Once a project has been fully delivered, approved, and gone live.</li>
            <li>For milestones already completed and approved by you in writing (including email or WhatsApp confirmation).</li>
            <li>For third-party costs already paid on your behalf — domain registration, hosting charges, SSL certificates, government filing fees, or similar — as these are non-recoverable once processed.</li>
            <li>For subjective dissatisfaction with a design or approach that was approved by you at an earlier stage, unless it fails to meet the written requirements agreed at quoting.</li>
            <li>For registration services (Udyam, GST, trademark, import-export, DUNS, etc.) once the filing has been submitted to the relevant government portal or authority, as these fees are typically non-refundable at the source.</li>
          </ul>

          <h2>5. Change requests and revisions</h2>
          <p>
            Reasonable revisions within the agreed project scope are included
            as part of the validation and correction stages. Requests that
            fall outside the original scope will be quoted separately and are
            not covered under this refund policy.
          </p>

          <h2>6. How to request a refund</h2>
          <p>
            To request a refund, write to us at{' '}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a> with your project details
            and the reason for the request. We aim to review and respond to
            refund requests within 7 business days. Approved refunds are
            processed within 14 business days to the original payment method
            where possible.
          </p>

          <h2>7. Disputes</h2>
          <p>
            We encourage resolving any concerns directly with us first. If a
            resolution cannot be reached, the matter will be handled as
            described in our Terms & Conditions.
          </p>

          <h2>8. Changes to this policy</h2>
          <p>
            We may update this Refund Policy from time to time. The policy in
            effect at the time your project or payment commenced will apply
            to that engagement.
          </p>

          <p className="legal-note">
            This Refund Policy is a general template provided as a starting
            point and does not constitute legal advice. We recommend having it
            reviewed by a qualified legal professional before final publication.
          </p>
        </div>
      </section>
    </>
  );
}
