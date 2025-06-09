import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Viedo2 from './V1/V2.jsx'; // default/home


function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Viedo2 />} />

      </Routes>
    </Router>
  );
}

export default App;
