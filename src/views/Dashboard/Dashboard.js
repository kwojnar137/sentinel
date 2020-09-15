import React, { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../Layout/Layout";
import Speedometer from "./Speedometer";
import Tachometer from "./Tachometer";
import InfoArea from "./InfoArea";

import Accelerator from "./Accelerator";
import Break from "./Break";
import Clutch from "./Clutch";

import Gearbox from "./Gearbox";
import "./dashboard.scss";

const Dashboard = () => {
  const [carSpeed, setCarSpeed] = useState(0);
  const [engineSpeed, setEngineSpeed] = useState(0);
  const [range, setRange] = useState(230);
  const [temp, setTemp] = useState(20);
  const [fuel, setFuel] = useState(80);
  // const speed = useSelector((state) => state.speed);
  const acceleration = useSelector((state) => state.acceleration);
  const breaking = useSelector((state) => state.breaking);
  const clutching = useSelector((state) => state.clutching);
  const gear = useSelector((state) => state.gear);
  const rpm = useSelector((state) => state.rpm);

  const date = new Date();

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
            <Speedometer speed={carSpeed} />
            <Tachometer engineSpeed={rpm} gear={gear} />
            <InfoArea range={range} date={date} temp={temp} fuel={fuel} />
          </g>
        </svg>
      </div>
      <div className="control">
        <label>Speed</label>
        <input
          type="text"
          value={carSpeed}
          onChange={(e) => setCarSpeed(e.target.value)}
        />
        <label>Fuel [%]:</label>
        <input
          type="text"
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
        />
        <label>Temp</label>
        <input
          type="text"
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
        />
        <label>Range</label>
        <input
          type="text"
          value={range}
          onChange={(e) => setRange(e.target.value)}
        />
        <label>Engine Speed</label>
        <input
          type="text"
          value={engineSpeed}
          onChange={(e) => setEngineSpeed(e.target.value)}
        />
      </div>
      <div className="controlGui">
        <div className="clutch">
          <h2>Clutch</h2>
          <Clutch />

          <h3>{clutching}</h3>
        </div>
        <div className="break">
          <h2>Break</h2>
          <Break />
          <h3>{breaking}</h3>
        </div>

        <div className="accelerator">
          <h2>Accelerator</h2>
          <Accelerator />

          <h3>{acceleration}</h3>
        </div>
        <div className="gearbox">
          <h2>Gearbox</h2>
          <Gearbox />
          <h3>{gear}</h3>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
