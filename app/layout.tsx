import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import 'leaflet/dist/leaflet.css'
import type { Metadata } from "next";
import React, { Suspense } from 'react';
import { Providers } from './providers'
import Header from "../app/src/components/Header/Header";
import Footer from "../app/src/components/Footer/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Disposable Bazaar",
  description: "Quality disposable products",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <Suspense fallback={null}>
            <Header />
          </Suspense>

          {children}

          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
