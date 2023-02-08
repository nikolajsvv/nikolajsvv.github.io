import React from 'react'
import timeline from '../data/timeline'
import TimelineItem from './TimelineItem'

function Timeline() {
  return (
    <div id='timeline' className='w-full flex flex-col bg-dot-pattern bg-[length:75px_75px] md:flex-row justify-start'>
      <div className='max-w-screen-lg mx-auto p-4'>
        <h2 className='text-4xl text-center sm:text-5xl sm:text-center md:text-left'>Timeline</h2>
        <div className='w-full md:w-7/12 p-5 mx-auto pt-10'>
          {timeline.map(item => (
            <TimelineItem
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline