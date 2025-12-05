import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aviator Global Holdings, LLC",
  description:
    "A private real-estate holding and investment company based in Virginia Beach.",

  // ---- OPEN GRAPH / LINK PREVIEWS ----
  openGraph: {
    title: "Aviator Global Holdings, LLC",
    description:
      "A private real-estate holding and investment company based in Virginia Beach.",
    url: "https://www.aviator.holdings",
    siteName: "Aviator Global Holdings",
    images: [
      {
        url: "/og.png", // must be in /public
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    locale: "en_US",
  },

  // ---- TWITTER CARD ----
  twitter: {
    card: "summary_large_image",
    title: "Aviator Global Holdings, LLC",
    description:
      "A private real-estate holding and investment company based in Virginia Beach.",
    images: ["/og.png"],
  },

  // ---- ICONS (FAVICON + APPLE TOUCH) ----
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },               // Main favicon
      { url: "/icon-light-32x32.png", media: "(light)" }, // Optional theme icons
      { url: "/icon-dark-32x32.png", media: "(dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
