import React, { useState } from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClass = "text-white hover:text-gray-300 cursor-pointer";
  const buttonClass = "bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 text-sm font-medium cursor-pointer";

  return (
    <nav className="bg-transparent absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="text-2xl font-bold">
            <img src={logo} alt="Logo" className="w-[100px] h-[100px]" />
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li><a href="#about" className={linkClass}>About me</a></li>
              <li><a href="#skills" className={linkClass}>Skills</a></li>
              <li><a href="#portfolio" className={linkClass}>Portfolio</a></li>
              <li>
                <button className={buttonClass}>
                  CONTACT ME
                </button>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none custom-cursor-pointer">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container mx-auto px-4 md:hidden">
          <ul className="flex flex-col items-center py-4">
            <li className="py-2 w-full text-center">
              <a href="#about" className={`${linkClass} block py-2`}>About me</a>
            </li>
            <li className="py-2 w-full text-center">
              <a href="#skills" className={`${linkClass} block py-2`}>Skills</a>
            </li>
            <li className="py-2 w-full text-center">
              <a href="#portfolio" className={`${linkClass} block py-2`}>Portfolio</a>
            </li>
            <li className="py-2 w-full text-center cursor-pointer">
              <button className={buttonClass}>
                CONTACT ME
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;