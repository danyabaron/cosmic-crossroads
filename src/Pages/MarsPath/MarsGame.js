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




function MarsGame({ addCharacter, characters }) {
    // Remove advanceRound and setRoundsUntilImpact related code
    
    const navigate = useNavigate();
    const { screen: screenParam } = useParams();
    const screen = screenParam || "mars-horizontal-venus";
    
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

    const ScreenComponent = screens[screen] || MarsHorizontalVenus;

    const switchScreen = (newScreen) => {
        navigate(`/mars-game/${newScreen}`);
    };

    // Remove all the round tracking logic

    return (
        <ScreenComponent 
            setScreen={switchScreen}
            addCharacter={addCharacter} 
            characters={characters}
        />
    );
}

export default MarsGame;








