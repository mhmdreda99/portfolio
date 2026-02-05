import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mohamed Reda | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 4+ years of experience building scalable, high-performance web applications. Expert in React, TypeScript, and modern component-based architectures.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Web Developer",
    "UI/UX",
    "Senior Developer",
    "Mohamed Reda",
  ],
  authors: [{ name: "Mohamed Reda Ibrahim" }],
  creator: "Mohamed Reda Ibrahim",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mohamed Reda | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer building scalable, high-performance web applications with React & TypeScript.",
    siteName: "Mohamed Reda Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Reda | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer building scalable, high-performance web applications with React & TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
