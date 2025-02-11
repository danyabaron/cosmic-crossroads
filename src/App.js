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
import MarsHorizontalVenus from './Components/MarsPathComponents/MarsPathComponents1/MarsHorizontalVenus';
import MarsHorizontalJupiter from './Components/MarsPathComponents/MarsPathComponents2/MarsHorizontalJupiter';
import MarsSoloEnding from './Components/MarsPathComponents/MarsEndings/MarsSoloEnding.js';
import MarsVenusEnding from './Components/MarsPathComponents/MarsEndings/MarsVenusEnding.js';
import MarsJupiterEnding from './Components/MarsPathComponents/MarsEndings/MarsJupiterEnding.js';
import MarsJupiterVenusEnding from './Components/MarsPathComponents/MarsEndings/MarsVenusJupiterEnding.js';

function App() {

  // Create state for characters for status bar team
  const [characters, setCharacters] = useState([]);
  

  // Function to add characters to the team (already modified in Home.js)
  const addCharacter = (character) => {
    setCharacters(prevCharacters => {
      // Append the new character to the team if not already there
      if (!prevCharacters.includes(character)) {
        return [...prevCharacters, character];  // Add to the existing team
      }
      return prevCharacters; // Don't add if the character is already in the team
    });
  };
  

  return (
    <Router>
      <StatusBar characters={characters} />
      <div className="App flex flex-col min-h-screen min-w-screen">
        <Routes>
        <Route path="/" element={<Home setCharacters={setCharacters} />} />
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
          <Route 
            path="/mars-horizontal-venus" 
            element={
              <>
                <StatusBar characters={characters} />
                <MarsHorizontalVenus setScreen={() => {}} addCharacter={addCharacter} />
              </>
            // <MarsHorizontal1 setScreen={() => {}} addCharacter={addCharacter} />
            } 
            />
            <Route 
            path="/mars-horizontal-jupiter" 
            element={
              <>
                <StatusBar characters={characters} />
                <MarsHorizontalJupiter setScreen={() => {}} addCharacter={addCharacter} />
              </>
            
            } 
            />

          <Route path="/marssolo" element={<MarsSoloEnding />} />
          <Route path="/marsvenus" element={<MarsVenusEnding />} />
          <Route path="/marsjupiter" element={<MarsJupiterEnding />} />
          <Route path="/marsjupitervenus" element={<MarsJupiterVenusEnding />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
