import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, 
        behavior: 'smooth',
      });
    }
  };

  const handleLogoClick = () => {
    window.location.reload();
    scrollToSection('Home'); 
  };

  return (
    <nav className="bg-slate-900 sm:h-25 text-slate-100 px-4 md:px-8 h-20 w-full shadow-lg fixed top-0 z-50 flex justify-between items-center bg-opacity-70 overflow-hidden">
      <div onClick={handleLogoClick} className='cursor-pointer text-blue-300'>
        <h1 className="font-extrabold text-4xl md:text-5xl flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-purple-400 drop-shadow-md">
          ALI.DEV
        </h1>
      </div>
      <ul className="hidden md:flex gap-8 text-lg font-medium">
        <li className="hover:text-blue-400 cursor-pointer transition-colors" onClick={() => scrollToSection('Home')}>Home</li>
        <li className="hover:text-blue-400 cursor-pointer transition-colors" onClick={() => scrollToSection('About')}>About</li>
        <li className="hover:text-blue-400 cursor-pointer transition-colors" onClick={() => scrollToSection('Projects')}>Projects</li>
        <li className="hover:text-blue-400 cursor-pointer transition-colors" onClick={() => scrollToSection('Contact')}>Contact</li>
      </ul>

      <div className="md:hidden cursor-pointer relative z-50" onClick={toggleMenu}>
        {isMenuOpen ? (
          <CloseIcon sx={{ fontSize: "1.8rem", color: "#fff" }} />
        ) : (
          <MenuIcon sx={{ fontSize: "2rem", color: "#fff" }} />
        )}
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-slate-950 text-slate-100 shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out z-40 overflow-y-auto`}
      >
        <ul className="flex flex-col gap-8 p-8 text-lg font-medium">
          <li className="hover:text-blue-400 cursor-pointer transition-colors" onClick={() => { scrollToSection('Home'); toggleMenu(); }}>
            Home
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors" onClick={() => { scrollToSection('About'); toggleMenu(); }}>
            About
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors" onClick={() => { scrollToSection('Projects'); toggleMenu(); }}>
            Projects
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors" onClick={() => { scrollToSection('Contact'); toggleMenu(); }}>
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
