import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Project({ src, para }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full max-w-sm overflow-hidden rounded-lg m-5 mt-16 md:m-10 sm:mr-10 shadow-lg transform transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={src} 
        alt="Project" 
        className={`w-full h-72 object-cover transition-opacity duration-300 ${isHovered ? 'opacity-20' : 'opacity-100'}`} 
      />
      <p 
        className={`absolute inset-0 text-center flex items-end pb-10 px-4 text-white text-lg bg-black bg-opacity-50 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        {para}
      </p>
    </div>
  );
}

Project.propTypes = {
  src: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};

export default Project;
