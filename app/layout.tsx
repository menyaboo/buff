import '../public/css/globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {TheHeader} from "@/components/TheHeader";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Буфф',
  description: "SOFT'n app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru-RU">
      <body>
        <TheHeader/>
        <main className={inter.className}>{children}</main>
      </body>
    </html>
  )
}
