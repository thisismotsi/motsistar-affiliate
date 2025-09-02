"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "@headlessui/react";
import { Grid, Hammer, BookOpen, Package } from "lucide-react";

// Main navigation links
const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/promotions", label: "Promotions" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
];

// Subdomain-style apps (can be converted to path-based if needed)
const subdomains = [
  { name: "Tools", url: "https://motsistar.com", icon: Hammer },
  { name: "Courses", url: "https://motsistar.com", icon: BookOpen },
  { name: "Gear", url: "https://motsistar.com", icon: Package },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" width={120} height={28} alt="MOTSISTAR" priority />
        </Link>

        {/* Apps Grid Menu (ALWAYS visible on desktop) */}
        <Menu as="div" className="relative hidden md:block">
          <Menu.Button className="p-2 rounded-full hover:bg-white/10">
            <Grid className="w-6 h-6 text-white" />
          </Menu.Button>
          <Menu.Items
            className="
              absolute mt-3 max-h-[70vh] w-[90vw] sm:w-80 overflow-y-auto
              rounded-2xl bg-black/95 shadow-lg border border-white/10 p-4
              grid grid-cols-3 gap-4
              right-0 sm:left-1/2 sm:-translate-x-1/2
            "
          >
            {subdomains.map((app) => (
              <Menu.Item key={app.name}>
                {({ active }) => (
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center gap-2 rounded-lg p-3 text-sm ${
                      active ? "bg-white/10" : ""
                    }`}
                  >
                    <app.icon className="w-6 h-6 text-brand-neon" />
                    <span className="text-center">{app.name}</span>
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>

        {/* Main Navigation Links */}
        <nav className="hidden md:flex items-center gap-4">
          {mainLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-2 text-sm hover:bg-white/10"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger (toggles main links only) */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Nav (main links only) */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/90">
          <div className="flex flex-col p-3 space-y-2">
            {mainLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm hover:bg-white/10"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
