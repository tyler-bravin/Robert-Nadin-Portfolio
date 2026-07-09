import { C } from "../theme.js";

export default function Avatar({ size = 44 }) {
  return (
    <div
      className="flex items-center justify-center rounded-full font-display font-semibold shrink-0"
      style={{ width: size, height: size, backgroundColor: C.accent, color: "#fff", fontSize: size * 0.36 }}
    >
      RN
    </div>
  );
}
