interface FinaptLogoProps {
  variant?: 'default' | 'inverted';
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'stacked';
  className?: string;
}

/**
 * Faithful vector rendering of the official FINAPT emblem and wordmark:
 * - Sweeping corporate blue (#07518D) stylized "F" crest and inner arch
 * - Four ascending teal-green (#008577) vertical growth bars with curved lower-right contour
 * - Bold geometric FINAPT wordmark
 *
 * Supports horizontal lockup (Navbar / Footer) and iconic stacked lockup (Loading Screen).
 */
export function FinaptLogo({
  variant = 'default',
  size = 'md',
  layout = 'horizontal',
  className = '',
}: FinaptLogoProps) {
  // Exact brand hex values on light surfaces; optically compensated tones on deep navy (#14283D)
  const blueColor = variant === 'inverted' ? '#2F8EE0' : '#07518D';
  const tealColor = variant === 'inverted' ? '#12A695' : '#008577';
  const wordmarkColor = variant === 'inverted' ? '#FFFFFF' : '#07518D';

  const horizontalIconSizes = {
    sm: { w: 28, h: 32 },
    md: { w: 34, h: 39 },
    lg: { w: 46, h: 52 },
  };

  const stackedIconSizes = {
    sm: { w: 48, h: 54 },
    md: { w: 68, h: 77 },
    lg: { w: 84, h: 95 },
  };

  const horizontalTextSizes = {
    sm: 'text-[1.15rem] tracking-[0.09em]',
    md: 'text-[1.42rem] tracking-[0.09em]',
    lg: 'text-[1.95rem] tracking-[0.09em]',
  };

  const stackedTextSizes = {
    sm: 'text-[1.25rem] tracking-[0.14em]',
    md: 'text-[1.85rem] tracking-[0.14em]',
    lg: 'text-[2.25rem] tracking-[0.14em]',
  };

  const iconDims =
    layout === 'stacked' ? stackedIconSizes[size] : horizontalIconSizes[size];
  const textClass =
    layout === 'stacked' ? stackedTextSizes[size] : horizontalTextSizes[size];

  return (
    <span
      className={`inline-flex whitespace-nowrap shrink-0 select-none ${
        layout === 'stacked'
          ? 'flex-col items-center gap-3'
          : 'flex-row items-center gap-2.5'
      } ${className}`}
      aria-label="FINAPT"
    >
      <svg
        width={iconDims.w}
        height={iconDims.h}
        viewBox="0 0 116 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Bar 1 (Teal — shortest, flat top & bottom) */}
        <path
          d="M 33 95.5 H 44 V 124 H 33 Z"
          fill={tealColor}
        />

        {/* Bar 2 (Teal — medium, flat top & bottom) */}
        <path
          d="M 49 84.5 H 60 V 124 H 49 Z"
          fill={tealColor}
        />

        {/* Bar 3 (Teal — tall, flush diagonal join beneath middle blue arch, curved base) */}
        <path
          d="M 65 74 L 76.5 59 H 77 V 119.5 C 73 121.8, 69 123.3, 65 124 Z"
          fill={tealColor}
        />

        {/* Bar 4 (Teal — tallest, rising beneath upper blue wave, sweeping lower-right contour) */}
        <path
          d="M 82 47 L 95 45 V 95 C 95 105.5, 89.5 113, 82 116.8 Z"
          fill={tealColor}
        />

        {/* Stylized Corporate Blue "F" Wave Crest, Vertical Spine & Middle Arch */}
        <path
          d="M 14 124
             C 12.5 100, 12 72, 12 52
             C 12 31, 24 21, 49 17.5
             C 73 14, 92 9.5, 108 3
             C 106.5 24, 93.5 37.5, 72 42
             C 45.5 47.5, 30 55.5, 25 76
             C 23.6 81.8, 23 87.5, 23.4 91.5
             C 30.5 73.5, 47 62, 76.6 59
             L 65.4 74.8
             C 46.5 76.8, 33.5 87.5, 24.5 110.5
             C 21.5 118, 18.2 122.2, 14 124 Z"
          fill={blueColor}
        />
      </svg>

      <span
        className={`font-display font-extrabold leading-none ${textClass}`}
        style={{ color: wordmarkColor }}
      >
        FINAPT
      </span>
    </span>
  );
}
