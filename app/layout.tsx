import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Matthew Brian Tahir — Decision Systems Engineer",
  description:
    "I design and validate decisions under uncertainty. Founder of the VFS Method — a structured protocol for high-stakes decision integrity.",
};

// app/layout.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
