import React from 'react'
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaInstagram, FaUser,FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';

function Contacts() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 sm:px-6 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
      >
        Contact Me
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Left Summary Section */}
        <div className="flex">
          <div className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-md flex flex-col justify-between items-center text-center w-full h-full">
            <div className="flex flex-col items-center space-y-4">
              <FaUser size={40} className="text-blue-400" />
              <h3 className="text-xl sm:text-2xl font-semibold">Muhammed Aslam</h3>
              <p className="text-sm text-gray-300 leading-relaxed text-center max-w-md">
                I’m a passionate Data Scientist & AI/ML enthusiast with experience in machine
                learning, deep learning, computer vision, and data analytics. I build intelligent
                systems using Python, PyTorch, TensorFlow, and AWS. I love turning data into insights
                and designing intelligent solutions.
              </p>
            </div>

            <div className="flex justify-center gap-6 sm:gap-8 mt-6 sm:mt-8">
              <a
                href="mailto:aslamsadique01@gmail.com?subject=Let's%20Connect&body=Hi%20Muhammed%2C%0A%0AI%20found%20your%20portfolio%20and%20wanted%20to%20reach%20out..."
                className="text-blue-500 hover:text-blue-300"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="https://github.com/am-aslam"
                className="text-white hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.instagram.com/aslam__sadique"
                className="text-pink-500 hover:text-pink-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
                            <a
                href="https://www.instagram.com/aslam__sadique"
                className="text-blue-500 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
              <a
            href="https://wa.me/8113841363"
            className="hover:text-green-400 transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaWhatsapp size={24} />
          </a>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <form className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-md space-y-6 h-full flex flex-col justify-between">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none text-sm sm:text-base"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none text-sm sm:text-base"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none text-sm sm:text-base"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700 h-32 focus:outline-none text-sm sm:text-base"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
