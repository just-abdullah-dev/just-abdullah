import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SITE, SITE_URL } from "@/lib/site";
import { buildMetadata, personJsonLd, websiteJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata({ path: "/" }),
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.brand,
  category: "technology",
  applicationName: SITE.brand,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-stone text-ink antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <JsonLd data={personJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        {children}
        <Toaster
          toastOptions={{
            style: {
              background: "#0C1222",
              color: "#fff",
              borderRadius: "999px",
            },
          }}
        />
        <SpeedInsights />
        <Analytics />
        <GoogleAnalytics gaId="G-P0R1X8KP4S" />
      </body>
    </html>
  );
}
