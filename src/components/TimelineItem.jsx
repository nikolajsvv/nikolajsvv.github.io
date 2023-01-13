import React from 'react'

function TimelineItem({id, year, title, duration, details}) {
  
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-[#292823]'>
      <li className='mb-10 ml-4'>
        <div className={`animate-ping opacity-75 absolute w-3 h-3 bg-[#4d4c47] rounded-full mt-1.5 -left-1.5 border border-white`}/>
        <div className='absolute w-3 h-3 bg-[#4d4c47] rounded-full mt-1.5 -left-1.5 border border-white'/>
        <p className='flex flex-wrap g-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-block px-2 py-1 font-semibold text-white bg-[#292823] rounded-md'>{year}</span>
          <h3 className='px-2 text-lg font-semibold text-[#292823]'>{title}</h3>
          <div className='my-1 text-sm font-normal leading-none text-stone-400'>
            {duration}
          </div>
          <p className='my-2 text-base font-normal text-stone-500'>{details}</p>
        </p>
      </li>
    </ol>
  )
}

export default TimelineItem