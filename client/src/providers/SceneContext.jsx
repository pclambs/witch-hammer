// SceneContext.jsx
import React, { createContext, useState, useContext } from 'react'

const SceneContext = createContext({
  currentScene: null, // Initial state can be null or a default component
  changeScene: () => {}, // Placeholder for changing the scene
});

export const SceneProvider = ({ children }) => {
  const [currentScene, setCurrentScene] = useState(null) // Initial state is null

  const changeScene = (scene) => {
    setCurrentScene(scene) // Update the current scene
  }

  return (
    <SceneContext.Provider value={{ currentScene, changeScene }}>
      {children}
    </SceneContext.Provider>
  )
}

export const useScene = () => useContext(SceneContext)