import React, { useContext } from 'react'
// import { Html } from '@react-three/drei'
import NavContext from '../providers/NavContext'
import witchHammerFont from '../assets/witch-hammer-font-color.png'
// ... other imports

const Header = () => {
  const { toggleNav } = useContext(NavContext)
  
  return (
    // <Html position={[0, 0, 0]} transform occlude>
      <header>
        <button onClick={toggleNav}>burger</button> 
        <img src={witchHammerFont} alt='Witch Hammer logo' className='header-logo large' />
        {/* ... other header content ... */}
      </header>
    // </Html>
  )
}

export default Header