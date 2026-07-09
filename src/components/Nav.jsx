import { useState } from "react";
import { C } from "../theme.js";
import Avatar from "./Avatar.jsx";

const NAV_LINKS = [
  ["about", "About"],
  ["work", "Work"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "rgba(16,18,21,0.85)", backdropFilter: "blur(6px)", borderBottom: `1px solid ${C.border}` }}
    >
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <button onClick={() => go("top")} className="flex items-center gap-2.5">
          <Avatar size={30} />
          <span className="font-semibold text-base tracking-tight hidden xs:inline" style={{ fontFamily: "'Space Grotesk', sans-serif", color: C.text }}>
            Robert Nadin
          </span>
        </button>
        <div className="hidden sm:flex items-center gap-8">
          {NAV_LINKS.map(([id, label]) => (
            <button key={id} onClick={() => go(id)} className="text-sm hover:opacity-70 transition-opacity" style={{ color: C.muted }}>
              {label}
            </button>
          ))}
          <a
            href="mailto:robertjnadin10@icloud.com"
            className="text-sm px-4 py-2 rounded-full transition-opacity hover:opacity-85"
            style={{ backgroundColor: C.accent, color: "#fff" }}
          >
            Get in touch
          </a>
        </div>
        <button className="sm:hidden text-sm" style={{ color: C.text }} onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="sm:hidden px-6 pb-5 flex flex-col gap-4" style={{ borderTop: `1px solid ${C.border}` }}>
          {NAV_LINKS.map(([id, label]) => (
            <button key={id} onClick={() => go(id)} className="text-sm text-left pt-3" style={{ color: C.muted }}>
              {label}
            </button>
          ))}
          <a href="mailto:robertjnadin10@icloud.com" className="text-sm" style={{ color: C.accent }}>
            robertjnadin10@icloud.com
          </a>
        </div>
      )}
    </div>
  );
}
