type Props = {
  className?: string;
};

/* Plain wordmark — interim treatment until a designed logo is ready */
export default function ErgoLogo({ className = "" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 48"
      aria-label="Erga"
      className={className}
      fill="none"
    >
      {/* Wordmark: ERGA */}
      <text
        x="0"
        y="32"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontWeight="700"
        fontSize="28"
        fill="#1B2A4A"
        letterSpacing="0.04em"
      >
        ERGA
      </text>

      {/* Gold accent line */}
      <rect x="2" y="40" width="46" height="2.5" fill="#9A7B2F" />
    </svg>
  );
}
