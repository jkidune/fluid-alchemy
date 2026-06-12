import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "FLUID ALCHEMY — Premium Mixology Portfolio",
  description: "Structural liquid alchemy, flavor profiling, and drink design portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0B0B0C] text-[#FCFCFC] overflow-x-hidden">
        {/* Global Reactive Floating Navigation Header */}
        <Navbar />

        {/* Content canvas starts cleanly from pixel 0, 0 without structural barriers */}
        <main className="w-full">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}