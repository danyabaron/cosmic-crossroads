import React, { useEffect, useState, useRef, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MarsIntro from './Pages/MarsPath/MarsIntro';
import MarsGame from './Pages/MarsPath/MarsGame';
import MarsEndings from './Pages/MarsPath/MarsEndings';
import StatusBar from './Components/StatusBar';
import Home from './Pages/Home';
import MarsHorizontalVenus from './Components/MarsPathComponents/MarsPathComponents1/MarsHorizontalVenus';
import MarsHorizontalJupiter from './Components/MarsPathComponents/MarsPathComponents2/MarsHorizontalJupiter';
import MarsSoloEnding from './Components/MarsPathComponents/MarsEndings/MarsSoloEnding.js';
import MarsVenusEnding from './Components/MarsPathComponents/MarsEndings/MarsVenusEnding.js';
import MarsJupiterEnding from './Components/MarsPathComponents/MarsEndings/MarsJupiterEnding.js';
import MarsVenusJupiterEnding from './Components/MarsPathComponents/MarsEndings/MarsVenusJupiterEnding.js';
import ScrollAnimations from './Components/ScrollAnimations.js';
import ParticleBackground from './Components/ParticleBackground.js';



function App() {

  // state for characters for status bar team
  const [characters, setCharacters] = useState([]);
  const [roundsUntilImpact, setRoundsUntilImpact] = useState(2); // state for round numbers in status bar


  // decreases the round number in status bar
  const advanceRound = useCallback(() => {
    setRoundsUntilImpact(prev => {
      if (prev <= 0) return 0; // Never go below 0
      console.log(`Decrementing rounds from ${prev} to ${prev - 1}`);
      return prev - 1; // Only -1 allowed
    });
  }, []);

  // Function to add characters to the team (already modified in Home.js)
  const addCharacter = (character) => {
    setCharacters(prevCharacters => {
      // Append the new character to the team if not already there
      if (!prevCharacters.includes(character)) {
        console.log("prevCharacter variable: " + prevCharacters);
        return [...prevCharacters, character];  // Add to the existing team
      }
      return prevCharacters; // Don't add if the character is already in the team
    });
  };

  
  

  return (
    <Router>

      {/* <div id="star-container" className="fixed z-10 top-0 left-0 w-full h-full pointer-events-none"></div>
      <ParticleBackground /> */}
      
      <StatusBar characters={characters} roundsUntilImpact={roundsUntilImpact} />
      <div className="App flex flex-col min-h-screen min-w-screen z-20">

       
        <Routes>
        <Route path="/" element={<Home setCharacters={setCharacters} />} />
        
        
          <Route 
            path="/marsintro" 
            element={
              <>
                
                <MarsIntro addCharacter={addCharacter} characters={characters} />
              </>
            } />
          <Route 
            path="/mars-game/:screen" 
            element={
              <>
               
                <MarsGame addCharacter={addCharacter} characters={characters} advanceRound={advanceRound} roundsUntilImpact={roundsUntilImpact} />
              </>
            } />
         
          <Route 
            path="/mars-horizontal-venus" 
            element={
              <>
                
                <MarsHorizontalVenus setScreen={() => {}} addCharacter={addCharacter}  characters={characters}/>
              </>
          
            } 
            />
            <Route 
            path="/mars-horizontal-jupiter" 
            element={
              <>
                
                <MarsHorizontalJupiter setScreen={() => {}} 
                addCharacter={addCharacter} 
                characters={characters}
                advanceRound={advanceRound} />
              </>
            
            } 
            />

          <Route path="/mars-solo-ending" element={
            <>
              
              <MarsSoloEnding characters={characters} advanceRound={advanceRound} />
            </>

            } />
          <Route path="/mars-venus-ending" element={
            <>
              
              <MarsVenusEnding characters={characters}  />
            </>
            
            } />
          <Route path="/mars-jupiter-ending" element={
            <>
              
              <MarsJupiterEnding characters={characters} />
            </>
            
            } />
          <Route path="/mars-venus-jupiter-ending" element={
             <>
             
             <MarsVenusJupiterEnding characters={characters} />
           </>
          } />


        </Routes>
      </div>


      
    </Router>
  );
}

export default App;
