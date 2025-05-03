import React from 'react';
// import profileImage from './assets/images/profile.png'; // Make sure to add your profile image


const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[#E5E5E5]"></div>
      <div className="absolute inset-0 bg-black clip-diagonal"></div>
      <div className="relative z-10 flex min-h-screen">
        <div className="w-1/2 flex items-center justify-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold mb-2">Hi, I am</h1>
            <h2 className="text-6xl font-bold mb-2">Muhamed Rexhepi</h2>
            <p className="text-xl text-gray-600 mb-8">Full-Stack Developer</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-300 p-3 rounded-full">
                {/* Add your email icon here */}
              </a>
              <a href="#" className="bg-gray-300 p-3 rounded-full">
                {/* Add your GitHub icon here */}
              </a>
              <a href="#" className="bg-gray-300 p-3 rounded-full">
                {/* Add your LinkedIn icon here */}
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          {/* <img src={profileImage} alt="Muhamed Rexhepi" className="max-h-[80vh] object-cover" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;