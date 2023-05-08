import React from 'react'
import profilePicture from '../assets/profile.png'
import { TbDownload } from 'react-icons/tb'
import Typewriter from 'typewriter-effect';

function About() {
  return (
    <div id='about' className="h-screen w-full bg-dot-pattern bg-[length:75px_75px]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row">
        <div className="flex flex-col justify-center items-center h-full pt-10 md:items-start">
          <div className='text-2xl'>
            <h2>Hi, I'm</h2>
          </div>
          <div className='text-4xl sm:text-5xl'>  
            <Typewriter
                  options={{
                  autoStart: true,
                  loop: true,
                }}
              onInit={(typewriter) => {
                typewriter.typeString(`Nikolajs Veidis`)
                  .pauseFor(5000)
                  .deleteAll()
                  .changeDeleteSpeed('natural')
                  .start()
              }}
            />
          </div>
          <p className='text-center text-gray-500 py-4 max-w-md md:text-start'>I am a New York City based full-stack software engineer with expertise in data visualization and UI/UX design. After working in finance, specifically in fixed-income, I decided to transition into software engineering and graduated from a software engineering bootcamp. I have experience in developing interactive graphs using D3.js, implementing version control, and using technologies like JavaScript, Node.js, and React. My background in finance allows me to bring unique insights to my work in software development.
          </p>
          <div className='flex justify-center items-center md:justify-start'>
            <a href='/Nikolajs Veidis - Resume.pdf' target='_blank' rel="noreferrer">
            <button className='group w-fit px-6 py-3 my-2 flex items-center rounded-md shadow-md shadow-gray-500/50 cursor-pointer hover:shadow-gray-500/100'>
              Resume
              <span className='group-hover:animate-wiggle duration-300'>
                <TbDownload size={20} className='ml-1'/>
              </span>
            </button>
            </a>
          </div>
        </div>
        <img src={profilePicture} alt="profile" id="profile-pic" className="object-none h-50 w-50 mx-auto w-2/3 md:w-full shadow-lg shadow-gray-500/50 hover:scale-105 duration-500"/>
      </div>
    </div>
  )
}

export default About