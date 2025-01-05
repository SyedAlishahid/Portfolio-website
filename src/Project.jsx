import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Project({ src, para, href }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-86 sm:w-full lg:w-90 max-w-sm overflow-hidden rounded-lg m-5 sm:mt-16 md:m-10 sm:mr-10 transform transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={src} 
        alt="Project" 
        className={`w-full h-72 object-cover transition-opacity duration-300 ${isHovered ? 'opacity-20' : 'opacity-100'}`} 
      />
      <p 
        className={`absolute inset-0 text-center flex items-end pb-16 px-4 text-white text-lg bg-black bg-opacity-50 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        {para}
      </p>        
      <div className="absolute inset-x-0 bottom-4 flex justify-center z-10">
        <a 
          href={href}
          target="_blank" 
          className='h-10 cursor-pointer w-48 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center text-sm font-semibold'
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
