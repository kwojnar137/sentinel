import React, { useCallback, useEffect } from "react";

function Break() {
  const keyFunction = useCallback((event) => {
    if (event.keyCode === 90) {
      console.log("yout pressed z");
      //Do whatever when esc is pressed
    }
    if (event.keyCode === 83) {
      console.log("yout pressed s");
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

export default Break;
