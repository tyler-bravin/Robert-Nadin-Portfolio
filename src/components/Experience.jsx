import { C } from "../theme.js";
import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";
import { EXPERIENCE } from "../data/experience.js";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-8 py-16" style={{ borderTop: `1px solid ${C.border}` }}>
      <SectionLabel>Experience & Education</SectionLabel>
      <div className="flex flex-col mt-4">
        {EXPERIENCE.map((e, i) => (
          <Reveal key={e.title} delay={i * 70}>
            <div
              className="py-6 grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-8 lg:gap-14 group"
              style={{ borderTop: i === 0 ? "none" : `1px solid ${C.border}` }}
            >
              <p className="text-sm font-medium" style={{ color: C.gold, fontFamily: "'Space Grotesk', sans-serif" }}>{e.range}</p>
              <div>
                <h4 className="font-display font-semibold text-base sm:text-lg transition-colors" style={{ color: C.text }}>{e.title}</h4>
                <p className="text-sm mb-2" style={{ color: C.accent }}>{e.org}</p>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{e.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
