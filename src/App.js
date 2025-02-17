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
import ScrollAnimations from './Components/ScrollAnimations';

function App() {

  // Create state for characters for status bar team
  const [characters, setCharacters] = useState([]);

  // Function to add characters to the team
  const addCharacter = (character) => {
    setCharacters((prev) => {
      if (!prev.includes(character)) {
        console.log("Adding character:", character);
        return [...prev, character];
      } else {
        console.warn("Character already added:", character);
        return prev; // No change if character already exists
      }
    });
  };
  

  return (
    
    <Router>
      {/* the div below seems to be the issue with the scroll animations */}
      {/* <div className="App flex min-h-screen min-w-screen"> */}
        <Routes>
          {/* <Route path="/" element={<ScrollAnimations />} /> */}
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
          <Route 
            path="/mars-horizontal-venus" 
            element={
              <>
                {/* <StatusBar characters={characters} /> */}
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
            // <MarsHorizontal1 setScreen={() => {}} addCharacter={addCharacter} />
            } 
            />
        </Routes>
      {/* </div> */}
    </Router>
    
      


     
 
      );
}

export default App;


 {/* <StatusBar characters={characters} />
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
            // <MarsHorizontal1 setScreen={() => {}} addCharacter={addCharacter} />
            } 
            />
        </Routes>
      </div> */}