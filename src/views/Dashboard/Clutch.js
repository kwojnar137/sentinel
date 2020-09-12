import React, { useCallback, useEffect } from "react";

function Clutch() {
  const keyFunction = useCallback((event) => {
    if (event.keyCode === 88) {
      console.log("yout pressed x");
      //Do whatever when esc is pressed
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keyFunction, false);

    return () => {
      document.removeEventListener("keydown", keyFunction, false);
    };
  }, []);

  return <div></div>;
}

export default Clutch;
