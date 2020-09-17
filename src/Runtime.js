import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import allActions from "./redux/actions";

export default function Runtime() {
  const [tick, setTick] = useState(0);
  const [deltaRPM, setDeltaRPM] = useState(0);
  const [deltaSpeed, setDeltaSpeed] = useState(0);

  const speed = parseInt(useSelector((state) => state.speed));

  const acceleration = useSelector((state) => state.acceleration);
  const breaking = useSelector((state) => state.breaking);
  const clutching = useSelector((state) => state.clutching);
  const gear = useSelector((state) => state.gear);
  const rpm = useSelector((state) => state.rpm);

  const dispatch = useDispatch();

  useEffect(() => {
    function calcSpeed() {
      if (speed < 0) {
        dispatch(allActions.speed.correctSpeed());
      }
      if (deltaRPM > 0 && gear !== 0 && speed >= 0) {
        let calcDeltaSpeed =
          (deltaRPM / 100) * (1 - 1 * (speed / (gear * gear * 20)));
        calcDeltaSpeed = calcDeltaSpeed - breaking / 100;
        if (calcDeltaSpeed < 0) {
          let calcDeltaRPM = acceleration - acceleration * (rpm / 8000);
          calcDeltaRPM = (calcDeltaRPM * 3) / gear;
          setDeltaRPM(calcDeltaRPM);
          dispatch(allActions.rpm.incrementRpm(deltaRPM));
        }
        setDeltaSpeed(calcDeltaSpeed);
        dispatch(allActions.speed.incrementSpeed(deltaSpeed));
      } else if (speed > 0) {
        dispatch(allActions.speed.decrementSpeed(-(0.1 + breaking / 100)));
      }
    }

    function calcRpm() {
      if (gear !== 0 && acceleration > 0 && clutching < 90) {
        let calcDeltaRPM = acceleration - acceleration * (rpm / 8000);
        calcDeltaRPM = (calcDeltaRPM * 1) / gear;
        setDeltaRPM(calcDeltaRPM);
        if (rpm < 700) {
          setDeltaRPM(700);
        }
      }
      if (gear === 0 || acceleration === 0 || clutching > 90) {
        let calcDeltaRPM = (-rpm / 160) * (rpm / 700 - 1);
        setDeltaRPM(calcDeltaRPM);
      }
      if (deltaRPM > 0) {
        dispatch(allActions.rpm.incrementRpm(deltaRPM));
      } else {
        dispatch(allActions.rpm.decrementRpm(deltaRPM));
      }
    }
    calcRpm();
    calcSpeed();
  }, [tick]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((tick) => !tick);
    }, 33);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {}, []);
  return <></>;
}
