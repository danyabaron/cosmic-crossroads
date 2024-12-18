import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MarsIntro from './Pages/MarsPath/MarsIntro';
import MarsGame from './Pages/MarsPath/MarsGame';
import MarsEndings from './Pages/MarsPath/MarsEndings';
import StatusBar from './Components/StatusBar';

function App() {
  return (
    <Router>
    <div className="App flex flex-col h-screen">
      <StatusBar />

      <main className="mt-12">
      <Routes>
        <Route path="/" element={<MarsIntro />} />
        <Route path="/mars-game" element={<MarsGame />} />
        {/* <Route path="/mars-endings" element={<MarsEndings />} /> */}
      </Routes>
      </main>
    </div>
  </Router>

  );
}

export default App;
