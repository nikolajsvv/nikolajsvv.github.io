import React from 'react'

function PortfolioItem({imgUrl, title, stack, workUrl }) {
  return (
    <div className='shadow-lg shadow-[#292823] rounded-md overflow-hidden hover:scale-105 duration-300'>
      <a href={workUrl} target='_blank' rel="noreferrer">
        <img 
          src={imgUrl} 
            alt='portfolio'
            className='w-full h-36 md:h-48 object-cover cursor-pointer'
        />
      </a>
        <div className='w-full p-4'>
          <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>{title}</h3>
          <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
            {stack.map(item => (
              <span className='inline-block px-2 py-1 font-semibold border-2 border-[#292823] rounded-md'>
                {item}
              </span>
            ))}
          </p>
        </div>  
      
    </div>

  )
}

export default PortfolioItem