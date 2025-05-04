import React from 'react';
import '../styles/custom.css';

const AboutMe = () => {
  return (
    <div className="relative custom-gradient-background text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-16 relative z-10">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <div className="max-w-3xl">
          <p className="text-sm mb-6 leading-relaxed">
            Hi, I'm Muhamed. I'm a Full-Stack Developer with a passion for building innovative and user-friendly
            applications. I have a background in Computer Science and a keen interest in technology. I love learning new
            technologies and applying them to solve real-world problems.
          </p>
          <button className="border border-white px-6 py-2 text-xs uppercase tracking-wider hover:bg-white hover:text-black transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;