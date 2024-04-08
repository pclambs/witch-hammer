// import Nav from './Nav'

import witchHammer from '../assets/witch-hammer.png'
import wh from '../assets/wh.png'
import witchHammerFont from '../assets/witch-hammer-font-color.png'
import burgerMenu from '../assets/icons/hamburger-menu.png'
import exitMenu from '../assets/icons/exit.png'

import React, { useContext } from 'react'
import NavContext from '../providers/NavContext'

const Header = () => {
  const { toggleNav } = useContext(NavContext)
  
  return (
    <header>
      <button onClick={toggleNav}>burger</button> 
      <img src={witchHammerFont} alt='Witch Hammer logo' className='header-logo large' />
      {/* ... other header content ... */}
    </header>
  )
}

export default Header