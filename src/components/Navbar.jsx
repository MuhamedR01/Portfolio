import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClass = "text-white hover:text-gray-300 cursor-pointer hover:cursor-pointer";
  const buttonClass = "bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 text-sm font-medium cursor-pointer hover:cursor-pointer";

  return (
    <nav className="flex items-center justify-between py-6 px-8 bg-transparent absolute top-0 left-0 right-0 z-10">
      <div className="text-2xl font-bold">
        <img src={logo} alt="Logo" className="w-[100px] h-[100px]" />
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center space-x-8">
          <li><Link to="/about" className={linkClass}>About me</Link></li>
          <li><Link to="/skills" className={linkClass}>Skills</Link></li>
          <li><Link to="/portfolio" className={linkClass}>Portfolio</Link></li>
          <li>
            <button className={buttonClass}>
              CONTACT ME
            </button>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none cursor-pointer hover:cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black md:hidden">
          <ul className="flex flex-col items-center py-4">
            <li className="py-2 w-full text-center">
              <Link to="/about" className={`${linkClass} block py-2`}>About me</Link>
            </li>
            <li className="py-2 w-full text-center">
              <Link to="/skills" className={`${linkClass} block py-2`}>Skills</Link>
            </li>
            <li className="py-2 w-full text-center">
              <Link to="/portfolio" className={`${linkClass} block py-2`}>Portfolio</Link>
            </li>
            <li className="py-2 w-full text-center">
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