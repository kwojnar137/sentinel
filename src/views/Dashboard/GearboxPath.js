import React from "react";

function GearboxPath() {
  return (
    <>
      <g transform="translate(48 48)">
        {/* 1 - 2 gear line */}
        <line
          id="gearLine1to2"
          y2="104"
          fill="none"
          stroke="#707070"
          strokeWidth="6"
        />
        {/* cross line */}
        <line
          id="crossLine"
          x2="105"
          transform="translate(0 52)"
          fill="none"
          stroke="#707070"
          strokeWidth="6"
        />
        {/* 5 - 6 gear line */}
        <line
          id="gearLine5to6"
          y2="104"
          transform="translate(105.5 0.5)"
          fill="none"
          stroke="#707070"
          strokeWidth="6"
        />
        {/* 3 - 4 gear line */}
        <line
          id="gearLine3to4"
          y2="104"
          transform="translate(52.5 0.5)"
          fill="none"
          stroke="#707070"
          strokeWidth="6"
        />
      </g>
    </>
  );
}

export default GearboxPath;
