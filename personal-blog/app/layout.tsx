import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Olle Mineur',
  description: 'Olle Mineur Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-wrap flex-col h-full min-h-screen w-screen bg-gradient-to-r from-gray-100 to-gray-300 dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-900 dark:to-black">
          <Nav/>
          {children}
        </div>
      </body>
    </html>
  )
}
