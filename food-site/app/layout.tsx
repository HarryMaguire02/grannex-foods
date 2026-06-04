import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import ScrollHeader from "./components/header/ScrollHeader";
import Footer from "./components/footer/Footer";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://grannexfoods.com'),
  title: "GrannexFoods — Quality Food Ingredients & Commodities",
  description: "GrannexFoods is a leading supplier of quality food ingredients and agricultural commodities. We deliver proteins, starches, sweeteners, oils, and more to businesses worldwide.",
  keywords: ["food ingredients", "agricultural commodities", "proteins", "starches", "sweeteners", "vegetable oils", "food supply"],
  authors: [{ name: "GrannexFoods" }],
  openGraph: {
    title: "GrannexFoods — Quality Food Ingredients & Commodities",
    description: "Quality food ingredients and agricultural commodities, delivered globally. Leading supplier of proteins, starches, sweeteners, and oils.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: '/logo-sharing.png',
        width: 1225,
        height: 560,
        alt: 'GrannexFoods',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrannexFoods — Quality Food Ingredients & Commodities',
    description: 'Quality food ingredients and agricultural commodities, delivered globally.',
    images: ['/logo-sharing.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GrannexFoods',
  description: 'Leading supplier of quality food ingredients and agricultural commodities.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://grannexfoods.com',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://grannexfoods.com'}/grannexFoodsLogo.svg`,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['English'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${roboto.variable} antialiased flex flex-col min-h-full`}>
        <ScrollHeader />
        <main className="pt-16 md:pt-20 grow">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
