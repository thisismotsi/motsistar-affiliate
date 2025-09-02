import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function AffiliateLink({ href, className, children }: Props) {
  return (
    <Link
      href={href}
      className={className}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
    >
      {children}
    </Link>
  );
}
