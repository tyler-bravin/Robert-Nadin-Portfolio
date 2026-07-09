import { useRef } from "react";
import { C } from "../theme.js";
import Reveal from "./Reveal.jsx";
import Tag from "./Tag.jsx";
import SectionLabel from "./SectionLabel.jsx";
import { IconMap, IconCode } from "./Icons.jsx";
import { PROJECTS } from "../data/projects.js";

function ProjectCard({ p }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="group relative rounded-2xl p-6 sm:p-8 overflow-hidden transition-transform duration-300 hover:-translate-y-1"
      style={{
        border: `1px solid ${C.border}`,
        backgroundColor: p.featured ? C.panel : C.bgAlt,
        boxShadow: p.featured ? "0 8px 24px rgba(0,0,0,0.3)" : "none",
      }}
    >
      {/* Spotlight that follows the cursor — only visible on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), ${p.featured ? C.accent : C.gold}14, transparent 60%)`,
        }}
      />
      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div className="flex items-start gap-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: p.featured ? C.accentSoft : C.goldSoft }}
            >
              {p.featured ? <IconMap color={C.accent} /> : <IconCode color={C.gold} />}
            </div>
            <div>
              <h3 className="font-display font-semibold text-xl sm:text-2xl mb-1" style={{ color: C.text }}>
                {p.title}
              </h3>
              <p className="text-sm" style={{ color: C.muted }}>{p.period}</p>
            </div>
          </div>
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap transition-all hover:-translate-y-0.5"
            style={{ border: `1px solid ${C.border}`, color: C.text }}
          >
            View repo ↗
          </a>
        </div>
        <p className="text-base leading-relaxed mb-4" style={{ color: C.muted }}>
          {p.description}
        </p>
        {p.highlights.length > 0 && (
          <ul className="mb-4 space-y-1.5">
            {p.highlights.map((h) => (
              <li key={h} className="text-sm flex gap-2" style={{ color: C.text }}>
                <span style={{ color: C.accent }}>—</span>{h}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-8 py-16" style={{ borderTop: `1px solid ${C.border}` }}>
      <SectionLabel>Work</SectionLabel>
      <div className="flex flex-col gap-6 mt-4">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
