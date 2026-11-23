import { Award, Globe, Landmark, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import { WHY_FINAPT_STRENGTHS } from '../config/siteConfig';

const STRENGTH_ICONS: Record<string, typeof Award> = {
  'experienced-leadership': Award,
  'financial-understanding': Landmark,
  'practical-approach': Wrench,
  'international-perspective': Globe,
};

export function WhyFinaptSection() {
  return (
    <section
      id="why-finapt"
      className="border-t border-[#E9EEF2] bg-white py-24 lg:py-32"
      aria-labelledby="why-finapt-heading"
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-[0.16em] text-[#008577] uppercase">
            Why FINAPT
          </p>
          <h2
            id="why-finapt-heading"
            className="mt-4 font-display text-[clamp(1.85rem,3.1vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[#14283D]"
          >
            Why Businesses Work With FINAPT.
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_FINAPT_STRENGTHS.map((strength, index) => {
            const Icon = STRENGTH_ICONS[strength.id] ?? Award;
            return (
              <motion.div
                key={strength.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col justify-between rounded-sm border border-[#E9EEF2] bg-[#FAFBFD] p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#07518D]/35 hover:bg-white"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-bold tabular-nums text-[#008577]">
                      {strength.number}
                    </span>
                    <Icon
                      className="h-5 w-5 text-[#07518D] transition-colors duration-150 group-hover:text-[#008577]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-6 font-display text-[1.15rem] font-semibold leading-snug text-[#14283D]">
                    {strength.title}
                  </h3>

                  <p className="mt-3 text-[0.92rem] leading-[1.68] text-[#596675]">
                    {strength.description}
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className="mt-7 h-[1.5px] w-8 bg-[#E9EEF2] transition-all duration-200 group-hover:w-14 group-hover:bg-[#008577]"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
