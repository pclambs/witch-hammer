// main.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { SceneProvider } from './providers/SceneContext'
import { router } from './routes/router'
import App from './App'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SceneProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </SceneProvider>
)