import React, { useState } from 'react';
import './Reach.css'

function Reach({ data }) {
  const [hover, setHover] = useState(false);

  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px',
        backgroundColor: '#72a9db',
        padding: '5px',
        width: '270px',
        borderRadius: '10px',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        style={{
          width: '50px',
          margin: '10px',
          transition: 'transform 0.3s ease' // Smooth transition for image tilt
        }}
        src={data.image}
        alt="Content"
        // Apply the tilt effect when hovering
        className={hover ? 'tilt' : ''}
      />
      <div>
        <label style={{ fontSize: '30px', fontWeight: '700', color: hover ? 'red' : 'white' }}>
          {data.count}
        </label>
        <br />
        <label style={{ fontSize: '26px', color: hover ? 'red' : 'white' }}>
          {data.text}
        </label>
      </div>
    </div>
  );
}

export default Reach;
