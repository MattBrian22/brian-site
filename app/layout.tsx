import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VEC (VeritaPort Evidence & Control)",
  description:
    "A procedure that produces sealed, replayable records of what was checked against the source.",
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
