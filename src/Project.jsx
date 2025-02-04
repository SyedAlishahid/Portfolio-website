import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Project({ src, para, href }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full max-w-sm overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-labelledby="project-title"
    >
      <img 
        src={src} 
        alt="Project" 
        className={`w-full h-72  object-cover transition-opacity duration-300 ${isHovered ? 'opacity-20' : 'opacity-100'}`} 
        aria-hidden="true"
      />
      <p 
        className={`absolute inset-0 text-center flex items-end pb-16 px-4 text-white text-lg bg-black bg-opacity-50 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        id="project-title"
      >
        {para}
      </p>        
      <div className="absolute inset-x-0 bottom-4 flex justify-center z-10">
        <a 
          href={href}
          target="_blank" 
          rel="noopener noreferrer"
          className='h-10 cursor-pointer w-48 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center text-sm font-semibold'
          aria-label="See more about this project"
        >
          See more
        </a>
      </div>
    </div>
  );
}

Project.propTypes = {
  src: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  href: PropTypes.string,
};

export default Project;