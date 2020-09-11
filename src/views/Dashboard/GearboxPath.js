import React from "react";

function GearboxPath({ setIsOnPath }) {
  return (
    <>
      <g transform="translate(48 48)">
        <line
          id="line1"
          y2="104"
          fill="none"
          stroke="#707070"
          strokeWidth="6"
          // onPointerOver={() => console.log("i'm on")}
          // onPointerOut={() => console.log("i'm out")}
          onPointerOver={() => setIsOnPath(true)}
          onPointerOut={() => setIsOnPath(false)}
        />
        <line
          id="line2"
          x2="105"
          transform="translate(0 52)"
          fill="none"
          stroke="#707070"
          strokeWidth="6"
          onPointerOver={() => setIsOnPath(true)}
          onPointerOut={() => setIsOnPath(false)}
        />
        <line
          id="line3"
          y2="104"
          transform="translate(105.5 0.5)"
          fill="none"
          stroke="#707070"
          strokeWidth="6"
          onPointerOver={() => setIsOnPath(true)}
          onPointerOut={() => setIsOnPath(false)}
        />
        <line
          id="line4"
          y2="104"
          transform="translate(52.5 0.5)"
          fill="none"
          stroke="#707070"
          strokeWidth="6"
          onPointerOver={() => setIsOnPath(true)}
          onPointerOut={() => setIsOnPath(false)}
        />
      </g>
    </>
  );
}

export default GearboxPath;
