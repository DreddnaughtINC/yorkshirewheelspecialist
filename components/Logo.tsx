import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap = {
  sm: { width: 60, height: 60 },
  md: { width: 96, height: 96 },
  lg: { width: 150, height: 150 },
};

export default function Logo({ size = "sm", className = "" }: LogoProps) {
  const { width, height } = sizeMap[size] ?? sizeMap.sm;

  return (
    <Link href="/" aria-label="Go to homepage" className={`inline-block ${className}`}>
      <Image
        src="/images/services/logo-removebg-preview.png"
        alt="Yorkshire Wheel Specialist Logo"
        width={width}
        height={height}
        priority
        className="object-contain"
      />
    </Link>
  );
}
