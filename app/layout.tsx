export const metadata = {
  title: "Aviator Global Holdings, LLC",
  description:
    "A private real-estate holding and investment company based in Virginia Beach.",
  metadataBase: new URL("https://aviator.holdings"),

  openGraph: {
    title: "Aviator Global Holdings, LLC",
    description:
      "A private real-estate holding and investment company based in Virginia Beach.",
    url: "https://aviator.holdings",
    siteName: "Aviator Global Holdings",
    images: [
      {
        url: "/og-image.jpg", // Replace with your file
        width: 1200,
        height: 630,
        alt: "Aviator Global Holdings, LLC",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aviator Global Holdings, LLC",
    description:
      "A private real-estate holding and investment company based in Virginia Beach.",
    images: ["/og-image.jpg"],
  },
};
import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aviator Global Holdings, LLC",
  description: "A private real-estate holding and investment company based in Virginia Beach.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
