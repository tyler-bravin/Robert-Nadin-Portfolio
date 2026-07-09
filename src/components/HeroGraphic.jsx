import { C } from "../theme.js";

export default function HeroGraphic() {
  const nodes = [
    [70, 40], [180, 20], [250, 90], [150, 130], [40, 130], [210, 190], [90, 210],
  ];
  const edges = [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [4, 0], [3, 5], [4, 6], [5, 6]];
  return (
    <svg viewBox="0 0 280 240" className="w-full h-auto max-w-[320px]" role="img" aria-label="Abstract network diagram">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          className="hero-edge"
          x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          stroke={C.border} strokeWidth="1.5"
          strokeDasharray="1 7"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x} cy={y}
          r={i === 3 ? 10 : 6}
          fill={i === 3 ? C.accent : i % 3 === 0 ? C.gold : C.bg}
          stroke={i % 3 === 0 || i === 3 ? "none" : C.accent}
          strokeWidth="1.6"
        />
      ))}
    </svg>
  );
}
