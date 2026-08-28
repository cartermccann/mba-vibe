import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";

import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-px-grotesk",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-apercu-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mindbodyathletes.com"),
  title: {
    default: "What if the mind was the missing rep? | Mind Body Athletes",
    template: "%s | Mind Body Athletes",
  },
  description:
    "Mind Body Athletes is an Athlete Wellness Initiative, giving coaches the science-backed tools and education to help athletes handle pressure, in the season and in life.",
  icons: {
    icon: "/icon.svg",
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
      className={`${instrumentSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
