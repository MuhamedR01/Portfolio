import React, { useState } from 'react';
import '../styles/custom.css';
import Modal from './Modal';

const AboutMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling on the main page
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling on the main page
  };

  return (
    <>
      <div className="relative custom-gradient-background text-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-16 relative z-10">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <div className="max-w-3xl">
            <p className="text-sm mb-6 leading-relaxed">
              I'm a full-stack developer with a passion for building responsive, user-friendly web applications. Whether it's crafting clean front-end experiences or architecting solid back-end logic, I love turning ideas into digital reality through code and collaboration.
            </p>
            <button 
              onClick={openModal}
              className=" cursor-pointer border-l border-r border-white px-6 py-2 text-xs uppercase tracking-wider hover:bg-white hover:text-black transition duration-300"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4 text-white">More About Me</h2>
        <p className="mb-4 text-gray-300">
          Hi, I'm Muhamed Rexhepi, a passionate and skilled Full-Stack Web Developer with a strong background in creating modern, responsive, and performance-driven websites and web applications. I specialize in turning ideas into clean, functional, and visually engaging digital experiences.
        </p>
        <h3 className="text-xl font-semibold mb-2 text-white">🔧 What I Do:</h3>
        <p className="mb-4 text-gray-300">
          I work across the full web development spectrum—from crafting elegant front-end interfaces to building robust back-end systems.
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-300">
          <li><strong className="text-white">Frontend Development:</strong> HTML5, CSS3, JavaScript (ES6+), React.js</li>
          <li><strong className="text-white">Styling & UI Frameworks:</strong> Tailwind CSS, Bootstrap, SASS/SCSS</li>
          <li><strong className="text-white">Backend & Databases:</strong> PHP, MySQL, Laravel</li>
          <li><strong className="text-white">CMS Development:</strong> Custom WordPress themes & plugins, WooCommerce integration</li>
          <li><strong className="text-white">Performance & UX:</strong> SEO-friendly, mobile-first, and fully responsive design solutions</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 text-white">✅ Why Work With Me?</h3>
        <ul className="list-disc list-inside mb-4 text-gray-300">
          <li><strong className="text-white">Clean & Maintainable Code</strong> – I follow industry best practices to ensure long-term scalability and readability.</li>
          <li><strong className="text-white">Pixel-Perfect Execution</strong> – I pay close attention to detail when translating designs into working websites.</li>
          <li><strong className="text-white">Client-Focused Mindset</strong> – I value clear communication, transparency, and delivering results on time.</li>
          <li><strong className="text-white">Reliable Problem Solver</strong> – I enjoy debugging, optimizing, and improving code quality to meet any challenge.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 text-white">🤝 Let's Work Together</h3>
        <p className="mb-4 text-gray-300">
          I'm always excited to take on new projects and bring creative ideas to life. Whether you're a startup looking for a digital launch or a business needing development support—I'm here to help.
        </p>
        <p className="mb-4 font-semibold text-white">
          Let's build something great together!
        </p>
        <button
          onClick={closeModal}
          className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition duration-300 cursor-pointer"
        >
          Close
        </button>
      </Modal>
    </>
  );
};

export default AboutMe;