import { C } from "../theme.js";
import Reveal from "./Reveal.jsx";
import HeroGraphic from "./HeroGraphic.jsx";

export default function Hero() {
  return (
    <section id="top" className="relative px-6 sm:px-8 pt-32 sm:pt-36 pb-16 overflow-hidden">
      {/* Ambient background glow — purely decorative, sits behind content */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="glow-blob absolute -top-24 left-[6%] w-[380px] h-[380px] rounded-full blur-[110px]"
          style={{ backgroundColor: C.accent, opacity: 0.14 }}
        />
        <div
          className="glow-blob-alt absolute top-10 right-[4%] w-[320px] h-[320px] rounded-full blur-[100px]"
          style={{ backgroundColor: C.gold, opacity: 0.1 }}
        />
      </div>

      <div className="relative max-w-5xl xl:max-w-6xl mx-auto grid md:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
        <Reveal>
          <p className="text-sm font-medium mb-5 flex items-center gap-2" style={{ color: C.accent, fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="w-1.5 h-1.5 rounded-full hero-node-pulse" style={{ backgroundColor: C.gold }} />
            Falkirk, Scotland
          </p>
          <h1
            className="font-display font-semibold leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.4rem)", color: C.text }}
          >
            Software developer,<br />graduated with<br />
            <span style={{ color: C.accent }}>First Class Honours.</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-xl mb-9" style={{ color: C.muted }}>
            I've just graduated with a First Class BSc (Hons) in Software
            Development with Cyber Security from the University of Stirling.
            I like building things people can actually use — from secure
            application design to interfaces that hold up to real usability
            testing.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              className="group text-sm font-medium px-5 py-3 rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5 flex items-center gap-2"
              style={{ backgroundColor: C.accent, color: "#fff" }}
            >
              See my work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
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
        </Reveal>
        <Reveal delay={120}>
          <div className="hidden md:block">
            <HeroGraphic />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
