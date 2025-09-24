import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lucas - Desenvolvedor Full Stack',
  description: 'Portfólio profissional de Lucas - Desenvolvedor especializado em Flutter, C#/.NET, React Native, QA e DevOps',
  keywords: 'Flutter, C#, .NET, React Native, QA, Mobile, Backend, Azure, Docker, Supabase',
  authors: [{ name: 'Lucas' }],
  openGraph: {
    title: 'Lucas - Desenvolvedor Full Stack',
    description: 'Portfólio profissional - Flutter, C#/.NET, React Native, QA e DevOps',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
