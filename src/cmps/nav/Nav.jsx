import { AiOutlineHome } from 'react-icons/ai'
import { BiUser, BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { useState } from 'react'

export function Nav() {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}
        title='home' className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>

      <a href="#about" onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''} title='about'>
        <BiUser />
      </a>

      <a href="#experience" onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
        title='experience'> <BiBook />
      </a>

      <a href="#services" onClick={() => setActiveNav('#services')} className=
        {activeNav === '#services' ? 'active' : ''} title='services' >
        <RiServiceLine />
      </a>

      <a href="#contact" onClick={() => setActiveNav('#contact')} className=
        {activeNav === '#contact' ? 'active' : ''} title='contact'  >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}