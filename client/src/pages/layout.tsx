import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { PropsWithChildren } from 'react'

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={`layout ${inter.className}`}>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
