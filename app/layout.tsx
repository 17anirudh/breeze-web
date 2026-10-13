import type { Metadata } from "next";
import { Geist_Mono, Nobile, } from "next/font/google";
import "@/styles/globals.css";
import { ViewTransition } from "react";
import Navbar from "@/components/navbar";

const nobileSans = Nobile({
  variable: "--font-sans",
  display: "swap",
  weight: "400"
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Breeze",
  description: "Minimal skills for code sprints",
  icons: [{ url: '/logo.webp', sizes: '48x40', type: 'image/webp' }]
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nobileSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <ViewTransition default="auto" enter="fade" exit="fade">
          <Navbar />
          <main className="w-full min-h-screen flex flex-col center gap-6">
            {children}
          </main>
        </ViewTransition>
      </body>
    </html>
  );
}
