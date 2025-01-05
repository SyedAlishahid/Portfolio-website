import React from 'react';
import Project from './Project.jsx';
import Movie from './assets/Netflix-Background.jpg';
import login from './assets/login.avif';
import simon from './assets/simon.jpg';
import weather from './assets/weather-app.avif';

function Projects() {
  return (
    <section id="Projects">
      <h1 className="text-7xl font-bold text-center bg-slate-800 text-white py-5">Projects</h1>
      <div className="h-auto w-full bg-slate-800 pt-10 grid justify-center items-center grid-cols-1 sm:grid-cols-2 gap-6 sm:px-10 md:pr-32 lg:pl-32">
        <Project
          src={Movie}
          alt="Movie App"
          para="Built a responsive React.js movie app with real-time API data, dynamic content, and efficient state management. Integrated React Router for smooth navigation, showcasing modern web development skills."
          className="p-4"
        />
        <Project
          src={login}
          alt="Login Form"
          para="Developed a responsive login/signup form in React.js with Tailwind CSS and MUI, featuring a show/hide password option for enhanced usability. Optimized for seamless performance across devices."
          className="p-4"
        />
        <Project
          src={simon}
          alt="Simon Game"
          para="Created a Simon Game in JavaScript with color sequences, user input tracking, and event handling for an interactive experience."
          className="p-4"
        />
        <Project
          src={weather}
          alt="Weather App"
          para="Built a fully functional weather app using React and Tailwind CSS, fetching real-time data from an API for dynamic updates."
          className="p-4"
        />
      </div>
    </section>

  );
}

export default Projects;
