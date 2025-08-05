import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import img from '../images/project1.jpg';
import img2 from '../images/project2.jpg';

interface Repo {
  name: string;
  html_url: string;
  description: string;
  language: string;
}

const placeholderImages = [
  img,
  img2,
  '/images/project3.jpg',
  '/images/project4.jpg',
  '/images/project5.jpg',
  '/images/project6.jpg',
];

function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/am-aslam/repos')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo: any) => !repo.fork);
        setRepos(filtered);
      });
  }, []);

  const rowCount = 2;
  const rowRepos = Array.from({ length: rowCount }, (_, row) =>
    repos.slice(row * 3, row * 3 + 6)
  );

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 sm:px-6 py-20 overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
      >
        My Projects
      </motion.h2>

      <div className="space-y-16">
        {rowRepos.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex gap-6 w-max animate-scrollRow${rowIndex % 2 === 0 ? '' : 'Reverse'} px-2`}
          >
            {[...row, ...row].map((repo, i) => (
              <motion.div
                key={`${repo?.name}-${i}`}
                whileHover={{ scale: 1.05 }}
                className="min-w-[280px] sm:min-w-[300px] bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative"
              >
                <img
                  src={placeholderImages[i % placeholderImages.length]}
                  alt={repo?.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-400 truncate">
                    {repo?.name}
                  </h3>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 italic">
                      Language: {repo?.language || 'N/A'}
                    </span>
                    <a
                      href={repo?.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-xs sm:text-sm"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-80 text-white p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-sm text-center">
                    {repo?.description || 'No description provided.'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scrollRow {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        @keyframes scrollRowReverse {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-scrollRow {
          animation: scrollRow 20s linear infinite;
        }

        .animate-scrollRowReverse {
          animation: scrollRowReverse 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Projects;
