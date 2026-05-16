import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "./scroll-reveal";

export const metadata: Metadata = {
  title: "Custom Canines · Mobile Dog Grooming · Hernando · Citrus · Pasco",
  description:
    "Mobile dog grooming with Sabrina — comes to your door. Bath, breed cuts, nails, de-shed, ears, teeth. Serving Spring Hill, Brooksville, Hudson, New Port Richey, Crystal River.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-oat text-cocoa-800 font-sans antialiased">
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
