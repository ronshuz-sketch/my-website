import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar when scrolled past hero section (roughly 600px)
      setIsScrolled(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-indigo-600 shadow-lg' : 'bg-gradient-to-b from-black/40 to-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold tracking-tight text-white">ITPortal</h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-white">
          <li 
            className="hover:text-indigo-300 cursor-pointer transition"
            onClick={() => scrollToSection('home')}
          >
            Home
          </li>
          <li 
            className="hover:text-indigo-300 cursor-pointer transition"
            onClick={() => scrollToSection('pricing')}
          >
            Pricing
          </li>
          <li 
            className="hover:text-indigo-300 cursor-pointer transition"
            onClick={() => scrollToSection('testimonials')}
          >
            Testimonials
          </li>
          <li 
            className="hover:text-indigo-300 cursor-pointer transition"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-indigo-600 text-white px-5 py-2 rounded-xl text-sm hover:bg-indigo-700 transition">
          Hire Talent
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-600 shadow-lg">
          <ul className="flex flex-col gap-4 px-6 py-4 text-sm font-medium text-white">
            <li 
              className="hover:text-indigo-200 cursor-pointer transition py-2"
              onClick={() => scrollToSection('home')}
            >
              Home
            </li>
            <li 
              className="hover:text-indigo-200 cursor-pointer transition py-2"
              onClick={() => scrollToSection('pricing')}
            >
              Pricing
            </li>
            <li 
              className="hover:text-indigo-200 cursor-pointer transition py-2"
              onClick={() => scrollToSection('testimonials')}
            >
              Testimonials
            </li>
            <li 
              className="hover:text-indigo-200 cursor-pointer transition py-2"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </li>
            <button className="w-full bg-indigo-700 text-white px-5 py-2 rounded-xl text-sm hover:bg-indigo-800 transition mt-2">
              Hire Talent
            </button>
          </ul>
        </div>
      )}
    </header>
  )
}
