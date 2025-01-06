import React, { useEffect, useState } from 'react';
import Box from './box.jsx';
import html from "./assets/html.svg";
import css from './assets/css-3.svg';
import js from './assets/javascript.svg';
import react from './assets/react.svg';
import bootstrap from './assets/bootstrap.png';
import redux from './assets/redux.svg';
import git from './assets/git.png';
import ghub from './assets/github.png';
import vercel from './assets/vercel.svg';
import Hostinger from './assets/hostinger.png';
import WooCommerce from './assets/woocommerce.svg';
import WordPress from './assets/wordpress.svg';
import TailwindCss from './assets/tailwindcss.svg';
import Figma from './assets/figma.svg';
import mui from './assets/mui.svg';
import { motion } from 'framer-motion';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('About');
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
    <section id="About">
      <div className='h-auto min-h-screen overflow-x-hidden w-full'>
        <div className='flex flex-col justify-center items-center p-6 sm:p-12 bg-gray-800 shadow-2xl transition-all duration-300 hover:shadow-4xl'>
          <div className='text-center'>
            <motion.h1 
              className='text-4xl sm:text-6xl font-extrabold text-white mb-6'
              initial={{ opacity: 0, y: -20 }} 
              animate={isVisible ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h1>
            <motion.p 
              className='text-lg sm:text-2xl text-gray-300 leading-relaxed w-full sm:w-3/4 mx-auto'
              initial={{ opacity: 0, y: -20 }} 
              animate={isVisible ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              "As a dedicated frontend developer, I specialize in creating dynamic,
              responsive, and user-centric web interfaces. With expertise in HTML,
              CSS, JavaScript, and React, I transform design concepts into seamless
              digital experiences that prioritize performance and accessibility.
              My commitment to continuous learning and staying updated with industry
              trends drives my ability to deliver innovative solutions.
              <span className='font-bold text-blue-500'> Passionate about problem-solving and design implementation, </span>
              I aim to build impactful, scalable applications that enhance user engagement and deliver value."
            </motion.p>
          </div>
          <motion.h1 
            className='text-4xl sm:text-6xl font-bold text-white text-center pt-6 sm:pt-10 mt-10'
            initial={{ opacity: 0, y: -20 }} 
            animate={isVisible ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            My Skills
          </motion.h1>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-10 gap-4 sm:p-8 rounded-lg shadow-lg hover:shadow-2xl'>
            <Box className='bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300' src={html} para={"HTML"} />
            <Box className='bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300' src={css} para={"CSS"} />
            <Box className='bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300' src={bootstrap} para={"BootStrap"} />
            <Box className='bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300' src={TailwindCss} para={"TailwindCss"} />
            <Box className='bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300' src={js} para={"JavaScript"} />
            <Box className='bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300' src={react} para={"React"} />
            <Box className='bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300' src={redux} para={"Redux"} />
            <Box className='bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300' src={git} para={"Git"} />
            <Box className='bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300' src={ghub} para={"GitHub"} />
            <Box className='bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300' src={vercel} para={"Vercel"} />
            <Box className='bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300' src={Hostinger} para={"Hostinger"} />
            <Box className='bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300' src={WooCommerce} para={"WooCommerce"} />
            <Box className='bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300' src={WordPress} para={"WordPress"} />
            <Box className='bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300' src={Figma} para={"Figma"} />
            <Box className='bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300' src={mui} para={"Material UI"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
