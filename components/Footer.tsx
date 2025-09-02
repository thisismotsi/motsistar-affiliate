import Link from "next/link";

const links = [
  { href: "/about", label: "About us" },
  { href: "/terms", label: "Terms & Policy" },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/70">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MOTSISTAR. All rights reserved.</p>
          <p>
          Contact us at <a className="underline" href="mailto:info@motsistar.com">info@motsistar.com</a>.
        </p>
        {/* Main Navigation Links */}
                  {links.map((l) => (
                    <Link
                    key={l.href}
                    href={l.href}
                    >
                      <p>
                      {l.label}
                </p>
                </Link>
                  ))}
          <p>
            As an Affiliate Platform we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  );
}
