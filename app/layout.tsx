import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? "Vaame Waitlist";
const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
  "Quick Waitlist and coming soon page for your SAAS and website.";

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/vaame.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} bg-gradient-to-b from-[#0E0C15]  to-[#0E0C15]`}>
        <main className="flex justify-center items-center min-h-screen">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
