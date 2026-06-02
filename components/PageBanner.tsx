import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href?: string };

type Props = {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  breadcrumbs?: Crumb[];
};

export default function PageBanner({
  title,
  subtitle,
  image,
  imageAlt,
  breadcrumbs,
}: Props) {
  return (
    <div
      className="relative w-full overflow-hidden flex flex-col justify-end"
      style={{ minHeight: "320px", paddingTop: "60px" }}
    >
      {/* Background: image or navy gradient fallback */}
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy/85" />
        </>
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(150deg, #1B2A4A 0%, #0D1829 100%)" }}
        />
      )}

      {/* Subtle grid overlay */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="pagebanner-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pagebanner-grid)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 pb-14 pt-8">
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-2 text-xs text-white/50 tracking-wide">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-white/30">/</span>
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-gold transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/70">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Gold eyebrow line */}
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-8 h-px bg-gold" />
          <span className="text-gold text-xs tracking-[0.25em] uppercase font-medium">Erga Properties</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-[56px] text-white font-bold leading-tight max-w-3xl tracking-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-white/65 text-base md:text-lg mt-4 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Gold underline */}
        <div className="mt-6 flex items-center gap-3">
          <span className="block w-16 h-0.5 bg-gold" />
          <span className="block w-4 h-0.5 bg-gold/40" />
        </div>
      </div>
    </div>
  );
}
