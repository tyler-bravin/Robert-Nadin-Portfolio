import { C } from "../theme.js";

export default function Footer() {
  return (
    <footer className="max-w-5xl xl:max-w-6xl mx-auto px-6 sm:px-8 py-8 text-center">
      <p className="text-xs" style={{ color: C.muted }}>
        © {new Date().getFullYear()} Robert Nadin
      </p>
      <p className="text-xs mt-1.5" style={{ color: C.muted }}>
        Website designed by{" "}
        <a
          href="https://github.com/tyler-bravin"
          target="_blank"
          rel="noreferrer"
          className="font-semibold transition-colors hover:opacity-80"
          style={{ color: C.gold }}
        >
          Tyler Bravin
        </a>
      </p>
    </footer>
  );
}
