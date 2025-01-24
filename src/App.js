import React, { useEffect, useState, useRef } from 'react';
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

  // Create state for characters for status bar team
  const [characters, setCharacters] = useState([]);

  // Function to add characters to the team
  const addCharacter = (character) => {
    if (!characters.includes(character)) {
      setCharacters((prev) => [...prev, character]);
    }
  };








  return (
    <Router>
    <div className="App flex flex-col min-h-screen min-w-screen">
      

      <Routes>
        
        <Route path="/" element={<Home addCharacter={addCharacter} />} />
        <Route 
            path="/venusintro" 
            element={
              <>
                <StatusBar characters={characters} />
                <VenusIntro addCharacter={addCharacter}/>
              </>
            } />
          <Route 
            path="/marsintro" 
            element={
              <>
                <StatusBar characters={characters} />
                <MarsIntro addCharacter={addCharacter} />
              </>
            } />
        <Route 
            path="/mars-game" 
            element={
              <>
                <StatusBar characters={characters} />
                <MarsGame addCharacter={addCharacter} />
              </>
            } />
        <Route 
            path="/venus-game" 
            element={
              <>
                <StatusBar characters={characters} />
                <VenusGame addCharacter={addCharacter} />
              </>
            } />
       
      </Routes>
      
    </div>
  </Router>

  );
}

export default App;
