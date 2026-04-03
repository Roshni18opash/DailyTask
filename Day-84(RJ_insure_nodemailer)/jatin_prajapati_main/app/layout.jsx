import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: 'Jatin Prajapati | Certified Insurance Advisor',
  description: 'Certified insurance advisor with 7+ years of experience. Get expert guidance on Life, Health, Motor & Term Insurance from India\'s trusted providers.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary/30">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
