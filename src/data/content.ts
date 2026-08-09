export interface ServiceItem {
  name: string;
  examples: string;
}

export interface ServiceCategory {
  slug: string;
  category: string;
  tagline: string;
  services: ServiceItem[];
}

export const serviceCatalog: ServiceCategory[] = [
  {
    slug: 'web-app-development',
    category: 'Web & Application Development',
    tagline: 'Websites and platforms built to actually run your business, not just describe it.',
    services: [
      {
        name: 'Website Building',
        examples:
          'Institutional websites for schools, colleges, hospitals, NGOs & trusts, temples, and government departments. Responsive real estate portals with listings, agent dashboards, and tenant management. Retail and shopping sites.',
      },
      {
        name: 'Application Development',
        examples:
          'Web apps for taxi and cab booking, restaurant ordering and table management, chit fund member management, gym membership tracking, salon and spa booking, apartment or society management, tuition centre management, and doctor appointment booking.',
      },
      {
        name: 'Ecommerce Development',
        examples: 'Custom-built ecommerce platforms and Shopify store setup and customisation.',
      },
    ],
  },
  {
    slug: 'mobile-app-development',
    category: 'Mobile App Development',
    tagline: 'Your service, in your customer’s pocket.',
    services: [
      {
        name: 'iOS & Android App Development',
        examples:
          'Native and cross-platform apps for taxi services, restaurants, chit funds, gyms, salons, and apartment societies.',
      },
      {
        name: 'Cross-platform App Development',
        examples: 'One codebase, deployed to both iOS and Android — built for startups who need both platforms without doubling the cost.',
      },
    ],
  },
  {
    slug: 'ai-services',
    category: 'AI Services',
    tagline: 'Practical AI that answers, qualifies, and works — not a chatbot for its own sake.',
    services: [
      {
        name: 'AI Agent Development',
        examples:
          'WhatsApp AI chatbots for lead qualification and appointment booking, 24/7 customer support agents, order-tracking and cart-recovery agents, and reservation bots for restaurants and clinics.',
      },
      {
        name: 'AI-Powered App Development',
        examples: 'Resume screening tools, personalised recommendation engines, AI-assisted content generation, and automated report summarisation.',
      },
      {
        name: 'Custom Own LLM',
        examples:
          'Fine-tuning and retrieval (RAG) on an existing model using your internal documents or support history, for domain-specific Q&A built around your business.',
      },
      {
        name: 'Requirement-Based AI Integration',
        examples: 'Adding an AI search bar or AI content tool to your existing site, or connecting AI to your CRM and ERP data.',
      },
    ],
  },
  {
    slug: 'crm-patient-management',
    category: 'CRM & Patient Management Systems',
    tagline: 'Software shaped around how your team already works.',
    services: [
      {
        name: 'Custom CRM Development',
        examples: 'Built around your workflow — role-based access, custom reporting, and integration with your existing accounting and ops tools.',
      },
      {
        name: 'Industry CRMs',
        examples:
          'Real Estate CRM, Patient Management System, Marketing CRM, Boutique & Retail CRM, Architect CRM, Photography CRM, Travel CRM, and Service & Vehicle Management CRM.',
      },
    ],
  },
  {
    slug: 'erp-business-systems',
    category: 'ERP & Business Systems',
    tagline: 'The back office, finally running itself.',
    services: [
      {
        name: 'Custom LMS Development',
        examples: 'Learning management systems for schools, colleges, and corporate training — course uploads, quizzes, progress tracking, and certificates.',
      },
      {
        name: 'Invoicing Software Development',
        examples: 'GST-compliant invoice generation, recurring billing, and payment reminders.',
      },
      {
        name: 'ERP Software',
        examples:
          'School Management ERP, HR & Payroll Software, Inventory Management Software, Food Delivery Software, Job Portal Software, Field Service Management Software, and Shopping Cart Software.',
      },
    ],
  },
  {
    slug: 'business-consulting',
    category: 'Business Process & Consulting',
    tagline: 'From manual and scattered, to structured and automated.',
    services: [
      {
        name: 'Business Process Automation Consulting',
        examples: 'Replacing manual Excel and WhatsApp-based workflows with automated systems, and connecting disconnected tools together.',
      },
      {
        name: 'Business & Digital Transformation Consulting',
        examples: 'Guiding traditional businesses from paper-based record-keeping to digital systems, with a technology roadmap suited to your growth stage.',
      },
    ],
  },
  {
    slug: 'registration-services',
    category: 'Registration Services',
    tagline: 'The paperwork, handled — so you can get back to business.',
    services: [
      { name: 'Udyam Registration', examples: 'MSME registration for access to government schemes, loans, and tax benefits.' },
      { name: 'GST Registration', examples: 'Registering your business for Goods & Services Tax compliance.' },
      { name: 'Import & Export Registration', examples: 'IEC (Import Export Code) registration for international trade.' },
      { name: 'Trademark Registration', examples: 'Legal protection for your business name, logo, or brand mark.' },
      { name: 'DUNS Number Registration', examples: 'A unique business identifier for international trade, credit, and vendor onboarding.' },
    ],
  },
  {
    slug: 'domain-hosting-email',
    category: 'Domain, Hosting & Email',
    tagline: 'Your address on the internet, set up properly, once.',
    services: [
      { name: 'Domain Purchase (incl. SSL Certificates)', examples: 'Domain registration and SSL setup for a secure, trusted (https) website.' },
      { name: 'Web Hosting Support', examples: 'Hosting setup and configuration on Firebase, GoDaddy, or other providers.' },
      { name: 'Professional Email Setup', examples: 'Google Workspace, Zoho Mail, or GoDaddy email configuration, including custom-domain email forwarding.' },
      { name: 'Website Maintenance & Redesigning', examples: 'Ongoing updates, security patches, content updates, and full redesigns for ageing websites.' },
    ],
  },
  {
    slug: 'branding-design',
    category: 'Branding & Design',
    tagline: 'A brand people recognise before they read a word.',
    services: [
      { name: 'Brand Strategy Consulting', examples: 'Positioning, messaging, and go-to-market strategy for a new or repositioning brand.' },
      { name: 'Graphic Design', examples: 'Logo design, brochure design, corporate presentation decks, packaging design, and social media creative.' },
      { name: 'Corporate Identity', examples: 'Colour palette, typography, and a brand guidelines document your whole team can use consistently.' },
    ],
  },
  {
    slug: 'digital-marketing',
    category: 'Digital Marketing',
    tagline: 'Getting found by the people already looking for you.',
    services: [
      { name: 'Google Ads & Meta Ads (PPC)', examples: 'Paid campaign setup and management across Google Search, Facebook, and Instagram.' },
      { name: 'Social Media Marketing', examples: 'Ad creative production — posters, brochures, videos — plus scheduled publishing.' },
      { name: 'Email Marketing', examples: 'Newsletter design and automated email campaign setup.' },
    ],
  },
  {
    slug: 'photo-video-production',
    category: '360° Photo & Video Production',
    tagline: 'Show it the way it actually looks — from every angle.',
    services: [
      {
        name: '360° Photo & Video / Product Image Creation',
        examples: 'Immersive 360° shoots for real estate listings, showrooms, and product catalogues.',
      },
    ],
  },
];

export const processSteps = [
  {
    title: 'Requirement Gathering',
    description: 'We start by listening — understanding your business, your customers, and what the project actually needs to achieve before a single screen is designed.',
  },
  {
    title: 'Feasibility Study',
    description: 'We assess the technical approach, timeline, and cost honestly, so you know exactly what you’re signing up for before committing.',
  },
  {
    title: 'Quote',
    description: 'A clear, itemised quote — no vague line items, no surprise additions once work begins.',
  },
  {
    title: 'Development',
    description: 'Your project is built in visible stages, with regular check-ins so you’re never wondering what’s happening behind the screen.',
  },
  {
    title: 'Validation',
    description: 'Before anything goes live, we test it the way your actual users will use it — not just the way it was specified.',
  },
  {
    title: 'Correction',
    description: 'Feedback gets incorporated properly, not patched over — we fix root causes, not symptoms.',
  },
  {
    title: 'Go Live',
    description: 'Launch day, handled — deployment, domain, hosting, and a walkthrough so your team is confident running it from day one.',
  },
];

export const faqs = [
  {
    q: 'What kind of businesses do you build for?',
    a: 'Mostly small and growing businesses across India — educational institutions, healthcare providers, real estate firms, retailers, and service businesses like taxi operators, restaurants, salons, and chit funds. If your business runs on WhatsApp groups and Excel sheets today, that’s exactly who we build for.',
  },
  {
    q: 'How long does a typical website or app take to build?',
    a: 'A standard business website usually takes 2–4 weeks from approved design to launch. Custom applications, CRMs, and ERPs vary more widely — typically 4–12 weeks depending on scope. You’ll get a specific timeline as part of your quote, before any work begins.',
  },
  {
    q: 'Do I need to know exactly what I want before I approach you?',
    a: 'No. Most clients start with a rough idea and a real problem to solve. Requirement gathering is the first step of our process precisely because figuring out the right scope together is part of the job.',
  },
  {
    q: 'Can you fine-tune AI to answer questions specific to my business?',
    a: 'Yes — our AI integration work is largely retrieval-based: we connect an existing AI model to your own documents, FAQs, and support history so it answers accurately for your business. Building a large language model entirely from scratch is a separate, much larger undertaking, and we’ll always be upfront about which one a project actually needs.',
  },
  {
    q: 'Who owns the code and design once the project is complete?',
    a: 'You do. Once final payment is received, the source code, design files, and any custom-built assets are handed over and belong to you outright.',
  },
  {
    q: 'Do you provide support after the website or app goes live?',
    a: 'Yes. Every project includes a defined post-launch support window for fixing defects, and ongoing maintenance plans are available beyond that for updates, security patches, and small changes.',
  },
  {
    q: 'I already have a website — can you just redesign or fix parts of it?',
    a: 'Yes. Redesigns, migrations, and fixing an existing site’s issues are common requests — you don’t need to start from zero.',
  },
  {
    q: 'Can you help with GST or Udyam registration even if I’m not building a website with you?',
    a: 'Yes, registration services are offered independently of development work — many clients use us for compliance filings alone.',
  },
  {
    q: 'What technology do you build with?',
    a: 'We choose the right stack for the job rather than forcing every project into one framework — typically modern JavaScript/TypeScript frameworks for web and mobile, Firebase or cloud infrastructure for hosting and backend, and integration with payment gateways like Razorpay where needed.',
  },
  {
    q: 'How do payments and project milestones work?',
    a: 'Projects are typically split into milestone-based payments tied to the process stages — an upfront amount to begin, further payments at defined checkpoints, and a final payment on go-live. Full terms are in our Refund Policy.',
  },
];

export interface ProductItem {
  name: string;
  category: string;
  url?: string;
  logoKey?: 'onn-realty';
  description: string;
  highlights: string[];
}

// Populated with real completed work as projects launch.
// logoKey references an imported logo in the Products page — add real
// screenshots/logos as each new project ships.
export const products: ProductItem[] = [
  {
    name: 'ONN Realty',
    category: 'Real Estate Website',
    url: 'https://www.onnrealty.in',
    logoKey: 'onn-realty',
    description:
      'A full business website for a real estate brand — built from brand presence through to live property listings, designed to convert visitors into enquiries.',
    highlights: ['Responsive real estate website', 'Property listing pages', 'Brand-first design & launch'],
  },
];

export interface TrainingTrack {
  title: string;
  description: string;
  outcomes: string[];
}

export const trainingTracks: TrainingTrack[] = [
  {
    title: 'Websites, from prompt to live site',
    description:
      'Learn to design and build real, working websites using AI coding tools — no prior programming background required.',
    outcomes: [
      'Structuring a project the way an AI tool understands best',
      'Turning a rough idea into a working site, section by section',
      'Publishing your first live website',
    ],
  },
  {
    title: 'Applications & business tools',
    description:
      'Go beyond static pages — build functioning applications with logins, databases, and real business logic, guided by AI.',
    outcomes: [
      'Planning an app the way developers do, before writing a line',
      'Working with AI on multi-step, multi-file builds',
      'Connecting a database and getting data flowing end to end',
    ],
  },
  {
    title: 'Games & interactive projects',
    description:
      'Build simple games and interactive experiences — a genuinely fun way to learn how AI-assisted development actually thinks.',
    outcomes: [
      'Core game-building concepts, explained simply',
      'Using AI to iterate quickly without getting stuck',
      'Shipping a playable project you can show off',
    ],
  },
  {
    title: 'Working with AI tools, properly',
    description:
      'The tools change every few months — the underlying skill of directing them well does not. We teach the skill, not just the tool of the day.',
    outcomes: [
      'Writing prompts that actually get you what you want',
      'Knowing when to trust AI output and when to double-check it',
      'Debugging alongside AI instead of guessing blindly',
    ],
  },
];
