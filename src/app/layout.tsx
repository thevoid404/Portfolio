import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashraf Uddin Anas — Full Stack Developer",
  description:
    "Portfolio of Ashraf Uddin Anas. Full stack developer building scalable, modern, high-performance web applications with exceptional user experiences.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Ashraf Uddin Anas" }],
  openGraph: {
    title: "Ashraf Uddin Anas — Full Stack Developer",
    description:
      "I build scalable, modern, high-performance web applications with exceptional user experiences.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-charcoal-950 font-sans text-foreground antialiased">
        <SmoothScrollProvider>
          <AmbientBackground />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
