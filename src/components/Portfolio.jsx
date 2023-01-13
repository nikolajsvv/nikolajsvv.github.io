import React from 'react'
import portfolio from '../data/portfolio'
import PortfolioItem from './PortfolioItem'

function Portfolio() {
  return (
    <div id='portfolio' className='w-full md:h-screen pt-10'>
      <div className='max-w-screen-lg mx-auto p-4'>
        <h2 className='text-4xl p-2 text-center justify-start sm:text-5xl sm:text-left'>Portfolio</h2>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {portfolio.map(project => (
              <PortfolioItem
                imgUrl={project.imgUrl}
                title={project.title}
                stack={project.stack}
                workUrl={project.workUrl}
              />
            ))}
          </div>
        </div>
      </div>

    </div>


  )
}

export default Portfolio