// pages/MusicPage.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import StreamLink from '../components/StreamLink';
import spotifyLogo from '../assets/icons/spotify.svg'; // Ensure this path is correct

const MusicPage = () => {
  return (
    <Canvas>
      {/* ... your other 3D objects ... */}
      <StreamLink
        logo={spotifyLogo}
        url="https://open.spotify.com/your-artist-page"
        serviceName="Spotify"
      />
      {/* You can add other StreamLink components or 3D objects here */}
    </Canvas>
  );
};

export default MusicPage;