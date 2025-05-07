import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const linkClass = "text-white hover:text-gray-300 cursor-pointer";
  const mobileLinkClass = "text-black hover:text-gray-600 cursor-pointer";
  const buttonClass = "bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 text-sm font-medium cursor-pointer";

  return (
    <nav className="bg-white md:bg-transparent absolute w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="text-2xl font-bold">
            <img src={logo} alt="Logo" className="w-[60px] h-[60px] md:w-[100px] md:h-[100px]" />
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li><a onClick={() => scrollToSection('about')} className={linkClass}>About me</a></li>
              <li><a onClick={() => scrollToSection('services')} className={linkClass}>Services</a></li>
              <li><a onClick={() => scrollToSection('skills')} className={linkClass}>Skills</a></li>
              {/* <li><a onClick={() => scrollToSection('portfolio')} className={linkClass}>Portfolio</a></li> */}
              <li>
                <button onClick={() => scrollToSection('contact')} className={buttonClass}>
                  CONTACT ME
                </button>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black md:text-white focus:outline-none">
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div 
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center py-4">
          <li className="py-2 w-full text-center">
            <a onClick={() => scrollToSection('about')} className={`${mobileLinkClass} block py-2`}>About me</a>
          </li>
          <li className="py-2 w-full text-center">
            <a onClick={() => scrollToSection('services')} className={`${mobileLinkClass} block py-2`}>Services</a>
          </li>
          <li className="py-2 w-full text-center">
            <a onClick={() => scrollToSection('skills')} className={`${mobileLinkClass} block py-2`}>Skills</a>
          </li>
          {/* <li className="py-2 w-full text-center"> */}
            {/* <a onClick={() => scrollToSection('portfolio')} className={`${mobileLinkClass} block py-2`}>Portfolio</a> */}
          {/* </li> */}
          <li className="py-2 w-full text-center">
            <button onClick={() => scrollToSection('contact')} className={buttonClass}>
              CONTACT ME
            </button>
          </li>
        </ul>
      </div>
      {showScrollTop && (
  <button
    onClick={scrollToTop}
    className="cursor-pointer fixed bottom-3 right-3 md:bottom-5 md:right-5 bg-white text-black p-2 md:p-3 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300 z-50"
    aria-label="Scroll to top"
  >
    <svg
      className="w-4 h-4 md:w-6 md:h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  </button>
)}
    </nav>
  );
};

export default Navbar;