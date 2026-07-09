import { useState, useEffect } from "react";

export default function Reveal({ children, delay = 0 }) {
  const [ref, setRef] = useState(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShown(true),
      { threshold: 0.15 }
    );
    obs.observe(ref);
    return () => obs.disconnect();
  }, [ref]);

  return (
    <div
      ref={setRef}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(14px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
