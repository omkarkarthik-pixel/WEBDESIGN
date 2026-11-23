import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Calculator,
  Compass,
  FileCheck2,
  LineChart,
  Scale,
  ShieldCheck,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { SERVICES, type ServiceItem } from '../config/siteConfig';

interface ExpertiseSectionProps {
  onSelectServiceForEnquiry: (serviceTitle: string) => void;
}

const SERVICE_ICONS: Record<string, typeof LineChart> = {
  'financial-advisory': LineChart,
  'management-consultancy': BriefcaseBusiness,
  'financial-planning-budgeting': Calculator,
  'business-valuation': Scale,
  'audit-assurance': ShieldCheck,
  'contract-management': FileCheck2,
  'business-strategy': Compass,
};

export function ExpertiseSection({ onSelectServiceForEnquiry }: ExpertiseSectionProps) {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    if (!activeService) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveService(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeService]);

  const handleEnquire = (serviceTitle: string) => {
    setActiveService(null);
    onSelectServiceForEnquiry(serviceTitle);
  };

  return (
    <section
      id="expertise"
      className="border-t border-[#E9EEF2] bg-[#F5F7F9] py-24 lg:py-32"
      aria-labelledby="expertise-heading"
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#008577] uppercase">
              Our Expertise
            </p>
            <h2
              id="expertise-heading"
              className="mt-4 font-display text-[clamp(1.85rem,3.1vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[#14283D]"
            >
              Expertise That Supports Business.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-[0.98rem] leading-[1.7] text-[#596675]">
              Professional support across key financial and management functions, designed to
              help businesses operate with greater clarity and confidence.
            </p>
          </div>
        </motion.div>

        {/* Asymmetric 12-Column Editorial Grid (7+5, 4+4+4, 5+7) */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.id] ?? LineChart;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.04, 0.24),
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setActiveService(service)}
                className={`group relative flex cursor-pointer flex-col justify-between rounded-sm border border-[#E4EAF0] bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#008577]/55 hover:shadow-[0_10px_28px_rgba(20,40,61,0.06)] lg:p-8 ${service.gridSpan}`}
              >
                {/* Subtle top hairline accent on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-[#008577] transition-transform duration-200 group-hover:scale-x-100"
                />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-bold tracking-[0.12em] tabular-nums text-[#07518D]/80 transition-colors duration-150 group-hover:text-[#008577]">
                      {service.number}
                    </span>
                    <Icon
                      className="h-5 w-5 text-[#07518D]/75 transition-colors duration-150 group-hover:text-[#008577]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-6 font-display text-[1.25rem] font-semibold leading-[1.3] tracking-[-0.01em] text-[#14283D]">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-[52ch] text-[0.93rem] leading-[1.68] text-[#596675]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#E9EEF2] pt-5">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveService(service);
                    }}
                    className="inline-flex items-center gap-1.5 text-[0.86rem] font-medium text-[#07518D] transition-colors duration-150 group-hover:text-[#008577] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07518D]"
                  >
                    <span>Explore More</span>
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.75}
                    />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Quiet Scope & Regulatory Clarification Note */}
        <p className="mt-8 text-xs leading-relaxed text-[#596675]">
          Service scope and engagement structure are confirmed on a client-by-client basis.
          Regulated services, including audit and assurance, are offered strictly where
          applicable and authorised under the respective jurisdiction&apos;s permissions.
        </p>
      </div>

      {/* Interactive Service Scope Drawer / Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            key="service-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setActiveService(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#14283D]/45 p-4 backdrop-blur-[2px] sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.985 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl rounded-sm border border-[#E9EEF2] bg-white p-7 shadow-[0_24px_60px_rgba(20,40,61,0.18)] sm:p-9"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-display text-xs font-bold tracking-[0.14em] tabular-nums text-[#008577]">
                    SERVICE {activeService.number}
                  </p>
                  <h3
                    id="service-modal-title"
                    className="mt-2 font-display text-2xl font-bold tracking-[-0.015em] text-[#14283D]"
                  >
                    {activeService.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveService(null)}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-[#E9EEF2] text-[#596675] transition-colors hover:bg-[#F5F7F9] hover:text-[#14283D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07518D]"
                  aria-label="Close service details"
                >
                  <X className="h-4 w-4" strokeWidth={1.75} />
                </button>
              </div>

              <p className="mt-5 text-[0.95rem] leading-[1.72] text-[#596675]">
                {activeService.scopeSummary}
              </p>

              <div className="mt-6 border-t border-[#E9EEF2] pt-6">
                <h4 className="font-display text-xs font-semibold tracking-[0.14em] text-[#14283D] uppercase">
                  Key Focus Areas
                </h4>
                <ul className="mt-4 space-y-3">
                  {activeService.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-3 text-[0.92rem] leading-[1.6] text-[#596675]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-[2px] w-3 shrink-0 bg-[#008577]"
                      />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {activeService.regulatoryNote && (
                <p className="mt-6 rounded-sm bg-[#F5F7F9] px-4 py-3 text-xs leading-relaxed text-[#596675]">
                  {activeService.regulatoryNote}
                </p>
              )}

              <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-[#E9EEF2] pt-6">
                <button
                  type="button"
                  onClick={() => setActiveService(null)}
                  className="min-h-[44px] rounded-sm border border-[#E9EEF2] px-5 py-2.5 text-sm font-medium text-[#596675] transition-colors hover:bg-[#F5F7F9] hover:text-[#14283D]"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => handleEnquire(activeService.title)}
                  className="min-h-[44px] rounded-sm bg-[#07518D] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#053E6E]"
                >
                  Discuss {activeService.title}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
