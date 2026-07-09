import { C } from "../theme.js";

export default function Tag({ children }) {
  return (
    <span
      className="text-xs px-2.5 py-1 rounded-full transition-colors hover:border-opacity-80"
      style={{ backgroundColor: C.bg, color: C.muted, border: `1px solid ${C.border}`, fontFamily: "'Inter', sans-serif" }}
    >
      {children}
    </span>
  );
}
