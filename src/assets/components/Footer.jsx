import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.facebook.com/Muhamed.Rexhepi2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhamed-rexhepi-29ab59233/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/_muhamedrexhepi/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="mailto:rexhepimuhamed333@gmail.com"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </div>
        <div className="text-center text-sm">
          <p>&copy; {currentYear} Muhamed Rexhepi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
