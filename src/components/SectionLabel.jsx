import { C } from "../theme.js";

export default function SectionLabel({ children }) {
  return (
    <p className="text-sm font-medium mb-3 tracking-wide" style={{ color: C.accent }}>
      {children}
    </p>
  );
}
