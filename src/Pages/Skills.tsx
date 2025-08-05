import { motion } from 'framer-motion';
import {
  FaPython, FaAws, FaGitAlt, FaDocker, FaGithub,
  FaHtml5, FaCss3Alt, FaReact, FaBrain, FaEye,
  FaDatabase, FaCloud, FaCuttlefish, FaJsSquare
} from 'react-icons/fa';
import {
  SiPytorch, SiScikitlearn, SiMysql, SiStreamlit,
  SiJupyter, SiTypescript, SiVite, SiKeras, SiTensorflow,
  SiPandas, SiNumpy, SiOpencv, SiMongodb, SiFirebase,
  SiTableau, SiMui,
} from 'react-icons/si';

const skills = [
  { name: 'Python', icon: <FaPython size={32} color="#FFD43B" />, level: 95 },
  { name: 'SQL', icon: <FaDatabase size={32} color="#00758F" />, level: 90 },
  { name: 'JavaScript', icon: <FaJsSquare size={32} color="#F7DF1E" />, level: 85 },
  { name: 'C++', icon: <FaCuttlefish size={32} color="#00599C" />, level: 75 },
  { name: 'Scikit-learn', icon: <SiScikitlearn size={32} color="#F7931E" />, level: 88 },
  { name: 'PyTorch', icon: <SiPytorch size={32} color="#EE4C2C" />, level: 70 },
  { name: 'TensorFlow', icon: <SiTensorflow size={32} color="#FF6F00" />, level: 75 },
  { name: 'Keras', icon: <SiKeras size={32} color="#D00000" />, level: 72 },
  { name: 'ARIMA', icon: <FaBrain size={32} color="#7DD3FC" />, level: 80 },
  { name: 'LSTM', icon: <FaBrain size={32} color="#38BDF8" />, level: 78 },
  { name: 'SVM', icon: <FaBrain size={32} color="#2563EB" />, level: 82 },
  { name: 'Jupyter', icon: <SiJupyter size={32} color="#F37626" />, level: 93 },
  { name: 'Git', icon: <FaGitAlt size={32} color="#F05032" />, level: 88 },
  { name: 'GitHub', icon: <FaGithub size={32} color="#ffffff" />, level: 90 },
  { name: 'Pandas', icon: <SiPandas size={32} color="#150458" />, level: 92 },
  { name: 'NumPy', icon: <SiNumpy size={32} color="#013243" />, level: 90 },
  { name: 'OpenCV', icon: <SiOpencv size={32} color="#5C3EE8" />, level: 78 },
  { name: 'MongoDB', icon: <SiMongodb size={32} color="#47A248" />, level: 80 },
  { name: 'Firebase', icon: <SiFirebase size={32} color="#FFCA28" />, level: 70 },
  { name: 'REST APIs', icon: <FaCloud size={32} color="#60A5FA" />, level: 85 },
  { name: 'Tableau', icon: <SiTableau size={32} color="#E97627" />, level: 72 },
  { name: 'Matplotlib', icon: <FaReact size={32} color="#0284C7" />, level: 85 },
  { name: 'AWS', icon: <FaAws size={32} color="#FF9900" />, level: 78 },
  { name: 'Docker', icon: <FaDocker size={32} color="#2496ED" />, level: 80 },
  { name: 'GitHub Actions', icon: <FaGithub size={32} color="#6366F1" />, level: 75 },
  { name: 'Streamlit', icon: <SiStreamlit size={32} color="#FF4B4B" />, level: 85 },
  { name: 'HTML5', icon: <FaHtml5 size={32} color="#E34F26" />, level: 88 },
  { name: 'CSS3', icon: <FaCss3Alt size={32} color="#1572B6" />, level: 85 },
  { name: 'TypeScript', icon: <SiTypescript size={32} color="#3178C6" />, level: 80 },
  { name: 'Vite', icon: <SiVite size={32} color="#646CFF" />, level: 75 },
];

function Skills() {
  const rowCount = 3;
  const rowSkills = skills.reduce((acc: any[], skill, i) => {
    const row = i % rowCount;
    acc[row] = acc[row] || [];
    acc[row].push(skill);
    return acc;
  }, []);

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 sm:px-6 py-20 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
      >
        My Skills
      </motion.h2>

      <div className="space-y-12">
        {rowSkills.map((row, idx) => (
          <div
            key={idx}
            className={`flex gap-6 sm:gap-8 w-max animate-scroll${idx % 2 === 0 ? '' : 'Reverse'} px-2`}
          >
            {[...row, ...row].map((skill, i) => (
              <motion.div
                key={`${skill.name}-${i}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col items-center justify-center bg-gray-800 rounded-lg p-3 sm:p-4 cursor-pointer transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 min-w-[140px] sm:min-w-[160px]"
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="mt-2 text-sm sm:text-base font-medium text-center">{skill.name}</span>
                <div className="w-full mt-2 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* Scroll Animation Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scrollReverse {
          animation: scrollReverse 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Skills;
