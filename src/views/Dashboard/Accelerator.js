import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions";

function Accelerator() {
  const acceleration = useSelector((state) => state.acceleration);
  const dispatch = useDispatch();
  const step = 4;
  const pushPedalKey = 67;
  const raisePedalKey = 68;

  useEffect(() => {
    const keyFunction = (event) => {
      if (event.keyCode === pushPedalKey) {
        if (acceleration >= 0 && acceleration <= 100 - step) {
          dispatch(allActions.acceleration.incrementAcceleration(step));
        }
      }
      if (event.keyCode === raisePedalKey) {
        if (acceleration <= 100 && acceleration >= 0 + step) {
          dispatch(allActions.acceleration.decrementAcceleration(step));
        }
      }
    };
    document.addEventListener("keydown", keyFunction, false);
    return () => {
      document.removeEventListener("keydown", keyFunction, false);
    };
  }, [acceleration]);

  return (
    <>
      <svg
        viewBox="0 0 200 200"
        width="200"
        height="200"
        style={{ backgroundColor: "#1f2269" }}
      >
        <g transform="translate(0 0)">
          <g
            id="accelerator"
            transform={`translate(50 50) rotate(${
              (acceleration / 100) * 45
            }, 29.755, 9.78)`}
          >
            <g
              id="Ellipse_19"
              transform="translate(21.755 1.78)"
              fill="#fff"
              stroke="#707070"
              strokeLinecap="round"
              strokeWidth="6"
            >
              <circle cx="8" cy="8" r="8" stroke="#000230" />
              {/* Rotate arm  join */}
              <circle cx="8" cy="8" r="5" fill="#000230" />
            </g>
            <line
              id="Line_13"
              y2="22"
              transform="translate(30.255 17.28)"
              fill="none"
              stroke="#707070"
              strokeLinecap="round"
              strokeWidth="6"
            />
            <line
              id="Line_14"
              x1="53.993"
              y1="23.685"
              transform="translate(30.255 39.28)"
              fill="none"
              stroke="#707070"
              strokeLinecap="round"
              strokeWidth="6"
            />
            <g
              id="Rectangle_3"
              transform="matrix(0.906, 0.423, -0.423, 0.906, 67.721, 49.487)"
              fill="#fff"
              stroke="#707070"
              strokeLinecap="round"
              strokeWidth="6"
            >
              <rect id="fill" width="22" height="5" stroke="'none" />
              <path
                d="M0,2h22M19,0v5M22,3h-22M3,5v-5"
                fill="#000230"
                clipPath="url(#clip)"
              />
            </g>
            <g
              id="Ellipse_20"
              transform="translate(76.755 57.78)"
              fill="#fff"
              stroke="#707070"
              strokeLinecap="round"
              strokeWidth="6"
            ></g>
          </g>
        </g>
        <g transform="translate(50 50)">
          {/* upper line */}
          <line
            id="Line_16"
            y1="51"
            fill="none"
            stroke="#000230"
            strokeLinecap="round"
            strokeWidth="6"
          />
          {/* middle line */}
          <line
            id="Line_15"
            x2="31"
            y2="53"
            transform="translate(0 51)"
            fill="none"
            stroke="#000230"
            strokeLinecap="round"
            strokeWidth="6"
          />
          {/* down line */}
          <path
            id="Path_4"
            d="M0,0H65"
            transform="translate(31 104)"
            fill="none"
            stroke="#000230"
            strokeLinecap="round"
            strokeWidth="6"
          />
        </g>
      </svg>
    </>
  );
}

export default Accelerator;
