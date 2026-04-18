import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";
import { Shell } from "@/components/layout/shell";
import { site } from "@/lib/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Puppies in ${site.city} | ${site.name}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "puppies in Lucknow",
    "buy puppy Lucknow",
    "pet shop Lucknow",
    "dog breeder Lucknow",
    "Labrador puppy Lucknow",
    "Golden Retriever puppy Lucknow",
  ],
  alternates: {
    canonical: site.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `Healthy Puppies in ${site.city} | ${site.name}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Puppies in ${site.city} | ${site.name}`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
