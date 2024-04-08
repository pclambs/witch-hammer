import { useEffect } from 'react';
import { useScene } from '../providers/SceneContext';

const HomePage = () => {
  const { setCurrentScene } = useScene();
  
  useEffect(() => {
    setCurrentScene(
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="royalblue" />
      </mesh>
    );
  }, [setCurrentScene]);
  
  return null; // Render logic is handled by the SceneRenderer within Canvas
};

export default HomePage