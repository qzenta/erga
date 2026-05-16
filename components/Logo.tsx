import Image from "next/image";
import Link from "next/link";

type Props = {
  variant?: "default" | "footer";
  className?: string;
};

export default function Logo({ variant = "default", className = "" }: Props) {
  const isFooter = variant === "footer";

  return (
    <Link href="/" aria-label="Erga Properties home">
      <Image
        src="/erga_logo.png"
        alt="Erga Properties"
        width={isFooter ? 180 : 220}
        height={isFooter ? 40 : 48}
        priority={!isFooter}
        className={["w-auto", isFooter ? "h-10" : "h-9 md:h-12", className]
          .filter(Boolean)
          .join(" ")}
        style={isFooter ? { mixBlendMode: "lighten" } : undefined}
      />
    </Link>
  );
}
