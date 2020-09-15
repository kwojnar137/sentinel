import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Runtime from "./Runtime";
import Routes from "./Routes";

function App() {
  return (
    <>
      <Runtime />
      <Router basename="/sentinel">
        <Routes />
      </Router>
    </>
  );
}

export default App;
