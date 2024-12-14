import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MarsIntro from './Pages/MarsPath/MarsIntro';
import MarsGame from './Pages/MarsPath/MarsGame';
import MarsEndings from './Pages/MarsPath/MarsEndings';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<MarsIntro />} />
        {/* <Route path="/mars-game" element={<MarsGame />} />
        <Route path="/mars-endings" element={<MarsEndings />} /> */}
      </Routes>
    </div>
  </Router>

  );
}

export default App;
