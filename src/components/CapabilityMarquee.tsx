import { MARQUEE_ITEMS } from '../config/siteConfig';

export function CapabilityMarquee() {
  // Duplicate items twice so translateX(-50%) loops seamlessly across all viewport widths
  const trackItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="w-full overflow-hidden border-y border-[#E9EEF2] bg-[#F5F7F9] py-4 select-none"
      aria-label="Core consultancy capabilities"
    >
      <div className="animate-finapt-marquee flex items-center">
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            aria-hidden={groupIndex === 1}
            className="flex shrink-0 items-center"
          >
            {trackItems.map((item, idx) => (
              <div key={`${groupIndex}-${idx}`} className="flex items-center">
                <span className="px-6 font-display text-[0.78rem] font-semibold tracking-[0.18em] text-[#07518D] whitespace-nowrap sm:px-8 sm:text-[0.82rem]">
                  {item}
                </span>
                <span
                  aria-hidden="true"
                  className="text-sm text-[#008577]"
                >
                  ✦
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
