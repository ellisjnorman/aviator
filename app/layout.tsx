import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  // Makes relative URLs resolve correctly on your custom domain
  metadataBase: new URL("https://www.aviator.holdings"),

  title: "Aviator Global Holdings, LLC",
  description:
    "A private real-estate holding and investment company based in Virginia Beach.",

  openGraph: {
    title: "Aviator Global Holdings, LLC",
    description:
      "A private real-estate holding and investment company based in Virginia Beach.",
    url: "https://www.aviator.holdings",
    siteName: "Aviator Global Holdings",
    images: [
      {
        url: "/og.jpg?v=1", // <-- matches your actual file
        width: 1200,
        height: 630,
        alt: "Aviator Global Holdings",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aviator Global Holdings, LLC",
    description:
      "A private real-estate holding and investment company based in Virginia Beach.",
    images: ["/og.jpg?v=1"], // <-- jpg, with cache-bust
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
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
