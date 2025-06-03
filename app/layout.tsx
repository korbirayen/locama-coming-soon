import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Locama - Something Epic is Coming",
  description:
    "We're crafting something revolutionary. Join the exclusive waitlist and be among the first to experience the future.",
  keywords: "Locama, coming soon, launch, waitlist, revolutionary, epic",
  openGraph: {
    title: "Locama - Something Epic is Coming",
    description:
      "We're crafting something revolutionary. Join the exclusive waitlist and be among the first to experience the future.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Locama - Something Epic is Coming",
    description:
      "We're crafting something revolutionary. Join the exclusive waitlist and be among the first to experience the future.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  )
}
