import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

function App() {
  // const [tick, setTick] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTick((tick) => !tick);
  //   }, 33);
  //   return () => clearInterval(interval);
  // }, []);

  // console.log(tick);

  return (
    <Router basename="/sentinel">
      <Routes />
    </Router>
  );
}

export default App;
