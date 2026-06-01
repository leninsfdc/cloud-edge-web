
import AOSProvider from '@/components/shared/AOSProvider'
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
      <AOSProvider />
    </main>
  )
}

export default layout