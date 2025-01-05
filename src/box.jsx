import React from 'react';

function Box({ src, para }) {
  return (
    <div className='lg:h-64 lg:w-56 h-56 w-full max-w-xs flex flex-col items-center justify-center bg-gray-700 hover:bg-blue-500 rounded-lg shadow-lg m-2 transition-transform transform hover:scale-105'>
      <img src={src} alt={para} className='h-24 w-24 m-4 object-contain shadow-md' />
      <p className='font-semibold text-white text-lg text-center'>{para}</p>
    </div>
  );
}

export default Box;