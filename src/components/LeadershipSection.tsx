import { useState } from 'react';
import { User } from 'lucide-react';
import { motion } from 'motion/react';
import { PARTNERS, type PartnerProfile } from '../config/siteConfig';

function PartnerPortraitCard({
  partner,
  index,
}: {
  partner: PartnerProfile;
  index: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex h-full flex-col overflow-hidden rounded-sm border border-[#E4EAF0] bg-white"
    >
      {/* Unified Architectural Studio Portrait Stage
          Both portraits share identical aspect ratio, balanced eye-line alignment,
          pure editorial white framing, and a restrained bottom tonal veil so both
          supplied photographs integrate seamlessly with the corporate visual system
          without altering facial features or skin tones. */}
      <div className="relative overflow-hidden border-b border-[#E9EEF2] bg-[#FAFBFD]">
        <div className="relative mx-auto aspect-[4/4.15] w-full overflow-hidden bg-white">
          {!imgError ? (
            <img
              src={partner.photoSrc}
              alt={partner.photoAlt}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className={`h-full w-full object-cover ${partner.photoPosition} transition-transform duration-500 ease-out`}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-[#F5F7F9] text-[#596675]">
              <User className="h-12 w-12 text-[#07518D]/40" strokeWidth={1.25} />
              <span className="mt-3 font-display text-sm font-semibold text-[#14283D]">
                {partner.name}
              </span>
            </div>
          )}

          {/* Subtle bottom architectural shadow veil for crisp transition into card body */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#14283D]/[0.07] via-[#14283D]/[0.02] to-transparent"
          />

          {/* Subtle inner hairline frame unifying studio & office lighting edges */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#14283D]/[0.05]"
          />
        </div>
      </div>

      {/* Editorial Biography Body */}
      <div className="flex flex-1 flex-col justify-between p-7 sm:p-9">
        <div>
          {/* Name & Role Header */}
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <div>
              <h3 className="font-display text-[1.55rem] font-bold tracking-[-0.015em] text-[#14283D]">
                {partner.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#07518D]">
                {partner.designation}
              </p>
            </div>

            {partner.officeNote && (
              <span className="text-xs font-medium text-[#596675]">
                {partner.officeNote}
              </span>
            )}
          </div>

          {/* Visually Prominent Experience Credential (CA Martin George) */}
          {partner.experienceBadge && (
            <div className="mt-6 flex items-baseline gap-4 border-y border-[#E9EEF2] bg-[#F5F7F9]/70 px-5 py-4">
              <span className="font-display text-[2.1rem] font-extrabold leading-none tracking-[-0.03em] tabular-nums text-[#07518D]">
                {partner.experienceBadge.figure}
              </span>
              <span className="h-6 w-[1px] bg-[#CBD5E1]" aria-hidden="true" />
              <span className="font-display text-[0.9rem] font-semibold leading-snug text-[#14283D]">
                {partner.experienceBadge.label}
              </span>
            </div>
          )}

          {/* Profile Narrative */}
          <div className="mt-6 space-y-4 text-[0.94rem] leading-[1.72] text-[#596675]">
            {partner.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Practice Focus Metadata (Clean unboxed typographic list, zero pill clutter) */}
        {partner.expertiseTags && partner.expertiseTags.length > 0 ? (
          <div className="mt-8 border-t border-[#E9EEF2] pt-5">
            <p className="font-display text-[0.7rem] font-semibold tracking-[0.14em] text-[#008577] uppercase">
              Areas of Experience
            </p>
            <div className="mt-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[0.86rem] font-medium text-[#14283D]">
              {partner.expertiseTags.map((tag, idx) => (
                <span key={tag} className="inline-flex items-center gap-2.5">
                  <span>{tag}</span>
                  {idx < partner.expertiseTags!.length - 1 && (
                    <span className="text-[#008577]" aria-hidden="true">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-8 border-t border-[#E9EEF2] pt-5">
            <p className="font-display text-[0.7rem] font-semibold tracking-[0.14em] text-[#008577] uppercase">
              Leadership Focus
            </p>
            <p className="mt-2 text-[0.86rem] font-medium text-[#14283D]">
              Management Consultancy · Financial Services · Client Engagements
            </p>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="border-t border-[#E9EEF2] bg-white py-24 lg:py-32"
      aria-labelledby="leadership-heading"
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
              Leadership
            </p>
            <h2
              id="leadership-heading"
              className="mt-4 font-display text-[clamp(1.85rem,3.1vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[#14283D]"
            >
              Leadership Built on Experience.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[0.98rem] leading-[1.7] text-[#596675]">
              Strong businesses benefit from experienced perspectives, thoughtful decisions
              and a clear understanding of finance.
            </p>
          </div>
        </motion.div>

        {/* Two-Profile Executive Grid with Matched Portrait Scale */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {PARTNERS.map((partner, index) => (
            <PartnerPortraitCard key={partner.id} partner={partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
