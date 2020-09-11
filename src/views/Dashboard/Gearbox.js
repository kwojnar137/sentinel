import React, { useState } from "react";
import GearboxPath from "./GearboxPath";

function between(x, y, xMin, xMax, yMin, yMax, offset) {
  return (
    x >= xMin - offset &&
    x <= xMax + offset &&
    y >= yMin - offset &&
    y <= yMax + offset
  );
}

function isOnPath(x, y, stack, border) {
  const offset = 5;
  console.log(x);
  console.log(y);
  if (between(x, y, 48, 153.5, 100, 100, offset)) {
    const relativeToMean = y > 100 ? "upper" : "lower";
    return { allowed: true, border: "vertical", newStack: relativeToMean };
  }
  return { allowed: false, border: border, newStack: stack };
}

function GearShiftKnob() {
  const [stack, setStack] = useState(null);
  const [border, setBorder] = useState("vertical");

  const [position, setPosition] = useState({
    x: 100,
    y: 100,
    active: false,
    offset: {},
  });

  const isOnMap = isOnPath(position.x, position.y, stack, border);

  console.log(isOnMap.newStack);

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
    // console.log(x);
    // console.log(y);

    if (position.active && isOnMap.allowed === true) {
      setStack(isOnMap.newStack);
      setPosition({
        ...position,
        x: position.x - (position.offset.x - x),
        y: position.y - (position.offset.y - y),
      });
    }

    if (position.active && isOnMap.allowed === false) {
      if (border === "vertical") {
        if (stack === "lower") {
          console.log("accident");
          setPosition({
            ...position,
            x: position.x - (position.offset.x - x),
          });
        }
        if (stack === "upper") {
          console.log("accident");
          setPosition({
            ...position,
            x: position.x - (position.offset.x - x),
          });
        }
      }
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
  return (
    <svg
      viewBox="0 0 200 200"
      width="200"
      height="200"
      style={{ backgroundColor: "#1f2269" }}
    >
      <GearboxPath />
      <GearShiftKnob />
      {/* <Circle /> */}
    </svg>
  );
};

export default Gearbox;
