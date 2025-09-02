// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteName = "Motsistar";
const baseUrl = "https://motsistar.com";
const defaultDesc =
  "Motsistar curates the best tools, gear, and learning resources — honest picks we’d use ourselves.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteName,
    template: `%s — ${siteName}`,
  },
  description: defaultDesc,
  applicationName: siteName,
  openGraph: {
    type: "website",
    siteName,
    title: siteName,
    description: defaultDesc,
    url: baseUrl,
    images: [
      {
        url: "/og-image-1200x630.png", // ✅ use the new OG image
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDesc,
    images: ["/og-image-1200x630.png"], // ✅ same here
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest", // ✅ optional, if you add PWA
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect for speed */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="bg-bg text-fg font-body antialiased">
        {/* Accessibility: skip link */}
        <a href="#main" className="sr-only focus:not-sr-only focus:p-3">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />

        {/* ✅ Plausible Analytics */}
        <script
          defer
          data-domain="motsistar.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </body>
    </html>
  );
}
