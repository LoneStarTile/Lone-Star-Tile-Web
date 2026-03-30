import { useEffect, useRef } from "react";

// How many copies of the item list to render.
// More copies = fills wider screens without gaps.
const COPIES = 8;

interface InfiniteStripProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  /** 1 = scroll left (default),  -1 = scroll right */
  direction?: 1 | -1;
  /** pixels per second */
  speed?: number;
  /** gap between cards in px */
  gap?: number;
  className?: string;
}

export function InfiniteStrip<T>({
  items,
  renderItem,
  direction = 1,
  speed = 60,
  gap = 16,
  className = "",
}: InfiniteStripProps<T>) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  // drag state
  const isDragging = useRef(false);
  const dragStartClientX = useRef(0);
  const dragStartPos = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = (time: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = time;

      if (!isDragging.current) {
        const dt = Math.min(time - lastTimeRef.current, 64);
        posRef.current -= direction * (speed * dt) / 1000;

        // One "period" = width of a single copy of the item list
        const period = track.scrollWidth / COPIES;
        if (period > 0) {
          while (posRef.current < -period) posRef.current += period;
          while (posRef.current >= 0) posRef.current -= period;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }

      lastTimeRef.current = time;
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [direction, speed]);

  // ── Touch handlers ──────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    dragStartClientX.current = e.touches[0].clientX;
    dragStartPos.current = posRef.current;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const dx = e.touches[0].clientX - dragStartClientX.current;
    const period = trackRef.current.scrollWidth / COPIES;
    let next = dragStartPos.current + dx;
    while (next < -period) next += period;
    while (next >= 0) next -= period;
    posRef.current = next;
    trackRef.current.style.transform = `translateX(${next}px)`;
  };

  const onTouchEnd = () => {
    isDragging.current = false;
    lastTimeRef.current = null;
  };

  // ── Mouse drag handlers (desktop) ────────────────────────
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartClientX.current = e.clientX;
    dragStartPos.current = posRef.current;
    window.addEventListener("mousemove", onWindowMouseMove);
    window.addEventListener("mouseup", onWindowMouseUp);
  };

  const onWindowMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const dx = e.clientX - dragStartClientX.current;
    const period = trackRef.current.scrollWidth / COPIES;
    let next = dragStartPos.current + dx;
    while (next < -period) next += period;
    while (next >= 0) next -= period;
    posRef.current = next;
    trackRef.current.style.transform = `translateX(${next}px)`;
  };

  const onWindowMouseUp = () => {
    isDragging.current = false;
    lastTimeRef.current = null;
    window.removeEventListener("mousemove", onWindowMouseMove);
    window.removeEventListener("mouseup", onWindowMouseUp);
  };

  // Render COPIES copies so content always overflows any screen width
  const allItems = Array.from({ length: COPIES }, () => items).flat();

  return (
    <div className={`w-full overflow-hidden select-none cursor-grab active:cursor-grabbing ${className}`}>
      <div
        ref={trackRef}
        className="flex will-change-transform"
        style={{ gap: `${gap}px` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
      >
        {allItems.map((item, i) => renderItem(item, i))}
      </div>
    </div>
  );
}
