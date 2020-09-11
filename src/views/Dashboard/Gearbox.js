import React, { useState } from "react";
import GearboxPath from "./GearboxPath";

function isOnPath(x, y) {}

function GearShiftKnob({ isOnPath }) {
  const [position, setPosition] = useState({
    x: 100,
    y: 100,
    active: false,
    offset: {},
  });

  const handlePointerDown = (e) => {
    const el = e.target;
    const bbox = e.target.getBoundingClientRect();
    const x = e.clientX - bbox.left;
    const y = e.clientY - bbox.top;
    el.setPointerCapture(e.pointerId);
    setPosition({
      ...position,
      active: true,
      offset: {
        x,
        y,
      },
    });
  };

  const handlePointerMove = (e) => {
    const bbox = e.target.getBoundingClientRect();
    const x = e.clientX - bbox.left;
    const y = e.clientY - bbox.top;
    // const onPath = isOnPath(x, y)
    console.log(isOnPath);
    if (position.active && isOnPath) {
      setPosition({
        ...position,
        x: position.x - (position.offset.x - x),
        y: position.y - (position.offset.y - y),
      });
    }
  };
  const handlePointerUp = (e) => {
    setPosition({
      ...position,
      active: false,
    });
  };

  return (
    <circle
      cx={position.x}
      cy={position.y}
      r={16}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      fill={position.active ? "blue" : "black"}
    />
  );
}

const Gearbox = () => {
  const [isOnPath, setIsOnPath] = useState(false);
  return (
    <svg
      viewBox="0 0 200 200"
      width="200"
      height="200"
      style={{ backgroundColor: "#1f2269" }}
    >
      <GearboxPath setIsOnPath={setIsOnPath} />
      <GearShiftKnob isOnPath={isOnPath} />
      {/* <Circle /> */}
    </svg>
  );
};

export default Gearbox;
