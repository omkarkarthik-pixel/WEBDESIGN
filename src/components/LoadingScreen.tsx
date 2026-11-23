import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { FinaptLogo } from './FinaptLogo';
import { SITE_CONFIG } from '../config/siteConfig';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (!visible) {
      onComplete?.();
      return;
    }

    const timer = window.setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 1550);

    return () => window.clearTimeout(timer);
  }, [visible, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="finapt-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#14283D] px-6"
          aria-live="polite"
          aria-label="Loading FINAPT Management Consultancy LLP"
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <FinaptLogo variant="inverted" size="md" layout="stacked" />
            </motion.div>

            {/* Thin teal progress line beneath wordmark (compositor scaleX only) */}
            <div className="mt-7 h-[2px] w-48 overflow-hidden bg-white/12">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.05, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="h-full w-full origin-left bg-[#008577]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 font-display text-sm font-medium tracking-[0.04em] text-white/85 sm:text-[0.95rem]"
            >
              {SITE_CONFIG.tagline}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
