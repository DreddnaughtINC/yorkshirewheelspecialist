import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" aria-label="Go to homepage" className="inline-block">
      <Image
        src="/images/services/40caf1a0-a150-4712-8111-f68d2d61d6f5.jpeg"
        alt="Yorkshire Wheel Specialist Logo"
        width={150}   // adjust as needed
        height={150}  // adjust as needed
        priority      // ensures logo loads fast
      />
    </Link>
  );
}
