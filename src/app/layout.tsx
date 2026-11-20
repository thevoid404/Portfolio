import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
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
  title: "Ashraf Uddin Anas — Full Stack & Applied AI Engineer",
  description:
    "Portfolio of Ashraf Uddin Anas. Full Stack & Applied AI Engineer building scalable web systems and agentic AI workflows with Next.js, NestJS, and LangGraph.",
  keywords: [
    "Ashraf Uddin Anas",
    "Full Stack Engineer",
    "Applied AI Engineer",
    "Next.js",
    "NestJS",
    "LangGraph",
    "LangChain",
    "TypeScript",
    "Docker",
    "Portfolio",
  ],
  authors: [{ name: "Ashraf Uddin Anas" }],
  openGraph: {
    title: "Ashraf Uddin Anas — Full Stack & Applied AI Engineer",
    description:
      "Building scalable web systems and autonomous AI workflows with Next.js, NestJS, Redis, and LangGraph.",
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
      className={`${geistSans.variable} ${geistMono.variable} light`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-FOUC Theme Initialization Script (Defaults strictly to light mode) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("portfolio-theme");if(t==="dark"){document.documentElement.classList.add("dark");document.documentElement.classList.remove("light");}else{document.documentElement.classList.remove("dark");document.documentElement.classList.add("light");}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-emerald-500/20 selection:text-foreground">
        <ThemeProvider>
          <SmoothScrollProvider>
            <AmbientBackground />
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
