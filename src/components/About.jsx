import { C } from "../theme.js";
import Reveal from "./Reveal.jsx";
import Tag from "./Tag.jsx";
import SectionLabel from "./SectionLabel.jsx";

const SKILLS = ["Java", "Python", "JavaScript", "SQL", "HTML/CSS", "Bootstrap", "Leaflet", "Git"];

export default function About() {
  return (
    <section id="about" className="py-16" style={{ borderTop: `1px solid ${C.border}`, backgroundColor: C.bgAlt }}>
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-10 lg:gap-16">
            <SectionLabel>About</SectionLabel>
            <div>
              <p className="text-base leading-relaxed mb-6" style={{ color: C.text }}>
                My dissertation looked at how digital tools can preserve local memory
                of places that no longer exist in their original form — which taught
                me as much about talking to real users as it did about code. Outside
                my degree, three years behind a counter at Cineworld sharpened the
                same instincts: stay calm under pressure, fix the process, and don't
                let quality slip when things get busy.
              </p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
