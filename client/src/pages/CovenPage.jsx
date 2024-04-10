import React from 'react'
import { Html } from '@react-three/drei'

const CovenPage = () => {
  return (
    <>
      <mesh position={[2, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <Html center>
        <div className="coven-page-content">
          <h1>Witch</h1>
          <h1>Mafuckin'</h1>
          <h1>Hammer</h1>
          {/* Other HTML content here */}
        </div>
      </Html>
    </>
  )
}

export default CovenPage