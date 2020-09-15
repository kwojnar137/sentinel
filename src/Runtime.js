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

  useEffect(() => {
    function calcRpm() {
      if (gear != 0 && acceleration > 0 && clutching < 90) {
        // let calcDeltaRPM =
        //   ((5 * (acceleration / 5 - 10)) / gear) * -(rpm / 8000 - 1);

        let calcDeltaRPM = acceleration - acceleration * (rpm / 8000);
        console.log({ calcDeltaRPM });
        setDeltaRPM(calcDeltaRPM);
        if (rpm < 700) {
          setDeltaRPM(700);
        }
      }
      if ((gear != 0 && acceleration === 0) || clutching > 90) {
        let calcDeltaRPM = (-rpm / 160) * (rpm / 700 - 1);
        setDeltaRPM(calcDeltaRPM);
        console.log({ calcDeltaRPM });
      }
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
  // console.log({ deltaRPM });
  // console.log({ rpm });

  return <></>;
}
