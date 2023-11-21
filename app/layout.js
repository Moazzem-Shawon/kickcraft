import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components'
import { CssBaseline } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KickCraft',
  description: 'You can get every information here about football you need.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CssBaseline />
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
