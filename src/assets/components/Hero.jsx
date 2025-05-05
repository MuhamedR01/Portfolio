import React, { useState, useEffect } from 'react';
import { EnvelopeSimple, LinkedinLogo } from 'phosphor-react';
import profileImage from '../images/profilepicture.png';

const UpworkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
  </svg>
);

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex min-h-screen diagonal-background">
      <div className="container mx-auto flex">
        <div className={`w-1/2 flex flex-col justify-center px-20 transform transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          <div className="mb-20">
            {/* Add your logo here */}
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Add your logo SVG path here */}
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-black">Hi, I am</h1>
          <h2 className="text-6xl font-bold text-black">Muhamed Rexhepi</h2>
          <p className="text-xl text-gray-600">Full-Stack Developer</p>
          <div className="flex space-x-4 mt-8">
            <a href="mailto:info@muhamedrexhepi.tech" className="bg-[#909090] p-3 rounded-full hover:bg-gray-400 transition-colors">
              <EnvelopeSimple size={24} />
            </a>
            <a href="https://www.upwork.com/freelancers/muhamedr11" target="_blank" rel="noopener noreferrer" className="bg-[#909090] p-3 rounded-full hover:bg-gray-400 transition-colors">
              <UpworkIcon />
            </a>
            <a href="https://www.linkedin.com/in/muhamed-rexhepi-29ab59233" target="_blank" rel="noopener noreferrer" className="bg-[#909090] p-3 rounded-full hover:bg-gray-400 transition-colors">
              <LinkedinLogo size={24} />
            </a>
          </div>
        </div>
        <div className={`w-1/2 flex items-end justify-center transform transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          <img src={profileImage} alt="Muhamed Rexhepi" className="h-[90vh] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Hero;