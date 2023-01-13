import React from 'react'
// import reactLogo from '../assets/reactLogo.png'
// import javascriptLogo from '../assets/javascriptLogo.png'
// import bloombergLogo from '../assets/bloombergLogo.png'
// import gitLogo from '../assets/gitLogo.png'
// import databaseLogo from '../assets/databaseLogo.png'
// import nodeLogo from '../assets/nodeLogo.png'
// import javaLogo from '../assets/javaLogo.png'
// import pythonLogo from '../assets/pythonLogo.png'
// import tailwindLogo from '../assets/tailwindLogo.png'

import nodeLogo from '../assets/img/node-logo.png'
import javascriptLogo from '../assets/img/javascript-logo.png'
import htmlLogo from '../assets/img/html-logo.png'
import tailwindLogo from '../assets/img/tailwind-logo.png'
import javaLogo from '../assets/img/java-logo.png'
import cssLogo from '../assets/img/css-logo.png'
import reactLogo from '../assets/img/react-logo.png'
import gitLogo from '../assets/img/git-logo.png'
import databaseLogo from '../assets/img/database-logo.png'
import denoLogo from '../assets/img/deno-logo.png'
import bloombergLogo from '../assets/img/bloomberg-logo.png'
import freshLogo from '../assets/img/fresh-logo.png'

function Skills() {
  const skills = [
    {
       id: `1`,
       src: reactLogo,
       title: 'React',
       style: 'shadow-[#61dafb]'
    },
    {
      id: `2`,
      src: javascriptLogo,
      title: 'JavaScript (ES6+)',
      style: 'shadow-[#dab92d]'
    },
    {
      id: `8`,
      src: htmlLogo,
      title: 'HTML',
      style: 'shadow-[#07b6d5]'
    },
    {
      id: `9`,
      src: cssLogo,
      title: 'CSS',
      style: 'shadow-[#07b6d5]'
    },
    {
      id: `3`,
      src: gitLogo,
      title: 'Git (Version Control)',
      style: 'shadow-black'
    },
    {
      id: `4`,
      src: databaseLogo,
      title: 'SQL / NoSQL',
      style: 'shadow-[#eb6325]'
    },
    {
      id: `5`,
      src: nodeLogo,
      title: 'Node.js',
      style: 'shadow-[#3e863d]'
    },
    {
      id: `6`,
      src: javaLogo,
      title: 'Java',
      style: 'shadow-[#e11f21]'
    },
    {
      id: `8`,
      src: denoLogo,
      title: 'Deno',
      style: 'shadow-[#07b6d5]'
    },
    {
      id: `9`,
      src: bloombergLogo,
      title: 'Bloomberg Terminal',
      style: 'shadow-[#07b6d5]'
    },
    {
      id: `10`,
      src: freshLogo,
      title: 'Fresh Framework',
      style: 'shadow-[#07b6d5]'
    },
    {
      id: `7`,
      src: tailwindLogo,
      title: 'TailwindCSS',
      style: 'shadow-[#07b6d5]'
    },


  ];

  return (
    // // OLD SKILLS COMPONENT (larger icons w/ text)
    // <div id='skills' className='w-full md:h-screen pt-10'>
    //   <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
    //     <h2 className='text-4xl p-2 text-center sm:text-5xl sm:text-left'>Skills</h2>
    //     <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
    //       {skills.map(({id, src, title, style}) => (
    //         <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
    //         <img src={src} alt="React Logo" className='h-20 mx-auto'/>
    //         <p className='mt-4'>{title}</p>
    //       </div>
    //       ))} 
    //     </div>
    //   </div> 
    // </div>

    <div id='skills' className='w-full pt-10'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full'>
        <h2 className='text-4xl p-2 text-center sm:text-5xl sm:text-left'>Skills</h2>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1 text-center py-5 px-5 sm:px-0'>
          {skills.map(({id, src, title, style}) => (
            <div key={id} className='py-2'>
              <img src={src} alt={title} className='hover:scale-105 duration-500 h-30 w-30 mx-auto'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills