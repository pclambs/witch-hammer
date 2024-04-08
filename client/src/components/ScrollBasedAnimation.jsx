import React from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Scroll, ScrollControls } from '@react-three/drei'
import { Particles } from './Particles'
import Objects from './Objects'
import CovenPage from '../pages/CovenPage'

const ScrollBasedAnimation = () => {
  useFrame(({ mouse, camera }) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.03)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.8, 0.01)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, Math.max(4, Math.abs(mouse.x * mouse.y * 8)), 0.01)
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, mouse.x * -Math.PI * 0.025, 0.001)
  })

  return (
    <ScrollControls pages={3} damping={0.25}>
      <Scroll>
        <Particles />
        <Objects />
      </Scroll>
      <Scroll html>
        <CovenPage />
      </Scroll>
    </ScrollControls>
  )
}

export default ScrollBasedAnimation




// import React, { useContext } from 'react';
// import { useFrame } from '@react-three/fiber';
// import SceneContext from '../providers/SceneContext'; // Ensure correct path

// const ScrollBasedAnimation = () => {
//   const { currentPage } = useContext(SceneContext);

//   useFrame(() => {
//     // Example animation logic that could change based on currentPage
//   });

//   return (
//     <>
//       {/* Conditionally render different parts of the scene based on currentPage */}
//       {currentPage === 'home' && (
//         // Specific elements or animations for the home page
//       )}
//       {currentPage === 'music' && (
//         // Specific elements or animations for the music page
//       )}
//       {/* Additional conditions for other pages */}
//     </>
//   );
// };

// export default ScrollBasedAnimation;