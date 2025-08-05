import { motion } from 'framer-motion';
import avatarAI from '../assets/avatar-ai.jpg';

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <motion.img
        src={avatarAI}
        alt="AI Avatar"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-28 h-28 sm:w-36 sm:h-36 rounded-full shadow-lg border-2 border-white mb-6 object-cover"
      />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
      >
        Hi, I'm Muhammed Aslam
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="text-lg sm:text-xl md:text-2xl text-center max-w-2xl mb-4 px-2"
      >
        AI Intern • ML Engineer • Data Scientist
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 0.5 }}
        className="text-center max-w-xl text-gray-300 px-2 text-sm sm:text-base"
      >
        Experienced in time-series forecasting, LLM evaluation, and real-world ML pipelines. Proficient in Python, PyTorch, SQL, and Power BI. I create reproducible Jupyter workflows and deploy impactful models.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.7 }}
        className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 rounded text-white hover:bg-blue-700 transition w-40 text-center"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-white rounded hover:bg-white hover:text-black transition w-40 text-center"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}

export default Home;
