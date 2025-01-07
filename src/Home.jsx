import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import Img from './assets/file.png';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { fedeln } from './Variants.js';

function Home() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resumes/Ali_Shahid_Resume.pdf'; // Update to the correct relative path
    link.download = 'Ali_Shahid_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className='h-4/5 w-full grid justify-center items-center grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-slate-800 to-slate-900 p-6'
    >
      <motion.div className='text-white flex flex-col justify-center items-start p-6 sm:p-8' 
      id="Home"
      variants={fedeln('up', 0.2)} 
      initial="hidden"
      animate="show">
        <h3 className='font-semibold text-2xl sm:text-3xl md:text-5xl text-blue-400 mt-10'>My Name is</h3>
        <h1 className='mt-4 font-bold text-4xl sm:text-5xl md:text-7xl'>Ali Shahid,</h1>
        <p className='mt-2 text-base sm:text-lg md:text-2xl'>
          I am a{' '}
          <span className='text-blue-300'>
            <Typewriter
              words={['Front-end Developer', 'Web Developer', 'UI/UX Designer', 'React Specialist']}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>{' '}
          specializing in creating beautiful and functional user interfaces.
        </p>
        <button 
          className='bg-blue-600 hover:bg-blue-700 transition duration-300 mt-4 sm:mt-6 h-10 sm:h-12 w-56 sm:w-64 rounded-lg flex items-center justify-center text-white font-semibold shadow-md hover:shadow-lg'
          onClick={handleDownload}
        >
          Download Resume <DownloadIcon className='ml-2' />
        </button>
      </motion.div>
      <div className='flex justify-center'>
        <img
          src={Img}
          alt="Ali Shahid's profile"
          className="relative bottom-10 h-90 mt-10 sm:pt-20 w-auto md:w-[25rem] md:h-[35rem] object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
      </div>
    </section>
  );
}

export default Home;
