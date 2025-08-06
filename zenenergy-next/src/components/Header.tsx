'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? '' : 'hidden'
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <header className={`fixed top-0 left-0 w-full py-6 px-[5vw] flex justify-between items-center z-50 ${isScrolled ? 'bg-[rgba(245,245,247,0.95)] shadow-sm' : 'bg-[rgba(245,245,247,0.8)]'} backdrop-blur-lg`}>
        <Link href="/" className="logo font-bold text-[1.8rem] tracking-tight">
          ZEN<span className="text-accent">energy</span>
        </Link>
        
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="headder text-[0.95rem] font-medium hover:text-accent relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full">
            Головна
          </Link>
          <Link href="/quiz" className="text-[0.95rem] font-medium hover:text-accent relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full">
            ZEN-quiz
          </Link>
          <Link href="#mission" className="text-[0.95rem] font-medium hover:text-accent relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full">
            Місія
          </Link>
          <Link href="#products" className="text-[0.95rem] font-medium hover:text-accent relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full">
            Продукти
          </Link>
          <Link href="#bot" className="text-[0.95rem] font-medium hover:text-accent relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full">
            Бот
          </Link>
          <Link href="#contact" className="text-[0.95rem] font-medium hover:text-accent relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full">
            Контакти
          </Link>
        </nav>
        
        <div 
          className={`burger-menu md:hidden flex flex-col justify-between w-6 h-[18px] cursor-pointer z-50 ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <div className="burger-line w-full h-0.5 bg-primary transition-all"></div>
          <div className="burger-line w-full h-0.5 bg-primary transition-all"></div>
          <div className="burger-line w-full h-0.5 bg-primary transition-all"></div>
        </div>
      </header>
    <div className={`mobile-nav fixed top-0 right-[-100%] w-[80%] max-w-[300px] h-screen bg-light shadow-lg p-[80px_30px_30px] transition-all z-40 ${isMenuOpen ? 'active' : ''}`}>
        <Link href="/" className="block py-4 text-text font-medium border-b border-[rgba(0,0,0,0.1)] hover:text-accent" onClick={closeMenu}>
          Головна
        </Link>
        <Link href="/quiz" className="block py-4 text-text font-medium border-b border-[rgba(0,0,0,0.1)] hover:text-accent" onClick={closeMenu}>
          ZEN-quiz
        </Link>
        <Link href="#mission" className="block py-4 text-text font-medium border-b border-[rgba(0,0,0,0.1)] hover:text-accent" onClick={closeMenu}>
          Місія
        </Link>
        <Link href="#products" className="block py-4 text-text font-medium border-b border-[rgba(0,0,0,0.1)] hover:text-accent" onClick={closeMenu}>
          Продукти
        </Link>
        <Link href="#bot" className="block py-4 text-text font-medium border-b border-[rgba(0,0,0,0.1)] hover:text-accent" onClick={closeMenu}>
          Бот
        </Link>
        <Link href="#contact" className="block py-4 text-text font-medium border-b border-[rgba(0,0,0,0.1)] hover:text-accent" onClick={closeMenu}>
          Контакти
        </Link>
      </div>
      
      <div 
        className={`overlay fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] transition-all z-30 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={closeMenu}
      ></div>
    </>
  )
}