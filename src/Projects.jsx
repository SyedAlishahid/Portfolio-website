import React, { useEffect, useState } from 'react';
import Project from './Project.jsx';
import Movie from './assets/Netflix-Background.jpg';
import login from './assets/login.avif';
import simon from './assets/simon.jpg';
import weather from './assets/weather-app.avif';

import { motion } from 'framer-motion';
import { fedeln } from './Variants.js'; 

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('Projects');
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
      window.removeEventListener('scroll', handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="Projects">
      <h1 className="text-7xl font-bold text-center bg-slate-800 text-white py-5">Projects</h1>
      <div className="h-3/5 w-full  bg-slate-800 pt-5 grid justify-center items-center grid-cols-1 sm:grid-cols-2 gap-6 sm:px-10 ">
        
        <motion.div
          className="p-4 flex justify-center items-center"
          variants={fedeln('up', 0.2)} 
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          <Project
            src={Movie}
            para="Built a responsive React.js movie app with real-time API data, dynamic content, and efficient state management. Integrated React Router for smooth navigation, showcasing modern web development skills."
            href="https://github.com/SyedAlishahid/MovieApp" 
          />
        </motion.div>

        <motion.div
          className="p-4 flex justify-center items-center"
          variants={fedeln('up', 0.2)} 
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          <Project
            src={login}
            para="Developed a responsive login/signup form in React.js with Tailwind CSS and MUI, featuring a show/hide password option for enhanced usability. Optimized for seamless performance across devices."
            href="https://github.com/SyedAlishahid/SignupForm" 
          />
        </motion.div>

        <motion.div
          className="p-4 flex justify-center items-center"
          variants={fedeln('up', 0.2)} 
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          <Project
            src={simon}
            para="Created a Simon Game in JavaScript with color sequences, user input tracking, and event handling for an interactive experience."
            href="https://github.com/SyedAlishahid/" 
          />
        </motion.div>

        <motion.div
          className="p-4 flex justify-center items-center"
          variants={fedeln('up', 0.2)} 
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          <Project
            src={weather}
            para="Built a fully functional weather app using React and Tailwind CSS, fetching real-time data from an API for dynamic updates."
            href="https://github.com/SyedAlishahid/" 
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;