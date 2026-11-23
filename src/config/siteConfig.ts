/**
 * Centralized FINAPT brand, partner, service, and office configuration.
 * Keep unconfirmed contact and partner details cleanly structured here
 * so management can update them in one place without touching UI code.
 */

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  scopeSummary: string;
  focusAreas: string[];
  regulatoryNote?: string;
  gridSpan: string;
  featured?: boolean;
}

export interface PartnerProfile {
  id: string;
  name: string;
  designation: string;
  experienceBadge?: {
    figure: string;
    label: string;
  };
  photoSrc: string;
  photoAlt: string;
  photoPosition: string;
  paragraphs: string[];
  expertiseTags?: string[];
  officeNote?: string;
}

export interface OfficeLocation {
  id: 'india' | 'uae';
  countryLabel: string;
  entityName: string;
  officeHeading: string;
  cityRegion: string;
  jurisdictionNote: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  contact: {
    addressPlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
  };
}

export const SITE_CONFIG = {
  brandName: 'FINAPT',
  legalName: 'FINAPT Management Consultancy LLP',
  tagline: 'Clarity in Finance. Confidence in Business.',
  /**
   * Optional path to a supplied transparent PNG/SVG logo asset.
   * Leave empty to render the precision vector FINAPT brand mark.
   */
  customLogoUrl: '',
  /**
   * Populate with international digits only (e.g. "9198XXXXXXXX" or "9715XXXXXXXX")
   * once official WhatsApp Business contact is confirmed.
   */
  whatsappNumber: '',
  whatsappPrefill: 'Hello FINAPT team, I would like to discuss management consultancy and financial services.',
  socialLinks: {
    linkedin: '',
  },
  assets: {
    heroArchitecture: '/src/assets/images/hero_corporate_architecture_1795434071652.jpg',
    aboutInterior: '/src/assets/images/about_architectural_interior_1795434058827.jpg',
    indiaPresence: '/src/assets/images/presence_india_kerala_1795434066962.jpg',
    uaePresence: '/src/assets/images/presence_uae_abudhabi_1795434068199.jpg',
    partnerMartin: '/assets/aistudio/MARIN_GEORGE_cfa9c469.png',
    partnerJayan: '/assets/aistudio/JAYAN_BALAKRISHNAN_8f319511.png',
  },
} as const;

export const MARQUEE_ITEMS: readonly string[] = [
  'FINANCIAL ADVISORY',
  'MANAGEMENT CONSULTANCY',
  'BUSINESS STRATEGY',
  'FINANCIAL PLANNING',
  'VALUATION',
  'CORPORATE SOLUTIONS',
];

export const ABOUT_PRINCIPLES = [
  {
    number: '01',
    title: 'Professional Expertise',
    summary: 'Grounded in established accounting, financial analysis, and corporate management discipline.',
  },
  {
    number: '02',
    title: 'Strategic Thinking',
    summary: 'Structured perspectives that connect day-to-day financial clarity with long-term business direction.',
  },
  {
    number: '03',
    title: 'Practical Solutions',
    summary: 'Actionable advisory aligned to operational realities rather than theoretical frameworks.',
  },
  {
    number: '04',
    title: 'Client-Focused Approach',
    summary: 'Attentive partner-led engagement tailored to the specific requirements of each organisation.',
  },
] as const;

export const SERVICES: ServiceItem[] = [
  {
    id: 'financial-advisory',
    number: '01',
    title: 'Financial Advisory',
    description:
      'Financial insight and guidance to support business decisions and financial performance.',
    scopeSummary:
      'Structured financial review and advisory support to help leadership evaluate performance, manage capital priorities, and make well-informed operational and commercial decisions.',
    focusAreas: [
      'Financial performance evaluation and reporting clarity',
      'Working capital and cash flow visibility',
      'Decision support for business expansion and restructuring',
    ],
    gridSpan: 'lg:col-span-7',
    featured: true,
  },
  {
    id: 'management-consultancy',
    number: '02',
    title: 'Management Consultancy',
    description:
      'Supporting businesses in improving management practices, operational efficiency and decision-making.',
    scopeSummary:
      'Practical management guidance focused on strengthening internal governance, streamlining business processes, and establishing dependable management review frameworks.',
    focusAreas: [
      'Management reporting and control frameworks',
      'Operational efficiency and process alignment',
      'Organisational and commercial decision-making support',
    ],
    gridSpan: 'lg:col-span-5',
  },
  {
    id: 'financial-planning-budgeting',
    number: '03',
    title: 'Financial Planning & Budgeting',
    description:
      'Budget preparation, financial projections and planning support for informed business decisions.',
    scopeSummary:
      'Disciplined annual and multi-period budgeting models that give leadership clear visibility into projected revenues, cost structures, and variance tracking.',
    focusAreas: [
      'Operating and capital budget formulation',
      'Cash flow forecasting and scenario modelling',
      'Budget-versus-actual variance review frameworks',
    ],
    gridSpan: 'lg:col-span-4',
  },
  {
    id: 'business-valuation',
    number: '04',
    title: 'Business Valuation',
    description:
      'Financial analysis and valuation support for business and investment-related requirements.',
    scopeSummary:
      'Methodical financial analysis and valuation perspectives supporting ownership reviews, commercial negotiations, and investment assessments.',
    focusAreas: [
      'Business and equity valuation analysis',
      'Financial modelling and value driver assessment',
      'Commercial transaction and investment decision support',
    ],
    gridSpan: 'lg:col-span-4',
  },
  {
    id: 'audit-assurance',
    number: '05',
    title: 'Audit & Assurance',
    description:
      'Professional audit and assurance-related services, where applicable and authorised.',
    scopeSummary:
      'Independent review and assurance perspectives delivered strictly within the applicable regulatory permissions and statutory scope of each relevant jurisdiction.',
    focusAreas: [
      'Internal control and process review',
      'Financial reporting readiness and compliance support',
      'Assurance engagements where applicable and authorised',
    ],
    regulatoryNote:
      'Delivered strictly where applicable and authorised under the regulatory permissions of the respective jurisdiction.',
    gridSpan: 'lg:col-span-4',
  },
  {
    id: 'contract-management',
    number: '06',
    title: 'Contract Management',
    description:
      'Financial and management perspectives on contract-related processes and obligations.',
    scopeSummary:
      'Commercial and financial oversight across contract lifecycles to help organisations monitor commitments, cost structures, and performance obligations.',
    focusAreas: [
      'Commercial and financial review of contract structures',
      'Obligation tracking and financial risk visibility',
      'Contract governance and renewal evaluation',
    ],
    gridSpan: 'lg:col-span-5',
  },
  {
    id: 'business-strategy',
    number: '07',
    title: 'Business Strategy',
    description:
      'Supporting business planning, performance evaluation and strategic decision-making.',
    scopeSummary:
      'Collaborative strategic planning that translates financial realities and market context into clear priorities, measurable milestones, and disciplined execution.',
    focusAreas: [
      'Medium- and long-term business planning',
      'Performance evaluation across business units',
      'Cross-border business perspective between India and the UAE',
    ],
    gridSpan: 'lg:col-span-7',
    featured: true,
  },
];

export const PARTNERS: PartnerProfile[] = [
  {
    id: 'ca-martin-george',
    name: 'CA Martin George',
    designation: 'Chartered Accountant',
    experienceBadge: {
      figure: '25+',
      label: 'Years of Professional Experience',
    },
    photoSrc: SITE_CONFIG.assets.partnerMartin,
    photoAlt: 'Portrait of CA Martin George, Chartered Accountant at FINAPT Management Consultancy LLP',
    photoPosition: 'object-[50%_18%]',
    paragraphs: [
      'CA Martin George is an experienced Chartered Accountant with over 25 years of professional experience across finance, auditing, budgeting, valuation and contract management.',
      'He previously served as Financial Controller at M.H. Alshaya, gaining valuable experience in corporate financial management and business operations.',
      'He is currently in charge of the Head Office at Thrissur.',
    ],
    expertiseTags: ['Finance', 'Auditing', 'Budgeting', 'Valuation', 'Contract Management'],
    officeNote: 'Head Office, Thrissur, Kerala',
  },
  {
    id: 'mr-jayan',
    name: 'Mr. Jayan',
    designation: 'Partner',
    photoSrc: SITE_CONFIG.assets.partnerJayan,
    photoAlt: 'Portrait of Mr. Jayan, Partner at FINAPT Management Consultancy LLP',
    photoPosition: 'object-[50%_12%]',
    paragraphs: [
      "An integral member of FINAPT's leadership team, contributing to the firm's management consultancy and financial services operations, with a focus on supporting business requirements and client engagements.",
    ],
    officeNote: 'Leadership & Client Engagements',
  },
];

export const OFFICES: OfficeLocation[] = [
  {
    id: 'india',
    countryLabel: 'India',
    entityName: 'FINAPT Management Consultancy LLP',
    officeHeading: 'Head Office',
    cityRegion: 'Thrissur, Kerala, India',
    jurisdictionNote: 'Registered Indian LLP — Independent Legal Entity',
    imageSrc: SITE_CONFIG.assets.indiaPresence,
    imageAlt: 'Contemporary commercial architecture in Kerala representing FINAPT Management Consultancy LLP in Thrissur, India',
    imageClassName: 'object-cover object-[50%_30%] scale-[1.06]',
    contact: {
      addressPlaceholder: 'Thrissur, Kerala, India (Full office address to be updated)',
      emailPlaceholder: 'Official India email address to be updated',
      phonePlaceholder: 'Official India contact number to be updated',
    },
  },
  {
    id: 'uae',
    countryLabel: 'United Arab Emirates',
    entityName: 'APT Management Consultancy LLP',
    officeHeading: 'Abu Dhabi Presence',
    cityRegion: 'Abu Dhabi, United Arab Emirates',
    jurisdictionNote: 'Distinct UAE Entity — Independently Registered',
    imageSrc: SITE_CONFIG.assets.uaePresence,
    imageAlt: 'Abu Dhabi contemporary glass financial skyline representing APT Management Consultancy LLP in the United Arab Emirates',
    imageClassName: 'object-cover object-center',
    contact: {
      addressPlaceholder: 'Abu Dhabi, United Arab Emirates (Full office address to be updated)',
      emailPlaceholder: 'Official Abu Dhabi email address to be updated',
      phonePlaceholder: 'Official Abu Dhabi contact number to be updated',
    },
  },
];

export const WHY_FINAPT_STRENGTHS = [
  {
    id: 'experienced-leadership',
    number: '01',
    title: 'Experienced Leadership',
    description: 'Led by professionals with substantial financial and management experience.',
  },
  {
    id: 'financial-understanding',
    number: '02',
    title: 'Financial Understanding',
    description: 'A strong foundation in financial functions and business requirements.',
  },
  {
    id: 'practical-approach',
    number: '03',
    title: 'Practical Approach',
    description: 'Solutions focused on real business needs and practical outcomes.',
  },
  {
    id: 'international-perspective',
    number: '04',
    title: 'International Perspective',
    description: 'An India and Abu Dhabi presence supporting an international business outlook.',
  },
] as const;

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Expertise', href: '#expertise' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Our Presence', href: '#presence' },
  { label: 'Contact', href: '#contact' },
] as const;
