import React, { useContext } from 'react'
import NavContext from '../providers/NavContext'
import { Link, useLocation } from "react-router-dom"

const Nav = () => {
  const { isMinimized, toggleNav } = useContext(NavContext)
  const location = useLocation()

  return (
    <nav className={`fixed-nav ${isMinimized ? 'minimized' : ''}`}>
      {/* Navigation content */}
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}><span>HOME</span></Link>
				<Link to="/music" className={location.pathname === '/music' ? 'active' : ''}><span>MUSIC</span></Link>
				<Link to="/store" className={location.pathname === '/store' ? 'active' : ''}><span>STORE</span></Link>
				<Link to="/videos" className={location.pathname === '/videos' ? 'active' : ''}><span>VIDEOS</span></Link>
				<Link to="/shows" className={location.pathname === '/shows' ? 'active' : ''}><span>SHOWS</span></Link>
				<Link to="/coven" className={location.pathname === '/coven' ? 'active' : ''}><span>JOIN THE COVEN</span></Link>
    </nav>
  )
}

export default Nav



// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import SceneContext from '../providers/SceneContext'; // Ensure correct path

// const Nav = () => {
//   const { changePage } = useContext(SceneContext);

//   const handleNavClick = (page) => {
//     changePage(page);
//   };

//   return (
//     <nav>
//       <Link to="/" onClick={() => handleNavClick('home')}>Home</Link>
//       <Link to="/music" onClick={() => handleNavClick('music')}>Music</Link>
//       {/* Additional links */}
//     </nav>
//   );
// };