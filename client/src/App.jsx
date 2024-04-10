// App.jsx
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import HomePage from './pages/HomePage'
import CovenPage from './pages/CovenPage'
import './styles.css'
import { NavProvider } from './providers/NavContext'
import { useScene } from './providers/SceneContext'

const CanvasWrapper = () => {
  const { currentScene } = useScene() // Use the current scene from context

  return (
    <Canvas camera={{ position: [2, 2, 2], fov: 35 }}>
      <ambientLight intensity={1} />
      {currentScene} {/* Render the current scene */}
    </Canvas>
  )
}

const App = () => {
  return (
      <NavProvider>
        <Header />
        <Nav />
        <CanvasWrapper />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coven" element={<CovenPage />} />
        </Routes>
      </NavProvider>
  )
}

export default App