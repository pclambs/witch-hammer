// /providers/NavContext.jsx
import React, { useState, createContext } from 'react'

const NavContext = createContext({
  isMinimized: false,
  toggleNav: () => {}
})

export const NavProvider = ({ children }) => {
  const [isMinimized, setIsMinimized] = useState(false)

  const toggleNav = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <NavContext.Provider value={{ isMinimized, toggleNav }}>
      {children}
    </NavContext.Provider>
  )
}

export default NavContext