import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'


function App() {
  return (
    <Router basename="/sentinel">
      <Routes />
    </Router>
  );
}

export default App;
