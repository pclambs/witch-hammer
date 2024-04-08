import React from 'react';
import { Canvas } from '@react-three/fiber';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import HomePage from './pages/HomePage'; // Assuming this is a 3D scene component
import CovenPage from './pages/CovenPage'; // Assuming this is another 3D scene component
import './styles.css';
import { NavProvider } from './providers/NavContext';

const App = () => {
  return (
    <Router>
      <NavProvider>
        <Header />
        <Nav />
      </NavProvider>
      <Canvas camera={{ position: [2, 2, 2], fov: 35 }} className="canvas">
        <ambientLight intensity={1}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coven" element={<CovenPage />} />
          {/* More routes as needed */}
        </Routes>
      </Canvas>
    </Router>
  );
};

export default App;