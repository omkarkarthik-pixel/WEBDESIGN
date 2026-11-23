import { useState } from 'react';
import { Linkedin, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { FinaptLogo } from './FinaptLogo';
import { NAV_LINKS, OFFICES, SERVICES, SITE_CONFIG } from '../config/siteConfig';

interface FooterProps {
  onSelectService?: (serviceTitle: string) => void;
}

type LegalModalType = 'privacy' | 'entities' | null;

export function Footer({ onSelectService }: FooterProps) {
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);
  const [linkedinPending, setLinkedinPending] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLinkedInClick = () => {
    if (SITE_CONFIG.socialLinks.linkedin) {
      window.location.href = SITE_CONFIG.socialLinks.linkedin;
      return;
    }
    setLinkedinPending(true);
  };

  return (
    <footer className="bg-[#14283D] text-white" aria-label="Footer">
      <div className="mx-auto max-w-[1320px] px-6 pb-10 pt-16 lg:px-10 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('home');
              }}
              className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#14B8A6]"
              aria-label="Back to top"
            >
              <FinaptLogo variant="inverted" size="md" />
            </a>

            <p className="mt-4 font-display text-sm font-medium tracking-[0.02em] text-[#5EEAD4]">
              {SITE_CONFIG.tagline}
            </p>

            <p className="mt-4 max-w-sm text-[0.88rem] leading-[1.7] text-slate-300">
              FINAPT Management Consultancy LLP supports organisations with disciplined
              financial insight, management consultancy, and practical business advisory
              across India and Abu Dhabi, UAE.
            </p>

            <div className="mt-6 flex flex-col items-start gap-2">
              <button
                type="button"
                onClick={handleLinkedInClick}
                className="inline-flex min-h-[40px] items-center gap-2 rounded-sm border border-white/15 px-4 py-2 text-xs font-medium tracking-[0.04em] text-white/90 transition-colors hover:border-[#14B8A6] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14B8A6]"
              >
                <Linkedin className="h-3.5 w-3.5 text-[#14B8A6]" strokeWidth={1.75} />
                <span>LinkedIn</span>
              </button>
              {linkedinPending && (
                <p className="text-[0.74rem] text-slate-400">
                  Official LinkedIn profile link will be connected upon confirmation.
                </p>
              )}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xs font-semibold tracking-[0.15em] text-white/60 uppercase">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3 text-[0.88rem] text-slate-300">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href.replace('#', ''));
                    }}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-semibold tracking-[0.15em] text-white/60 uppercase">
              Expertise
            </h3>
            <ul className="mt-5 space-y-3 text-[0.88rem] text-slate-300">
              {SERVICES.map((svc) => (
                <li key={svc.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService?.(svc.title)}
                    className="text-left transition-colors hover:text-white"
                  >
                    {svc.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* India & UAE Presence Column */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-semibold tracking-[0.15em] text-white/60 uppercase">
              Presence &amp; Contact
            </h3>
            <div className="mt-5 space-y-6 text-[0.86rem] leading-relaxed text-slate-300">
              {OFFICES.map((office) => (
                <div key={office.id}>
                  <p className="font-display text-xs font-semibold tracking-[0.1em] text-[#5EEAD4] uppercase">
                    {office.countryLabel}
                  </p>
                  <p className="mt-1 font-medium text-white">{office.entityName}</p>
                  <p className="mt-0.5 text-slate-300">
                    {office.officeHeading}: {office.cityRegion}
                  </p>
                  <p className="mt-1 text-xs italic text-slate-400">
                    Contact details to be updated
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-8 flex flex-col gap-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 FINAPT Management Consultancy LLP. All Rights Reserved.</p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <button
              type="button"
              onClick={() => setLegalModal('entities')}
              className="transition-colors hover:text-white"
            >
              Legal Entities Notice
            </button>
            <span className="text-white/20" aria-hidden="true">
              ·
            </span>
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      {/* Legal / Privacy Notice Modal */}
      <AnimatePresence>
        {legalModal && (
          <motion.div
            key="legal-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setLegalModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-[2px]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-sm border border-[#E9EEF2] bg-white p-7 text-[#14283D] shadow-2xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <h3
                  id="legal-modal-title"
                  className="font-display text-xl font-bold text-[#14283D]"
                >
                  {legalModal === 'entities' ? 'Legal Entities Identification' : 'Privacy Policy'}
                </h3>
                <button
                  type="button"
                  onClick={() => setLegalModal(null)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[#E9EEF2] text-[#596675] transition-colors hover:bg-[#F5F7F9] hover:text-[#14283D]"
                  aria-label="Close notice"
                >
                  <X className="h-4 w-4" strokeWidth={1.75} />
                </button>
              </div>

              {legalModal === 'entities' ? (
                <div className="mt-4 space-y-3 text-sm leading-[1.7] text-[#596675]">
                  <p>
                    <strong className="font-semibold text-[#14283D]">India:</strong> FINAPT
                    Management Consultancy LLP, with its Head Office in Thrissur, Kerala, India.
                  </p>
                  <p>
                    <strong className="font-semibold text-[#14283D]">United Arab Emirates:</strong>{' '}
                    APT Management Consultancy LLP, Abu Dhabi, United Arab Emirates.
                  </p>
                  <p>
                    FINAPT Management Consultancy LLP and APT Management Consultancy LLP are
                    distinct, separately registered legal entities operating in accordance with
                    the applicable laws and professional permissions of their respective
                    jurisdictions.
                  </p>
                </div>
              ) : (
                <div className="mt-4 space-y-3 text-sm leading-[1.7] text-[#596675]">
                  <p>
                    Information submitted through the enquiry form on this website is used
                    solely to review and respond to your management consultancy or financial
                    services request.
                  </p>
                  <p>
                    Full published privacy terms, data controller details, and jurisdiction
                    disclosures will be updated here once finalised by management.
                  </p>
                </div>
              )}

              <div className="mt-6 flex justify-end border-t border-[#E9EEF2] pt-5">
                <button
                  type="button"
                  onClick={() => setLegalModal(null)}
                  className="min-h-[42px] rounded-sm bg-[#07518D] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#053E6E]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
