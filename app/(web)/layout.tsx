
import AOSProvider from '@/components/shared/AOSProvider'
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import ScrollToTop from '@/components/ui/ScrollToTop'
import StickySocialBar from '@/components/ui/StickySocialBar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <StickySocialBar />
      <ScrollToTop />
      <Footer />
      <AOSProvider />
    </main>
  )
}

export default layout