import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../../Layout/Layout";
import Speedometer from "./Speedometer";
import Tachometer from "./Tachometer";
import InfoArea from "./InfoArea";
import VerticalSlider from "../../components/VerticalSlider";

import Accelerator from "./Accelerator";
import Break from "./Break";
import Clutch from "./Clutch";
import Gearbox from "./Gearbox";
import Signpost from "./Signpost";

import "./dashboard.scss";

const Dashboard = () => {
  const [range, setRange] = useState(350);
  const [temp, setTemp] = useState(20);
  const [fuel, setFuel] = useState(50);
  const [signpostControl, setSignpostControl] = useState(null);

  const gear = useSelector((state) => state.gear);
  const rpm = useSelector((state) => state.rpm);
  const speed = useSelector((state) => state.speed);
  const maxTankCapacity = 700;

  const date = new Date();

  useEffect(() => {
    const newRange = (fuel / 100) * maxTankCapacity;
    setRange(parseInt(newRange));
  }, [fuel]);

  return (
    <Layout>
      <div className="dashboard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1016"
          height="423"
          viewBox="0 0 1016 423"
        >
          <g transform="translate(4.5 4.5)">
            <Speedometer speed={parseInt(speed)} />
            <Tachometer engineSpeed={rpm} gear={gear} />
            <InfoArea range={range} date={date} temp={temp} fuel={fuel} />
          </g>
        </svg>
      </div>
      <div className="controlGui">
        <div className="clutch">
          <h2>Clutch</h2>
          <Clutch />
          <h2> a - release </h2>
          <h2> z - push </h2>
        </div>
        <div className="break">
          <h2>Break</h2>
          <Break />
          <h2> s - release </h2>
          <h2> x - push </h2>
        </div>

        <div className="accelerator">
          <h2>Accelerator</h2>
          <Accelerator />
          <h2> d - release </h2>
          <h2> c - push </h2>
        </div>
        <div className="gearbox">
          <h2>Gearbox</h2>
          <Gearbox />
          <h2> drag & drop</h2>
        </div>
        <div className="verticalSlider">
          <VerticalSlider
            type="range"
            orient="vertical"
            min="1"
            max="100"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
          />
          <h3>Temp.</h3>
        </div>
        <div className="verticalSlider">
          <VerticalSlider
            type="range"
            orient="vertical"
            min="1"
            max="100"
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
          />
          <h3>Fuel</h3>
        </div>
        <div className="controlSignposts">
          <Signpost
            direction={"left"}
            signpostControl={signpostControl}
            setSignpostControl={setSignpostControl}
          />
          <Signpost
            direction={"right"}
            signpostControl={signpostControl}
            setSignpostControl={setSignpostControl}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
