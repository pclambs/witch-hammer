// HomePage.jsx
import React, { useEffect } from 'react';
import { useScene } from '../providers/SceneContext';
import HomeScene from '../components/HomeScene'; // This should be your 3D scene component for the home page

const HomePage = () => {
  const { changeScene } = useScene();

  useEffect(() => {
    changeScene(<HomeScene />); // Change the scene when the HomePage component mounts
  }, [changeScene]);

  return (
    <div>
      {/* ... your other DOM content for home page ... */}
    </div>
  );
};

export default HomePage;