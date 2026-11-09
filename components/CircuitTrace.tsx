/* Faint gold circuit-trace accent (aria-hidden decoration).
   Paths carry pathLength=240 so the stroke-dasharray draw animation
   (under prefers-reduced-motion: no-preference) is uniform. */
export default function CircuitTrace({
  className = "",
  viewBox = "0 0 240 40",
}: {
  className?: string;
  viewBox?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      aria-hidden="true"
      className={`circuit-trace ${className}`.trim()}
    >
      <path
        d="M2 30h56l14-14h56l14 14h96"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={240}
      />
      <circle cx="72" cy="16" r="2.5" fill="currentColor" />
      <circle cx="142" cy="16" r="2.5" fill="currentColor" />
      <circle cx="238" cy="30" r="2.5" fill="currentColor" />
    </svg>
  );
}
