// src/components/CrimeMap.jsx
import React, { useEffect, useRef } from 'react';

const CrimeMap = ({ lat,lng }) => {
 const handleClick = () => {
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, '_blank'); 
  };

  return (
    <button style={{background:"green",color:"white",padding:"7px",border:"none",borderRadius:"10px",marginRight:"10px"}} onClick={handleClick}>
      Show Map
    </button>
  );
};


export default CrimeMap;
