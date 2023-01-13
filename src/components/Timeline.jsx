import React from 'react'
import timeline from '../data/timeline'
import TimelineItem from './TimelineItem'

function Timeline() {
  return (
    <div id='timeline' className='flex flex-col bg-dot-pattern bg-[length:75px_75px] md:flex-row justify-center'>
      <div className='w-full md:w-7/12 p-5 mx-auto h-screen pt-10'>
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
  )
}

export default Timeline