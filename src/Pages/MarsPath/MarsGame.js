import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


import VenusMouthOpen from '../../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../../assets/mars-art/mars-art-official.gif';
import MarsStaticImg from '../../assets/mars-art/mars-art-official1.png';
import VenusGifDefault from '../../assets/venus-art/venus-default-GIF.gif';
import VenusGifAnnoyed from '../../assets/venus-art/venus-annoyed-gif.gif';
import VenusGifSmirk from '../../assets/venus-art/venus-smirk-gif.gif';
import VenusGifMouthOpen from '../../assets/venus-art/venus-mouth-open-gif.gif';
import JupiterDefault from '../../assets/jupiter-art/jupiter-art.png';
import JupiterGif from '../../assets/jupiter-art/jupiter-art-gif.gif';
import JupiterAnnoyedGif from '../../assets/jupiter-art/jupiter-art-annoyed-gif.gif';
import VenusCloudShort from '../../assets/clouds/venus-cloud-short.png';
import VenusCloudLong from '../../assets/clouds/venus-cloud-long.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import MarsHorizontalVenus from '../../Components/MarsPathComponents/MarsPathComponents1/MarsHorizontalVenus';
import MarsHorizontalJupiter from '../../Components/MarsPathComponents/MarsPathComponents2/MarsHorizontalJupiter';
import ChooseVenusDecision1 from '../../Components/MarsPathComponents/MarsPathComponents1/ChooseVenusDecision1';
import StickMarsDecision1 from '../../Components/MarsPathComponents/MarsPathComponents1/StickMarsDecision1';
import MarsVenusJupiterEnding from '../../Components/MarsPathComponents/MarsEndings/MarsVenusJupiterEnding';
import MarsSoloEnding from '../../Components/MarsPathComponents/MarsEndings/MarsSoloEnding';
import MarsVenusEnding from '../../Components/MarsPathComponents/MarsEndings/MarsVenusEnding';
import MarsJupiterEnding from '../../Components/MarsPathComponents/MarsEndings/MarsJupiterEnding';
import ButtonContainer from '../../Components/ButtonContainer';


gsap.registerPlugin(ScrollTrigger);




function MarsGame({ addCharacter, characters, roundsUntilImpact, advanceRound }) {

  

    // variables for switching the screen state
    const navigate = useNavigate();
    const { screen: screenParam } = useParams();
    const screen = screenParam || "mars-horizontal-venus"; // Default screen
    const decrementedScreens = useRef(new Set());


    const screens = {
        "mars-horizontal-venus": MarsHorizontalVenus,
        "choose-venus-1": ChooseVenusDecision1,
        "stick-mars-1": StickMarsDecision1,
        "mars-horizontal-jupiter": MarsHorizontalJupiter,
        "mars-solo-ending": MarsSoloEnding,
        "mars-venus-ending": MarsVenusEnding,
        "mars-jupiter-ending": MarsJupiterEnding,
        "mars-venus-jupiter-ending": MarsVenusJupiterEnding
    };


    // console.log("MarsGame.js: Current screen:", screen);
    // console.log("MarsGame.js: Current characters:", characters);
    // console.log("MarsGame.js:  AddCharacter:", addCharacter);
    
    // console.log("MarsGame.js: Current screen:", screen);


    const ScreenComponent = screens[screen] || MarsHorizontalVenus;

    const switchScreen = (newScreen) => {
        navigate(`/mars-game/${newScreen}`); // Change the URL instead of using state
    };




    const screensThatDecrement = new Set([
        'choose-venus-1',
        'stick-mars-1',
        'mars-solo',
        'mars-venus',
        'mars-jupiter',
        'mars-venus-jupiter',
        
        // Add other screens here
      ]);


      const lastDecrementedScreen = useRef(null);


      //tracking the state of the round numbers by calculating which screen was last decreased using the advance round function defined in App.js

    useEffect(() => {
        if (screensThatDecrement.has(screen)) {


          if (lastDecrementedScreen.current !== screen && roundsUntilImpact > 0) {
            advanceRound();
            lastDecrementedScreen.current = screen;
            console.log(`Decremented at ${screen}. New rounds: ${roundsUntilImpact - 1}`);
          }
        }
      }, [screen, advanceRound, roundsUntilImpact, screensThatDecrement]);

 


    return (
        <ScreenComponent setScreen={switchScreen} roundsUntilImpact={roundsUntilImpact} advanceRound={advanceRound} addCharacter={addCharacter} characters={characters} />
    );
}

export default MarsGame;
            

 
       

      


