import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Signposts({ direction }) {
  const [color, setColor] = useState("#153b63");
  const [tick, setTick] = useState(false);
  const [pullUp, setPullUp] = useState(true);

  const colorDefault = "#153b63";
  const colorActive = "#2D9B3C";
  const signpostDirectionFromControl = useSelector(
    (state) => state.signpostDirectionFromControl
  );

  useEffect(() => {
    if (direction !== signpostDirectionFromControl) {
      setColor(colorDefault);
      setPullUp(true);
    }
    if (direction === signpostDirectionFromControl && pullUp) {
      setColor(colorActive);
      setPullUp(false);
    }
    if (direction === signpostDirectionFromControl) {
      const interval = setInterval(() => {
        if (tick === false) {
          setColor(colorActive);
        }
        if (tick === true) {
          setColor(colorDefault);
        }
        setTick((tick) => !tick);
      }, 600);
      return () => clearInterval(interval);
    }
  }, [tick, signpostDirectionFromControl]);

  return (
    <>
      {direction === "left" ? (
        <path
          d="M618.4,307.2H594.6v-8l-23.9,16.3,23.9,16.3v-8.1h23.8Z"
          transform="translate(-196.5 -293)"
          fill={color}
          fillRule="evenodd"
        />
      ) : (
        <path
          d="M780.3,307.2h23.8v-8L828,315.5l-23.9,16.3v-8.1H780.3Z"
          transform="translate(-196.5 -293)"
          fill={color}
          fillRule="evenodd"
        />
      )}
    </>
  );
}

export default Signposts;
