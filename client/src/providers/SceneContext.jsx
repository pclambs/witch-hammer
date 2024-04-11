// SceneContext.jsx
import React, { createContext, useState, useContext, useCallback } from 'react'

const SceneContext = createContext({
  currentScene: null, // Initial state can be null or a default component
  changeScene: () => {}, // Placeholder function
})

export const SceneProvider = ({ children }) => {
  const [currentScene, setCurrentScene] = useState(null) // Initial state is null

  const changeScene = useCallback((scene) => {
    setCurrentScene(scene) // Update the current scene
  }, []) // Empty dependency array means this function never changes

  return (
    <SceneContext.Provider value={{ currentScene, changeScene }}>
      {children}
    </SceneContext.Provider>
  )
}

export const useScene = () => useContext(SceneContext)