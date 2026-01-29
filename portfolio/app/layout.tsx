import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AccentColorProvider } from '@/lib/accent-color-context'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Carla Clementino | Software Engineer',
  description: 'Software Engineer specializing in React, TypeScript, and Tailwind CSS. Software Engineering student at UnB, Brasília.',
  generator: 'v0.app',
  keywords: ['Frontend', 'React', 'TypeScript', 'Tailwind', 'Software Engineer', 'Brasília', 'UnB', 'Carla Clementino'],
  authors: [{ name: 'Carla Clementino' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1d2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AccentColorProvider>
          {children}
        </AccentColorProvider>
        <Analytics />
      </body>
    </html>
  )
}
