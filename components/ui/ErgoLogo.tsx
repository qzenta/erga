type Props = {
  className?: string;
};

export default function ErgoLogo({ className = "" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 48"
      aria-label="Erga Properties"
      className={className}
      fill="none"
    >
      {/* Building icon — two rectangles, taller on right */}
      <rect x="2" y="20" width="12" height="22" stroke="#9A7B2F" strokeWidth="1.5" />
      <rect x="16" y="10" width="14" height="32" stroke="#9A7B2F" strokeWidth="1.5" />

      {/* Wordmark: ERGA */}
      <text
        x="36"
        y="32"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontWeight="700"
        fontSize="24"
        fill="#1B2A4A"
        letterSpacing="0.04em"
      >
        ERGA
      </text>

      {/* Tagline: PROPERTIES */}
      <text
        x="37"
        y="44"
        fontFamily="'DM Sans', sans-serif"
        fontWeight="400"
        fontSize="8.5"
        fill="#1B2A4A"
        letterSpacing="0.2em"
      >
        PROPERTIES
      </text>
    </svg>
  );
}
