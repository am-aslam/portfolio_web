import React from 'react';
import { motion } from 'framer-motion';
import avatarData from '../assets/avatar-data.jpg';

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.2,
      duration: 0.6
    }
  })
};

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-4 sm:px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Avatar Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={avatarData}
            alt="Full-Length Professional Avatar"
            className="w-60 sm:w-72 md:w-full max-w-xs sm:max-w-sm md:max-w-md object-contain rounded-xl"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 max-w-3xl text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>

          <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed px-1 sm:px-0">
            I’m <span className="text-white font-semibold">Muhammed Aslam</span>, an AI Intern and Machine Learning Engineer from Calicut, Kerala — open to relocating to Bangalore, Mumbai, or Gurugram. I specialize in developing ML workflows with Jupyter, time-series forecasting, and LLM evaluation.
          </p>

          <ul className="text-gray-300 space-y-3 px-1 sm:px-0">
            {[
              '🔬 Expertise: ARIMA, LSTM, SVM, multimodal annotation, RMSE/MAE analysis',
              '🛠 Tools: Python, PyTorch (learning), Scikit-learn, Power BI, SQL, Git, Docker, Streamlit, AWS',
              '📚 Learning Mindset: Always experimenting with real-world data, prompt engineering, and collaborative projects',
              '🎯 Goal: To build AI solutions that create measurable impact through automation and intelligent analysis'
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                custom={i}
                className="leading-relaxed text-sm sm:text-base"
              >
                <strong className="text-white">{item.split(':')[0]}:</strong>
                {item.split(':')[1]}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
