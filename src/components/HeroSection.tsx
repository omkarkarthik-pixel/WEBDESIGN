import { useState } from 'react';
import { ArrowRight, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SITE_CONFIG } from '../config/siteConfig';

export function HeroSection() {
  const [imgError, setImgError] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-[72px]"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="grid min-h-[calc(100vh-140px)] grid-cols-1 items-stretch gap-10 py-14 lg:grid-cols-12 lg:gap-14 lg:py-20">
          {/* Left Editorial Column */}
          <div className="flex flex-col justify-center lg:col-span-6 lg:pr-4">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold tracking-[0.15em] text-[#07518D]"
            >
              <span>MANAGEMENT CONSULTANCY</span>
              <span className="text-[#008577]" aria-hidden="true">|</span>
              <span>FINANCIAL SERVICES</span>
            </motion.p>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-2xl font-display text-[clamp(2.25rem,4.1vw,3.7rem)] font-bold leading-[1.09] tracking-[-0.025em] text-[#14283D]"
            >
              Financial Clarity.
              <br />
              Strategic Direction.
              <br />
              <span className="text-[#07518D]">Sustainable Growth.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-[540px] text-[1.02rem] leading-[1.72] text-[#596675]"
            >
              Helping businesses make informed decisions through professional financial
              insight, management consultancy and practical business solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => scrollTo('expertise')}
                className="group inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-sm bg-[#07518D] px-6 py-3 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-[#053E6E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07518D]"
              >
                <span>Explore Our Expertise</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
                  strokeWidth={1.75}
                />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-medium text-[#14283D] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#07518D] hover:text-[#07518D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07518D]"
              >
                Connect With Us
              </button>
            </motion.div>

            {/* Quiet Institutional Footer Line inside Hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.48 }}
              className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#E9EEF2] pt-6 text-[0.84rem] text-[#596675]"
            >
              <span className="font-medium text-[#14283D]">FINAPT Management Consultancy LLP</span>
              <span className="text-[#CBD5E1]" aria-hidden="true">/</span>
              <span>India</span>
              <span className="text-[#008577]" aria-hidden="true">·</span>
              <span>Abu Dhabi, UAE</span>
            </motion.div>
          </div>

          {/* Right Architectural Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex lg:col-span-6"
          >
            <div className="relative w-full overflow-hidden rounded-sm border border-[#E9EEF2] bg-[#F5F7F9] aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[520px]">
              {!imgError ? (
                <img
                  src={SITE_CONFIG.assets.heroArchitecture}
                  alt="Contemporary glass and limestone corporate architecture representing FINAPT Management Consultancy"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#F5F7F9] to-[#E9EEF2] p-8 text-center">
                  <Building2 className="h-10 w-10 text-[#07518D]/60" strokeWidth={1.25} />
                  <p className="mt-3 font-display text-sm font-semibold text-[#14283D]">
                    FINAPT Corporate Architecture
                  </p>
                </div>
              )}

              {/* Subtle architectural hairline frame accents */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#07518D] via-[#07518D] to-[#008577]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
