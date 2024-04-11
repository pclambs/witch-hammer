// HomePage.jsx
import React, { useEffect } from 'react'
import { useScene } from '../providers/SceneContext'
import HomeScene from '../components/HomeScene'

const HomePage = () => {
  const { changeScene } = useScene()

  useEffect(() => {
    changeScene(<HomeScene />)
  }, [changeScene])

  return (
    <div>
      {/* Any non-3D content you want to display on the HomePage */}
      <h1>Welcome to the Home Page</h1>
      {/* Other components or content */}
    </div>
  )
}

export default HomePage