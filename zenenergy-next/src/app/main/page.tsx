'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import Products from '@/components/Products'
import BotSection from '@/components/BotSection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Додаємо клас після завантаження сторінки
    document.body.classList.add('page-loaded')
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Products />
        <BotSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}