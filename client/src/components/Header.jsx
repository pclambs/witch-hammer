import React, { useContext } from 'react'
import NavContext from '../providers/NavContext'
import witchHammerFont from '../assets/witch-hammer-font-color.png'

const Header = () => {
  const { toggleNav } = useContext(NavContext)
  
  return (
    <header>
      <button onClick={toggleNav}>burger</button> 
      <img src={witchHammerFont} alt='Witch Hammer logo' className='header-logo large' />
    </header>
  )
}

export default Header