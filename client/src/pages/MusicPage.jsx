// pages/MusicPage.jsx
import React from 'react'
import StreamLink from '../components/StreamLink'
import spotifyLogo from '../assets/icons/spotify.svg'


const MusicPage = () => {
  return (
    <>
      {/* ... your other 3D objects ... */}
      <StreamLink
        logo={spotifyLogo}
        url="https://open.spotify.com/your-artist-page"
        serviceName="Spotify"
      />
      {/* You can add other StreamLink components or 3D objects here */}
    </>
  )
}

export default MusicPage