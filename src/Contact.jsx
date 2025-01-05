import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
function Contact() {
  return (
    <section id="Contact">
      <div className='md:h-[25rem] w-full bg-slate-800 pt-12 overflow-x-none'>
        <div className='flex'>
          <div className='border-blue-500 border-b-2 w-2/4 mb-5'></div>
          <h1 className='text-white text-center font-semibold text-4xl px-6'>Contact</h1>
          <div className='border-blue-500 border-b-2 w-2/4 mb-5'></div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 justify-center items-center pt-10'>
          <div className='flex flex-col md:flex-row m-2 space-x-0 md:space-x-2'>
            <div className='h-16 w-full md:w-64 rounded-lg border-2 border-blue-500 text-center font-semibold flex justify-center items-center text-blue-300 bg-slate-700 shadow-lg transition-transform transform hover:scale-105 mb-2 md:mb-0'>
              <EmailIcon className='inline-block mr-2 text-white' />Syedalishahid@gmail.com
            </div>
            <div className='h-16 w-full md:w-64 rounded-lg border-2 mt-2 sm:mt-0 border-blue-500 text-center font-semibold flex justify-center items-center text-blue-300 bg-slate-700 shadow-lg transition-transform transform hover:scale-105'>
              <LocalPhoneIcon className='inline-block mr-2 text-white' />0327-2467724
            </div>
          </div>
          <div className=' h-16 w-full md:w-64  rounded-lg border-2 mb-2  border-blue-500 text-center font-semibold text-blue-300 flex justify-center items-center bg-slate-700 shadow-lg transition-transform transform hover:scale-105 ml-auto '>
            <LocationOnIcon className='inline-block mr-2 text-white' />Pakistan, Karachi
          </div>
        </div>

       <div className='flex mt-5 '>
    <div className='border-blue-500 border-b-2 w-2/4 mb-5'></div>
    <a href="https://www.linkedin.com/in/ali-shahid-2b214b301" target='_blank' rel="noopener noreferrer">
        <InstagramIcon className='h-20 w-20 cursor-pointer m-2 text-white '/>
    </a>
    <a href="https://www.linkedin.com/in/ali-shahid-2b214b301" target='_blank' rel="noopener noreferrer">
        <LinkedInIcon className='h-20 w-20 cursor-pointer m-2 text-white '/>
    </a>
    <a href="https://www.linkedin.com/in/ali-shahid-2b214b301" target='_blank' rel="noopener noreferrer">
        <XIcon className='h-20 w-20 cursor-pointer m-2 text-white '/>
    </a>
    <a href="https://www.linkedin.com/in/ali-shahid-2b214b301" target='_blank' rel="noopener noreferrer">
        <FacebookIcon className='h-20 w-20 cursor-pointer m-2 text-white '/>
    </a>
    <div className='border-blue-500 border-b-2 w-2/4 mb-5'></div>
</div>
      
      <h1 className='text-blue-300 text-center text-4xl font-bold mt-10'>"Thanks For Scrolling"</h1>

      </div>
    </section>

  )
}

export default Contact
