import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: {
    default: 'SITENAME',
    template: '%s | SITENAME'
  },
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <header className="px-5 py-14 bg-blue-100">
          <div className="max-w-4xl mx-auto text-center text-2xl">Header</div>
        </header>
        <main className="px-5 py-8">
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>
        <footer className="px-5 py-10 bg-indigo-400">
          <div className="max-w-4xl mx-auto text-center text-xl">Footer</div>
        </footer>
      </body>
    </html>
  )
}
