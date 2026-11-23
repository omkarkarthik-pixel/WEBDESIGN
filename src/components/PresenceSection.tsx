import { useState } from 'react';
import { Globe2, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { OFFICES, type OfficeLocation } from '../config/siteConfig';

function LocationBlock({ office, index }: { office: OfficeLocation; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col overflow-hidden rounded-sm border border-[#E4EAF0] bg-white"
    >
      {/* Architectural City Visual */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F7F9]">
        {!imgError ? (
          <img
            src={office.imageSrc}
            alt={office.imageAlt}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className={`h-full w-full transition-transform duration-500 ease-out hover:scale-[1.03] ${office.imageClassName ?? 'object-cover'}`}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-[#F5F7F9] text-[#596675]">
            <Globe2 className="h-9 w-9 text-[#07518D]/50" strokeWidth={1.25} />
            <span className="mt-2 text-xs font-medium text-[#14283D]">
              {office.cityRegion}
            </span>
          </div>
        )}
      </div>

      {/* Distinct Legal Entity Details */}
      <div className="flex flex-1 flex-col justify-between p-7 sm:p-9">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-[#008577] uppercase">
            {office.countryLabel}
          </p>

          <h3 className="mt-3 font-display text-[1.45rem] font-bold leading-snug tracking-[-0.015em] text-[#14283D]">
            {office.entityName}
          </h3>

          <div className="mt-5 flex items-start gap-2.5 text-[0.95rem] text-[#596675]">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#07518D]" strokeWidth={1.75} />
            <div>
              <span className="font-medium text-[#14283D]">{office.officeHeading}:</span>{' '}
              <span>{office.cityRegion}</span>
            </div>
          </div>
        </div>

        <div className="mt-7 border-t border-[#E9EEF2] pt-4 text-xs text-[#596675]">
          {office.jurisdictionNote}
        </div>
      </div>
    </motion.article>
  );
}

export function PresenceSection() {
  return (
    <section
      id="presence"
      className="border-t border-[#E9EEF2] bg-[#F5F7F9] py-24 lg:py-32"
      aria-labelledby="presence-heading"
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Section Header + Minimalist India-UAE Corridor Graphic */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#008577] uppercase">
              Our Presence
            </p>
            <h2
              id="presence-heading"
              className="mt-4 font-display text-[clamp(1.85rem,3.1vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[#14283D]"
            >
              Connecting Business Across Borders.
            </h2>
            <p className="mt-5 max-w-[54ch] text-[0.98rem] leading-[1.7] text-[#596675]">
              With a presence in India and Abu Dhabi, FINAPT brings an international
              perspective to management consultancy and financial services.
            </p>
          </div>

          {/* Minimalist Architectural India-to-UAE Connecting Corridor Graphic */}
          <div className="lg:col-span-6">
            <div className="rounded-sm border border-[#E4EAF0] bg-white px-6 py-5 sm:px-8">
              <div className="flex items-center justify-between text-xs font-semibold tracking-[0.1em] text-[#14283D]">
                <div>
                  <span className="block font-display text-sm font-bold text-[#07518D]">
                    Thrissur, India
                  </span>
                  <span className="mt-0.5 block text-[0.72rem] font-normal tracking-normal text-[#596675]">
                    10.5276° N, 76.2144° E
                  </span>
                </div>

                <div className="flex-1 px-4 sm:px-6" aria-hidden="true">
                  <svg
                    viewBox="0 0 260 44"
                    fill="none"
                    className="h-10 w-full"
                    preserveAspectRatio="none"
                  >
                    {/* Subtle base horizon */}
                    <line
                      x1="6"
                      y1="32"
                      x2="254"
                      y2="32"
                      stroke="#E9EEF2"
                      strokeWidth="1"
                    />
                    {/* Minimalist Arabian Sea corridor arc */}
                    <path
                      d="M 10 32 Q 130 2 250 32"
                      stroke="#07518D"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M 10 32 Q 130 12 250 32"
                      stroke="#008577"
                      strokeOpacity="0.45"
                      strokeWidth="1"
                    />
                    <circle cx="10" cy="32" r="3.5" fill="#07518D" />
                    <circle cx="250" cy="32" r="3.5" fill="#008577" />
                  </svg>
                </div>

                <div className="text-right">
                  <span className="block font-display text-sm font-bold text-[#008577]">
                    Abu Dhabi, UAE
                  </span>
                  <span className="mt-0.5 block text-[0.72rem] font-normal tracking-normal text-[#596675]">
                    24.4539° N, 54.3773° E
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Split-Screen Location Blocks */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {OFFICES.map((office, index) => (
            <LocationBlock key={office.id} office={office} index={index} />
          ))}
        </div>

        {/* Explicit Legal Entity Separation Clarification */}
        <p className="mt-8 text-xs leading-relaxed text-[#596675]">
          Entity Notice: FINAPT Management Consultancy LLP (India) and APT Management
          Consultancy LLP (Abu Dhabi, UAE) are separate, independently registered legal
          entities operating within their respective jurisdictions.
        </p>
      </div>
    </section>
  );
}
