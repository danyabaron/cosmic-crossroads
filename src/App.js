import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MarsIntro from './Pages/MarsPath/MarsIntro';
import MarsGame from './Pages/MarsPath/MarsGame';
import VenusGame from './Pages/VenusPath/VenusGame';
import VenusIntro from './Pages/VenusPath/VenusIntro';
import MarsEndings from './Pages/MarsPath/MarsEndings';
import StatusBar from './Components/StatusBar';
import Home from './Pages/Home';


function App() {
  return (
    <Router>
    <div className="App flex flex-col min-h-screen min-w-screen">
      

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route 
            path="/venusintro" 
            element={
              <>
                <StatusBar />
                <VenusIntro />
              </>
            } />
          <Route 
            path="/marsintro" 
            element={
              <>
                <StatusBar />
                <MarsIntro />
              </>
            } />
        <Route 
            path="/mars-game" 
            element={
              <>
                <StatusBar />
                <MarsGame />
              </>
            } />
        <Route 
            path="/venus-game" 
            element={
              <>
                <StatusBar />
                <VenusGame />
              </>
            } />
       
      </Routes>
      
    </div>
  </Router>

  );
}

export default App;
