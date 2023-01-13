import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <FaLinkedin size={30}/>
      ),
      href: 'https://www.linkedin.com/in/nikolajsveidis/'
    },
    {
      id: 2,
      child: (
        <FaGithub size={30}/>
      ),
      href: 'https://github.com/nikolajsvv'
    },
    {
      id: 3,
      child: (
        <MdEmail size={30}/>
      ),
      href: 'mailto:nikolajsvv@gmail.com'
    },
  ];
  
  return (
    // flex flex-col top-[35%] left-0 fixed
    <div className='flex justify-center items-center fixed p-4 rounded-2xl bottom-0 lg:left-0'>
      <ul className='flex gap-4 md:flex-col'>
        {links.map(({id, child, href}) => (
          <li key={id} className='flex hover:scale-105'>
            <a href={href}  
            target='_blank' 
            rel="noreferrer">
            {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks