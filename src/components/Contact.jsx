import { C } from "../theme.js";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <section id="contact" className="relative max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-8 py-24 overflow-hidden" style={{ borderTop: `1px solid ${C.border}` }}>
      <div
        className="glow-blob absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[220px] rounded-full blur-[100px] pointer-events-none"
        style={{ backgroundColor: C.accent, opacity: 0.12 }}
        aria-hidden="true"
      />
      <Reveal>
        <div
          className="relative rounded-3xl p-8 sm:p-14 text-center"
          style={{ backgroundColor: C.accentSoft, border: `1px solid ${C.accent}30` }}
        >
          <h3 className="font-display font-semibold mb-4" style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", color: C.text }}>
            Let's talk about a role.
          </h3>
          <p className="text-base mb-8" style={{ color: C.muted }}>
            Open to graduate opportunities in software development and cyber security.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:robertjnadin10@icloud.com"
              className="text-sm font-medium px-5 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:opacity-90"
              style={{ backgroundColor: C.accent, color: C.bg }}
            >
              robertjnadin10@icloud.com
            </a>
            <a
              href="tel:+447516402679"
              className="text-sm font-medium px-5 py-3 rounded-full transition-all hover:-translate-y-0.5"
              style={{ border: `1px solid ${C.border}`, color: C.text }}
            >
              +44 7516 402 679
            </a>
            <a
              href="https://github.com/RobertNadin"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium px-5 py-3 rounded-full transition-all hover:-translate-y-0.5"
              style={{ border: `1px solid ${C.border}`, color: C.text }}
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
