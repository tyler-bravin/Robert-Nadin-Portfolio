import { useEffect, useRef, useState } from "react";

// Splits a stat like "3+ yrs" or "First" into an optional numeric part to
// animate, plus a prefix/suffix that stays static (e.g. "First" won't count).
export default function AnimatedNumber({ value, duration = 900 }) {
  const match = value.match(/^(\d+)(.*)$/);
  const [ref, setRef] = useState(null);
  const [display, setDisplay] = useState(match ? "0" + match[2] : value);
  const started = useRef(false);

  useEffect(() => {
    if (!ref || !match) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const target = parseInt(match[1], 10);
          const suffix = match[2];
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(Math.round(eased * target) + suffix);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(ref);
    return () => obs.disconnect();
  }, [ref, match, duration]);

  return <span ref={setRef}>{display}</span>;
}
