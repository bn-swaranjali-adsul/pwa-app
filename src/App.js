import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PWAApp from './PwaApp';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={
          <div className="App">
            <h1>Hello, I'm a React PWA!</h1>
            {/* Add a clickable icon */}
            <Link to ="/pwaapp">
              <button style={{ fontSize: '16px', padding: '10px' }}>PWA App</button>
            </Link>
          </div>
        } />
        <Route path="/pwaapp" element={<PWAApp />} />

      </Routes>
    </Router>
  );
}

export default App;