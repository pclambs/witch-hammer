import { Html as DreiHtml } from '@react-three/drei'

const CovenPage = () => {
  return (
    <>
      <mesh position={[2, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <DreiHtml center>
        <div className="coven-page-content">
          <h1>Witch</h1>
          <h1>Mafuckin'</h1>
          <h1>Hammer</h1>
          {/* Other HTML content here */}
        </div>
      </DreiHtml>
    </>
  )
}

export default CovenPage