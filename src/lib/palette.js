export const palette = [
  { bg: "#6C5CE7", ink: "#ffffff", name: "violet" },
  { bg: "#F0A202", ink: "#1a1a1a", name: "amber" },
  { bg: "#EF5B5B", ink: "#ffffff", name: "coral" },
  { bg: "#3FA796", ink: "#ffffff", name: "teal" },
  { bg: "#2E2E33", ink: "#ffffff", name: "charcoal" },
  { bg: "#D4C04C", ink: "#1a1a1a", name: "gold" },
];

export function colorFor(i) {
  return palette[i % palette.length];
}
