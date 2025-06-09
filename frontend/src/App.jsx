import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import V1l from './V1/v1.jsx';
import Viedo2 from './V1/V2.jsx'; // default/home
import Review from './V1/Review.jsx';
import Quick from './V1/Quick.jsx';
import Footer from './V1/QuickLink.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Viedo2 />} />

        {/* Additional Routes */}
        
        <Route path="/review" element={<Review />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
