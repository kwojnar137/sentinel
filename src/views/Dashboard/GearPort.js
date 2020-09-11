import React from "react";

function GearPort({ x, y, active }) {
  return (
    <>
      <g>
        <circle cx={x} cy={y} r={16} fill={active ? "green" : "#000230"} />
      </g>
    </>
  );
}

export default GearPort;
