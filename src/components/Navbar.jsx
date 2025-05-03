import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-8 bg-transparent absolute top-0 left-0 right-0 z-10">
      <div className="text-2xl font-bold">
        <img src={logo} alt="Logo" className="w-[100px] h-[100px]" />
      </div>
      <ul className="flex items-center space-x-8">
        <li><Link to="/about" className="text-white hover:text-gray-300">About me</Link></li>
        <li><Link to="/skills" className="text-white hover:text-gray-300">Skills</Link></li>
        <li><Link to="/portfolio" className="text-white hover:text-gray-300">Portfolio</Link></li>
        <li>
          <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 text-sm font-medium">
            CONTACT ME
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;