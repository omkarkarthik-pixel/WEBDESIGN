import { useState } from 'react';
import { Building } from 'lucide-react';
import { motion } from 'motion/react';
import { ABOUT_PRINCIPLES, SITE_CONFIG } from '../config/siteConfig';

export function AboutSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="bg-white py-24 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Narrative & Principles Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-7"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-[#008577] uppercase">
                About FINAPT
              </p>

              <h2
                id="about-heading"
                className="mt-4 max-w-xl font-display text-[clamp(1.85rem,3.1vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[#14283D]"
              >
                More Than Consultancy. A Partner in Progress.
              </h2>

              <div className="mt-7 max-w-[62ch] space-y-5 text-[0.98rem] leading-[1.75] text-[#596675]">
                <p>
                  FINAPT Management Consultancy LLP is focused on helping businesses navigate
                  financial complexity, strengthen management practices and make better-informed
                  business decisions.
                </p>
                <p>
                  With a professional foundation in India and an international presence in Abu
                  Dhabi, FINAPT brings together financial knowledge, practical business
                  understanding and a client-focused approach.
                </p>
              </div>
            </div>

            {/* Four Core Principles in Clean Architectural Hairline Grid */}
            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 border-t border-[#E9EEF2] pt-9 sm:grid-cols-2">
              {ABOUT_PRINCIPLES.map((principle) => (
                <div key={principle.number} className="group">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-xs font-bold tabular-nums text-[#008577]">
                      {principle.number}
                    </span>
                    <h3 className="font-display text-[1.05rem] font-semibold text-[#14283D]">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 pl-7 text-[0.9rem] leading-[1.65] text-[#596675]">
                    {principle.summary}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Architectural Image + Geometric Brand Motif Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col justify-center lg:col-span-5"
          >
            {/* Subtle geometric architectural accent inspired by the ascending lines of the FINAPT logo */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-3 -top-3 hidden h-28 w-28 lg:block"
            >
              <svg viewBox="0 0 112 112" fill="none" className="h-full w-full">
                <line x1="20" y1="8" x2="104" y2="8" stroke="#07518D" strokeOpacity="0.22" strokeWidth="1" />
                <line x1="104" y1="8" x2="104" y2="92" stroke="#07518D" strokeOpacity="0.22" strokeWidth="1" />
                <line x1="48" y1="20" x2="92" y2="20" stroke="#008577" strokeOpacity="0.45" strokeWidth="1.5" />
                <line x1="92" y1="20" x2="92" y2="64" stroke="#008577" strokeOpacity="0.45" strokeWidth="1.5" />
              </svg>
            </div>

            <div className="relative overflow-hidden rounded-sm border border-[#E9EEF2] bg-[#F5F7F9] aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[480px]">
              {!imgError ? (
                <img
                  src={SITE_CONFIG.assets.aboutInterior}
                  alt="Minimalist architectural interior of a modern corporate consultancy boardroom"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-[#F5F7F9] p-8 text-center">
                  <Building className="h-10 w-10 text-[#07518D]/50" strokeWidth={1.25} />
                  <p className="mt-3 font-display text-sm font-medium text-[#14283D]">
                    FINAPT Advisory Space
                  </p>
                </div>
              )}
            </div>

            {/* Subtle geometric proportion bar echoing the blue crest and ascending teal bars */}
            <div
              aria-hidden="true"
              className="mt-4 flex items-center gap-2"
            >
              <span className="h-[2.5px] w-16 bg-[#07518D]" />
              <span className="h-[2.5px] w-3 bg-[#008577]/45" />
              <span className="h-[2.5px] w-4 bg-[#008577]/65" />
              <span className="h-[2.5px] w-5 bg-[#008577]/85" />
              <span className="h-[2.5px] w-6 bg-[#008577]" />
              <span className="h-[1px] flex-1 bg-[#E9EEF2]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
