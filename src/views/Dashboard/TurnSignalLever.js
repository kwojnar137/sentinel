import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions";

function TurnSignalLever() {
  const signpost = useSelector((state) => state.signpostDirectionFromControl);
  const [position, setPostion] = useState(0);
  const dispatch = useDispatch();
  const downKey = 86;
  const middleKey = 70;
  const upKey = 82;

  const transform = `translate(104 100) rotate(${position})`;

  useEffect(() => {
    const keyFunction = (event) => {
      if (event.keyCode === downKey) {
        dispatch(allActions.signpost.setSignpost("left"));
        setPostion(-45);
      }
      if (event.keyCode === middleKey) {
        dispatch(allActions.signpost.setSignpost(null));
        setPostion(0);
      }
      if (event.keyCode === upKey) {
        dispatch(allActions.signpost.setSignpost("right"));
        setPostion(45);
      }
    };
    document.addEventListener("keydown", keyFunction, false);
    return () => {
      document.removeEventListener("keydown", keyFunction, false);
    };
  }, [signpost]);

  return (
    <div>
      <svg
        viewBox="0 0 120 200"
        width="120"
        height="200"
        style={{ backgroundColor: "#1f2269" }}
      >
        <g>
          <g>
            <line
              transform={transform}
              x2="-90"
              stroke="#707070"
              strokeLinecap="round"
              strokeWidth="6"
            />
          </g>
          <circle transform="translate(104 100)" r="16" fill="#000230" />
        </g>
      </svg>
    </div>
  );
}

export default TurnSignalLever;
