'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import AnimateIn from '@/app/components/ui/AnimateIn';

const GAP = 16;
const CLONE_COUNT = 3;
const INTERVAL_MS = 3500;

interface PackagingVariant {
  size: string;
  netWeight: string;
  unitsPerCarton: string;
  bestFor: string;
  image?: string;
}

interface PackagingOption {
  format: string;
  image?: string;
  variants: PackagingVariant[];
}

interface FlatVariant extends PackagingVariant {
  format: string;
}

interface ProductPackagingSectionProps {
  packaging: PackagingOption[];
  shelfLife?: string;
}

function LeaderRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-1">
      <span className="text-xs text-primary/50 shrink-0">{label}</span>
      <span className="flex-1 border-b border-dotted border-primary/20 mb-[3px]" />
      <span className="text-xs font-medium text-primary shrink-0 text-right">{value}</span>
    </div>
  );
}

function PackagingCard({
  variant,
  shelfLife,
  style,
  className = '',
}: {
  variant: FlatVariant;
  shelfLife?: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      style={style}
      className={`flex-none rounded-xl border border-secondary bg-white overflow-hidden flex flex-col ${className}`}
    >
      <div className="relative w-full aspect-[5/2] bg-secondary/20 flex-shrink-0 overflow-hidden">
        {variant.image ? (
          <Image
            src={variant.image}
            alt={`${variant.size} ${variant.format}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-secondary/30" />
        )}
        <span className="absolute bottom-2 left-2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          {variant.size.replace(' ', '')}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-2.5 flex-1">
        <p className="text-sm font-bold text-primary">{variant.format}</p>
        <div className="flex flex-col gap-1.5">
          <LeaderRow label="Net Weight" value={variant.netWeight} />
          <LeaderRow label="Units per Carton" value={variant.unitsPerCarton} />
          {shelfLife && <LeaderRow label="Shelf Life" value={shelfLife} />}
          <LeaderRow label="Best For" value={variant.bestFor} />
        </div>
      </div>
    </div>
  );
}

export default function ProductPackagingSection({
  packaging,
  shelfLife,
}: ProductPackagingSectionProps) {
  const allVariants: FlatVariant[] = packaging.flatMap((opt) =>
    opt.variants.map((v) => ({ ...v, format: opt.format }))
  );
  const total = allVariants.length;

  // Start at CLONE_COUNT so the first visible cards are the real first cards
  const [index, setIndex] = useState(CLONE_COUNT);
  const [animated, setAnimated] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const indexRef = useRef(index);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const needsCarousel = total > visibleCount;

  // Extended list: [last CLONE_COUNT items] + [all items] + [first CLONE_COUNT items]
  const extended = needsCarousel
    ? [
        ...allVariants.slice(-CLONE_COUNT),
        ...allVariants,
        ...allVariants.slice(0, CLONE_COUNT),
      ]
    : allVariants;

  // Keep a ref in sync with state to avoid stale closures in event handlers
  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  // Compute card width + visible count whenever the container resizes
  useEffect(() => {
    const compute = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      const cols = w < 540 ? 1 : w < 900 ? 2 : 3;
      setVisibleCount(cols);
      setCardWidth((w - (cols - 1) * GAP) / cols);
    };
    compute();
    const ro = new ResizeObserver(compute);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // When we switch off animation (after a clone-jump), re-enable it next paint
  useEffect(() => {
    if (!animated) {
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimated(true))
      );
    }
  }, [animated]);

  // Auto-play: advance one card every INTERVAL_MS
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!needsCarousel) return;
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
      setAnimated(true);
    }, INTERVAL_MS);
  }, [needsCarousel]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoPlay]);

  // After the CSS transition ends, snap back to the real position if we landed in a clone
  const handleTransitionEnd = () => {
    const idx = indexRef.current;
    if (idx >= CLONE_COUNT + total) {
      // Slid into end clones → jump to corresponding real position
      setAnimated(false);
      setIndex(CLONE_COUNT + (idx - CLONE_COUNT - total));
    } else if (idx < CLONE_COUNT) {
      // Slid into start clones → jump to corresponding real position
      setAnimated(false);
      setIndex(CLONE_COUNT + total - (CLONE_COUNT - idx));
    }
  };

  const handleMouseEnter = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const handleMouseLeave = useCallback(() => {
    startAutoPlay();
  }, [startAutoPlay]);

  const handleDotClick = useCallback((dotIndex: number) => {
    startAutoPlay();
    setAnimated(true);
    setIndex(CLONE_COUNT + dotIndex);
  }, [startAutoPlay]);

  const realIndex = ((index - CLONE_COUNT) % total + total) % total;
  const translateX = cardWidth > 0 ? -(index * (cardWidth + GAP)) : 0;

  return (
    <section className="bg-secondary/20 border-y border-secondary py-10 lg:py-14">
      <div className="max-w-content mx-auto px-6 sm:px-8 lg:px-12">
        <AnimateIn from="bottom">
          <p className="text-xs font-semibold uppercase tracking-widest text-green-medium mb-2">
            Packaging &amp; Supply
          </p>
          <h2 className="text-3xl font-bold text-primary mb-8">
            Every format your business needs
          </h2>
        </AnimateIn>

        {needsCarousel ? (
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Clipping container */}
            <div className="overflow-hidden" ref={containerRef}>
              {/* Sliding track */}
              <div
                className="flex gap-4"
                style={{
                  transform: `translateX(${translateX}px)`,
                  transition: animated ? 'transform 500ms ease' : 'none',
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extended.map((variant, i) => (
                  <PackagingCard
                    key={`${i}-${variant.format}-${variant.size}`}
                    variant={variant}
                    shelfLife={shelfLife}
                    style={{ width: cardWidth > 0 ? `${cardWidth}px` : undefined }}
                    className={cardWidth === 0 ? 'w-full' : ''}
                  />
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center items-center gap-2 mt-5">
              {allVariants.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    i === realIndex
                      ? 'bg-primary'
                      : 'bg-primary/25 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Static grid for ≤3 variants */
          <div className="flex flex-wrap justify-center gap-4">
            {allVariants.map((variant) => (
              <PackagingCard
                key={`${variant.format}-${variant.size}`}
                variant={variant}
                shelfLife={shelfLife}
                className="w-full sm:w-[300px]"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
