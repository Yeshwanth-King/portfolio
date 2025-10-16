import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Yeshwanth R - Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, React, Node.js, and AWS. Currently interning at Captain Side and building innovative web applications.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "AWS",
    "TypeScript",
  ],
  authors: [{ name: "Yeshwanth R" }],
  creator: "Yeshwanth R",
  openGraph: {
    title: "Yeshwanth R - Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, Node.js, and AWS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Scroll to top on page refresh and disable scroll restoration
              if (window.history.scrollRestoration) {
                window.history.scrollRestoration = 'manual';
              }
              
              // Force scroll to top on page load
              window.addEventListener('load', function() {
                window.scrollTo(0, 0);
              });
              
              // Also scroll to top immediately
              window.scrollTo(0, 0);
            `,
          }}
        />
      </body>
    </html>
  );
}
