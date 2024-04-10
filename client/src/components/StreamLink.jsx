// components/StreamLink.jsx
import React from 'react';
import { Html } from '@react-three/drei';

const StreamLink = ({ logo, url, serviceName }) => {
  return (
    <Html center>
      <div className="stream-link">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={logo} alt={`${serviceName} logo`} style={{ width: '100px' }} />
          <p>Listen on {serviceName}</p>
        </a>
      </div>
    </Html>
  );
};

export default StreamLink;