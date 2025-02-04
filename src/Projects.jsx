import React, { useEffect, useState } from 'react';
import Project from './Project.jsx';
import { motion } from 'framer-motion';
import { fedeln } from './Variants.js';

// Import images
import Movie from './assets/Netflix-Background.jpg';
import Login from './assets/login.png';
import Simon from './assets/simon.jpg';
import Weather from './assets/weather-app.avif';
import Todo from './assets/todo.png';
import Currency from './assets/currency.png';
const projectsData = [
  {
    id: 1,
    src: Movie,
    para: "Built a responsive React.js movie app with real-time API data, dynamic content, and efficient state management. Integrated React Router for smooth navigation, showcasing modern web development skills.",
    href: "https://github.com/SyedAlishahid/MovieApp",
  },
  {
    id: 2,
    src: Login,
    para: "Developed a responsive login/signup form in React.js with Tailwind CSS and MUI, featuring a show/hide password option for enhanced usability. Optimized for seamless performance across devices.",
    href: "https://github.com/SyedAlishahid/SignupForm",
  },
  {
    id: 3,
    src: Simon,
    para: "Created a Simon Game in JavaScript with color sequences, user input tracking, and event handling for an interactive experience.",
    href: "https://github.com/SyedAlishahid/",
  },
  {
    id: 4,
    src: Weather,
    para: "Built a fully functional weather app using React and Tailwind CSS, fetching real-time data from an API for dynamic updates.",
    href: "https://github.com/SyedAlishahid/",
  },
  {
    id: 5,
    src: Todo,
    para: "Product Details tracker Application fully functional weather app using React and Tailwind CSS",
    href: "https://github.com/SyedAlishahid/ProductDetailTracker"
  },
  {
    id: 6,
    src: Currency,
    para: "Build a real-time Currency Converter using TypeScript, React, and Tailwind CSS. Leverage a live exchange rate API for dynamic updates, ensuring accurate conversions with a sleek, responsive UI.",
    href: "https://github.com/SyedAlishahid/CurrencyConverter"
  }
];

function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('projects');
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="bg-slate-800 py-10">
      <h1 className="text-7xl font-bold text-center text-white py-5">Projects</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="p-4 flex justify-center items-center"
              variants={fedeln('up', 0.2 * index)}
              initial="hidden"
              animate={isVisible ? "show" : "hidden"}
            >
              <Project
                src={project.src}
                para={project.para}
                href={project.href}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;