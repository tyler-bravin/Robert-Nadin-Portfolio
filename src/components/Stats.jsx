import { C } from "../theme.js";
import Reveal from "./Reveal.jsx";
import AnimatedNumber from "./AnimatedNumber.jsx";

const STATS = [
  ["First", "Class Honours"],
  ["2026", "Graduated"],
  ["3+ yrs", "Retail & customer service"],
  ["2", "Shipped projects"],
];

export default function Stats() {
  return (
    <section className="max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-8 pb-16">
      <Reveal>
        <div
          className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${C.border}`, boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
        >
          {STATS.map(([big, small], i) => (
            <div
              key={big}
              className="px-5 py-6 text-center sm:text-left transition-colors hover:brightness-110"
              style={{
                borderLeft: i % 2 !== 0 || i === 2 ? `1px solid ${C.border}` : "none",
                borderTop: i >= 2 ? `1px solid ${C.border}` : "none",
                backgroundColor: i === 0 ? C.accentSoft : C.panel,
              }}
            >
              <p className="font-display font-semibold text-xl sm:text-2xl" style={{ color: i === 0 ? C.accent : C.text }}>
                <AnimatedNumber value={big} />
              </p>
              <p className="text-xs mt-1" style={{ color: C.muted }}>{small}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
