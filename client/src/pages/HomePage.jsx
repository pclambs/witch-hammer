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
      {/* ... your other DOM content for home page ... */}
    </div>
  )
}

export default HomePage