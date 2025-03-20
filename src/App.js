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
import MarsVenusJupiterEnding from './Components/MarsPathComponents/MarsEndings/MarsVenusJupiterEnding.js';
import ScrollAnimations from './Components/ScrollAnimations.js';
import ParticleBackground from './Components/ParticleBackground.js';



function App() {

  // Create state for characters for status bar team
  const [characters, setCharacters] = useState([]);
  

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

      <div id="star-container" className="fixed z-10 top-0 left-0 w-full h-full pointer-events-none"></div>
      <ParticleBackground />
      
      <StatusBar characters={characters} />
      <div className="App flex flex-col min-h-screen min-w-screen z-20">

       
        <Routes>
        <Route path="/" element={<Home setCharacters={setCharacters} />} />
        {/* <Route path='/' element={<ScrollAnimations />} /> */}
          <Route 
            path="/venusintro" 
            element={
              <>
                <StatusBar characters={characters} />
                <VenusIntro addCharacter={addCharacter} characters={characters}/>
              </>
            } />
          <Route 
            path="/marsintro" 
            element={
              <>
                <StatusBar characters={characters} />
                <MarsIntro addCharacter={addCharacter} characters={characters} />
              </>
            } />
          <Route 
            path="/mars-game/:screen" 
            element={
              <>
                <StatusBar characters={characters} />
                <MarsGame addCharacter={addCharacter} characters={characters} />
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
                <MarsHorizontalVenus setScreen={() => {}} addCharacter={addCharacter}  characters={characters}/>
              </>
          
            } 
            />
            <Route 
            path="/mars-horizontal-jupiter" 
            element={
              <>
                <StatusBar characters={characters} />
                <MarsHorizontalJupiter setScreen={() => {}} addCharacter={addCharacter} characters={characters} />
              </>
            
            } 
            />

          <Route path="/mars-solo" element={
            <>
              <StatusBar characters={characters} />
              <MarsSoloEnding characters={characters} />
            </>

            } />
          <Route path="/mars-venus" element={
            <>
              <StatusBar characters={characters} />
              <MarsVenusEnding characters={characters} />
            </>
            
            } />
          <Route path="/mars-jupiter" element={
            <>
              <StatusBar characters={characters} />
              <MarsJupiterEnding characters={characters} />
            </>
            
            } />
          <Route path="/mars-venus-jupiter" element={
             <>
             <StatusBar characters={characters} />
             <MarsVenusJupiterEnding characters={characters} />
           </>
          } />


        </Routes>
      </div>


      
    </Router>
  );
}

export default App;
