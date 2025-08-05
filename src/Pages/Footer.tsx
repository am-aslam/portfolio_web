import React from 'react';
import { FaGithub, FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdPhone } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-4 sm:px-6 py-10 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left: Name + Year */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-xl font-semibold">Muhammed Aslam</h3>
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Middle: Navigation */}
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
          <li><a href="#home" className="hover:text-blue-300 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-300 transition">About</a></li>
          <li><a href="#skills" className="hover:text-blue-300 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-300 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-300 transition">Contact</a></li>
        </ul>

        {/* Right: Social Icons */}
        <div className="flex gap-4 justify-center md:justify-end">
          <a
            href="mailto:youremail@example.com"
            className="hover:text-blue-400 transition"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://github.com/am-aslam"
            className="hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://instagram.com"
            className="hover:text-pink-400 transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://instagram.com"
            className="hover:text-blue-400 transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaLinkedin size={20} />
          </a>
                    <a
            href="https://wa.me/8113841363"
            className="hover:text-green-400 transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaWhatsapp size={23} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
