import React, { useEffect, useState } from 'react'
import { SlArrowDown } from 'react-icons/sl'

function Footer() {
  const [hideArrow, setHideArrow] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        setHideArrow(true);
      } else {
        setHideArrow(false);
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className={`${hideArrow ? 'hidden' : ''} flex justify-center text-3xl fixed inset-x-0 bottom-0 p-4 animate-bounce`}>
      <SlArrowDown/>
    </footer>
  )
}

export default Footer