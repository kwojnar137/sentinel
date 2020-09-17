import React, { useState, useEffect } from "react";

function Signpost({ direction, signpostControl, setSignpostControl }) {
  const [color, setColor] = useState("#153b63");
  const [active, setActive] = useState(false);
  const [tick, setTick] = useState(false);
  const colorDefault = "#153b63";
  const colorHover = "#1E4F82";
  const colorActive = "#2D9B3C";

  useEffect(() => {
    if (signpostControl !== direction) {
      setActive(false);
      setColor(colorDefault);
    }
    if (active && signpostControl === direction) {
      const interval = setInterval(() => {
        if (tick === true) {
          setColor(colorActive);
        }
        if (tick === false) {
          setColor(colorDefault);
        }
        setTick((tick) => !tick);
      }, 600);
      return () => clearInterval(interval);
    }
  }, [tick, active]);

  function handleEnter() {
    if (active === false) {
      setColor(colorHover);
    }
  }

  function handleLeave() {
    if (active === false) {
      setColor(colorDefault);
    }
  }

  function handleClick() {
    if (direction === "left") {
      setSignpostControl("left");
    }
    if (direction === "right") {
      setSignpostControl("right");
    }
    if (color !== colorActive && active !== true) {
      setColor(colorActive);
    }
    setActive(!active);
  }

  return (
    <div className="signpost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="47.7"
        height="32.6"
        viewBox="0 0 47.7 32.6"
      >
        {direction === "left" ? (
          <path
            id="XMLID_302_"
            d="M618.4,307.2H594.6v-8l-23.9,16.3,23.9,16.3v-8.1h23.8Z"
            transform="translate(-570.7 -299.2)"
            fill={color}
            fillRule="evenodd"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onClick={handleClick}
          />
        ) : (
          <path
            id="XMLID_299_"
            d="M780.3,307.2h23.8v-8L828,315.5l-23.9,16.3v-8.1H780.3Z"
            transform="translate(-780.3 -299.2)"
            fill={color}
            fillRule="evenodd"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onClick={handleClick}
          />
        )}
      </svg>
    </div>
  );
}

export default Signpost;
