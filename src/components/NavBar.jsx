import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-scroll' 


const NavBar = () => {

  const [nav, setNav] = useState(false)
  
  const pages = [
    {
      id: 1,
      link: 'about'  
    }, 
    {
      id: 2,
      link: 'portfolio'
    }, 
    {
      id: 3,
      link: 'skills'
    }, 
    {
      id: 4,
      link: 'timeline'
    }, 
  ];

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
    <div className="flex justify-between items-center w-full h-20 px-4 fixed">
      <div className='flex'>
        <ul className='flex gap-4 sm:flex-col sm:pt-20'>
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

      <ul className='hidden md:flex'>
        {pages.map(({id, link}) =>
          (<li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-00'><Link activeClass='active' smooth duration={750} spy to={link} >{link}</Link></li>
          ))}
      </ul>

      <div onClick={() => setNav(!nav) } className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

      {nav && (<ul className="flex flex-col justify-center items-center absolute top-3 right-2 h-100 p-5 bg-darkCamel text-camel">
        {pages.map(({id, link}) =>
            (<li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link activeClass='active-mobile' smooth duration={750} spy to={link}>{link}</Link></li>
        ))}
      </ul>)}

  
    </div>
  )  
}

export default NavBar