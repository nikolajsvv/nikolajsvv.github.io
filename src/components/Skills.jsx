import React, { useState } from 'react'
import skills from '../data/skills'

function Skills() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div id='skills' className='w-full bg-dot-pattern bg-[length:75px_75px]'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full'>
        {/* <h2 className='text-4xl p-2 text-center sm:text-5xl sm:text-left'>Skills</h2> */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 text-center py-5 px-5 sm:px-0'>
          {skills.map(({id, src, title}) => (
            <div key={id} className='py-2'>
              <img src={src} alt={title} className='grayscale h-25 w-25 mx-auto hover:scale-105 duration-300 hover:grayscale-0 hover:animate-short-bounce' 
                onMouseEnter={() => setActiveId(id)} onMouseLeave={() => setActiveId(null)}/>
              <p className={`mt-1 ${activeId === id ? 'visible' : 'invisible'}`}>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills