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
    <html lang="en">
      <body className="antialiased selection:bg-studio-accent selection:text-studio-bg bg-studio-bg">
        {/* Global Navigation - Floats completely seamlessly over full-bleed components */}
        <Navbar />

        {/* Content canvas starts immediately at pixel 0, 0 */}
        <main className="w-full min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}