import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/poppins";

export const metadata: Metadata = {
  title: "Dhanashree S Hosalli — Portfolio",
  description: "Portfolio of Dhanashree S Hosalli with pastel pink & lavender theme.",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased font-poppins">
        {children}
      </body>
    </html>
  );
}
