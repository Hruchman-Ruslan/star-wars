import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

// Fonts
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// Metadata to all project
export const metadata: Metadata = {
  title: "Star Wars",
  description:
    "Web application that will allow users to view a list of Star Wars characters.",
};

// Root layout for the project
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
