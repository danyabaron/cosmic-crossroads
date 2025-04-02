import React, { useEffect, useState, useRef, useCallback } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
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

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import ChooseVenusDecision1 from './Components/MarsPathComponents/MarsPathComponents1/ChooseVenusDecision1.js';
import StickMarsDecision1 from './Components/MarsPathComponents/MarsPathComponents1/StickMarsDecision1.js';

import ScrollToTop from './Components/ScrollToTop';
import { AudioProvider } from './Components/AudioContext';
import StarBackground from './Components/StarBackground.js';
// import ParticleBackground from './Components/ParticleBackground.js'; // Import the ParticleBackground componen

// Register the plugin with GSAP
gsap.registerPlugin(ScrollToPlugin);

function App() {

      // state for characters for status bar team
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

      // Function to reset characters (clear the status bar)
      const resetCharacters = useCallback(() => {
        setCharacters([]);
      }, []);

      // keyboard functionality so user can use up and down arrows to navigate
      useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'ArrowDown') {
            // Smooth scroll down
            gsap.to(window, { duration: 1, scrollTo: '+=200', ease: 'power2.out' });
          } else if (e.key === 'ArrowUp') {
            // Smooth scroll up
            gsap.to(window, { duration: 1, scrollTo: '-=200', ease: 'power2.out' });
          }
        };
    
        // Add keyboard listener
        window.addEventListener('keydown', handleKeyDown);
    
        // Cleanup event listener
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);
    

      return (
        <AudioProvider>
        
            {/* <StarBackground /> */}
            <HashRouter basename="/cosmic-crossroads">
              <ScrollToTop />

            
              <div className="App flex flex-col min-h-screen min-w-screen " >
                <Routes>
                  <Route path="/" element={<Home setCharacters={setCharacters} />} />
                  
                  
                    <Route 
                      path="/marsintro" 
                      element={
                        <>
                          {/* <StatusBar characters={characters} /> */}
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
                      path="/mars-horizontal-venus" 
                      element={
                        <>
                          <StatusBar characters={characters} />
                          <MarsHorizontalVenus setScreen={() => {}}  addCharacter={addCharacter}  characters={characters}/>
                        </>
                    
                      } 
                      />
                      <Route 
                      path="/mars-horizontal-jupiter" 
                      element={
                        <>
                          <StatusBar characters={characters} />
                          <MarsHorizontalJupiter setScreen={() => {}} 
                          addCharacter={addCharacter} 
                          characters={characters}
                          />
                        </>
                      
                      } 
                      />
                      <Route path="/choose-venus-1" element={
                      <>
                        <StatusBar characters={characters} />
                        <ChooseVenusDecision1 characters={characters} />
                      </>

                      } />
                      <Route path="/stick-mars-1" element={
                      <>
                        <StatusBar characters={characters} />
                        <StickMarsDecision1 
                          characters={characters} 
                        />
                      </>

                      } />

                    <Route path="/mars-solo-ending" element={
                      <>
                        <StatusBar characters={characters} />
                        <MarsSoloEnding characters={characters} resetCharacters={resetCharacters} />
                      </>

                      } />
                    <Route path="/mars-venus-ending" element={
                      <>
                        <StatusBar characters={characters} />
                        <MarsVenusEnding characters={characters} resetCharacters={resetCharacters} />
                      </>
                      
                      } />
                    <Route path="/mars-jupiter-ending" element={
                      <>
                        <StatusBar characters={characters} />
                        <MarsJupiterEnding characters={characters} resetCharacters={resetCharacters} />
                      </>
                      
                      } />
                    <Route path="/mars-venus-jupiter-ending" element={
                      <>
                      <StatusBar characters={characters} />
                      <MarsVenusJupiterEnding characters={characters} resetCharacters={resetCharacters} />
                    </>
                    } />


                </Routes>
              </div>
            </HashRouter>
         
        </AudioProvider>
      );
    }

export default App;
