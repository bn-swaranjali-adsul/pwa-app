import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PWAApp from './PwaApp';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={
          <div className="App">
            <h1>Hello, I'm a React PWA!</h1>
            {/* Add a clickable icon */}
            <a href="/pwaapp">
              <button style={{ fontSize: '16px', padding: '10px' }}>PWA App</button>
            </a>
          </div>
        } />
        <Route path="/pwaapp" element={<PWAApp />} />
      </Routes>
    </Router>
  );
}

export default App;