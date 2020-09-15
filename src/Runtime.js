import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import allActions from "./redux/actions";

export default function Runtime() {
  const [tick, setTick] = useState(0);
  const [deltaRPM, setDeltaRPM] = useState(0);

  const speed = useSelector((state) => state.speed);
  const acceleration = useSelector((state) => state.acceleration);
  const breaking = useSelector((state) => state.breaking);
  const clutching = useSelector((state) => state.clutching);
  const gear = useSelector((state) => state.gear);
  const rpm = useSelector((state) => state.rpm);
  const dispatch = useDispatch();

  const h = 100;

  function calcRpm() {
    // console.log("tu");
    // console.log(gear);
  }

  useEffect(() => {
    function calcRpm() {
      if (gear != 0) {
        // let calcDeltaRPM = ((acceleration / 5 - 10) * 2) / gear;
        // let calcDeltaRPM =
        //   (((acceleration * 5 - 10) * 2) / gear) * (rpm / 8000 - 1);

        // let calcDeltaRPM = ((acceleration / 5 - 10) / gear) * -(rpm / 8000 - 1);
        let calcDeltaRPM =
          ((5 * (acceleration / 5 - 10)) / gear) * -(rpm / 8000 - 1);

        // * (rpm / 8000 - 1) -(rpm / 8000 - 1);
        console.log(rpm / 8000 - 1);

        console.log({ calcDeltaRPM });
        if (rpm <= 700) {
          calcDeltaRPM = calcDeltaRPM + 100;
        }

        if (rpm <= 700) {
          calcDeltaRPM = calcDeltaRPM + 100;
        }
        // if (rpm >= 8000) {
        //   calcDeltaRPM = 0;
        // }
        setDeltaRPM(calcDeltaRPM);
      }
      // else if (rpm > 700 && acceleration < 10) {
      //   setDeltaRPM(-10);
      // } else {
      //   setDeltaRPM(0);
      // }
      if (deltaRPM > 0) {
        dispatch(allActions.rpm.incrementRpm(deltaRPM));
      } else {
        dispatch(allActions.rpm.decrementRpm(deltaRPM));
      }
    }
    calcRpm();
  }, [tick]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((tick) => !tick);
    }, 33);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {}, []);

  // console.log({acceleration});
  console.log({ deltaRPM });
  console.log({ rpm });

  return <></>;
}
