import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'eXomAI - Fusing AI and Analytics at the Speed of Memory',
  description: 'The Only Asian Company Specializing in In-Memory AI + Data Computation',
  openGraph: {
    title: 'eXomAI - Fusing AI and Analytics at the Speed of Memory',
    description: 'The Only Asian Company Specializing in In-Memory AI + Data Computation',
    images: [{
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ag0CqeiB48s3rLD7a07hMMIqkv12kp.png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'eXomAI - Fusing AI and Analytics at the Speed of Memory',
    description: 'The Only Asian Company Specializing in In-Memory AI + Data Computation',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-ag0CqeiB48s3rLD7a07hMMIqkv12kp.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-[#010810]`}>{children}</body>
    </html>
  )
}

