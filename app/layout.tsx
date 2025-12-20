import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import {
  baseURL,
  description,
  googleSiteVerification,
  siteName,
  title,
} from '~/shared/config/env-config';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: baseURL,
  },
  metadataBase: new URL(baseURL),
  openGraph: {
    title,
    description,
    siteName,
    url: baseURL,
    images: [
      {
        url: '/og-image.png',
        alt: `${siteName} Open Graph Image`,
      },
    ],
  },
  other: {
    'google-site-verification': googleSiteVerification,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MantineProvider defaultColorScheme="dark">
          {children}
          <SpeedInsights />
        </MantineProvider>
      </body>
    </html>
  );
}
