import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./css/basic.css";

import Registration from "./pages/Registration";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
      </Routes>
    </Router>
  );
};

export default App;
