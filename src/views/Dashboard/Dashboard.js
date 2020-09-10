import React, { useState } from "react";
import Layout from "../../Layout/Layout";
// import { ReactComponent as DashboardVector } from "../../media/svg/Dashboard.svg";
// import Speedometer from "../../media/svg/Speedometer";
import Speedometer from "./Speedometer";
import Tachometer from "./Tachometer";
import InfoArea from "./InfoArea";

import "./dashboard.scss";

const Dashboard = () => {
  const [carSpeed, setCarSpeed] = useState(0);
  const actualEngineSpeed = 8000;
  const actualGear = 2;

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
            <Tachometer engineSpeed={actualEngineSpeed} gear={actualGear} />
            <InfoArea />
          </g>
        </svg>
      </div>
      <div className="control">
        <input
          type="text"
          value={carSpeed}
          onChange={(e) => setCarSpeed(e.target.value)}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
