import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import 'locomotive-scroll/dist/locomotive-scroll.css';
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
import MarsHorizontal1 from '../../Components/MarsPathComponents/MarsPathComponents1/MarsHorizontal1';
import MarsHorizontal2 from '../../Components/MarsPathComponents/MarsPathComponents2/MarsHorizontal2';
import ChooseVenusDecision1 from '../../Components/MarsPathComponents/MarsPathComponents1/ChooseVenusDecision1';
import StickMarsDecision1 from '../../Components/MarsPathComponents/MarsPathComponents1/StickMarsDecision1';
import MarsVenusJupiterEnding from '../../Components/MarsPathComponents/MarsEndings/MarsVenusJupiterEnding';
import MarsSoloEnding from '../../Components/MarsPathComponents/MarsEndings/MarsSoloEnding';
import MarsVenusEnding from '../../Components/MarsPathComponents/MarsEndings/MarsVenusEnding';
import MarsJupiterEnding from '../../Components/MarsPathComponents/MarsEndings/MarsJupiterEnding';


gsap.registerPlugin(ScrollTrigger);




function MarsGame() {

    // const [choice, setChoice] = useState(null);
    const [screen, setScreen] = useState('MarsHorizontal1');

    console.log("(being set from MarsGame.js: Current screen:", screen); // Add this for debugging
            

    //switch statement 
    
    return (
        <div className='relative'>
            {screen === 'MarsHorizontal1' && (
                <MarsHorizontal1 setScreen={setScreen} />

            )}
            
            {screen === 'choose-venus-1' && (

                <ChooseVenusDecision1 setScreen={setScreen}/>
            )}

            {screen === 'stick-mars-1' && (
                <StickMarsDecision1 setScreen={setScreen}/>
            )}

            {screen === 'MarsHorizontal2' && (
                <MarsHorizontal2 setScreen={setScreen} />
            )}

            {/* {screen === 'choose-venus-2' && (

                <ChooseVenusDecision2 setScreen={setScreen}/>
            )}

            {screen === 'stick-mars-2' && (
                <StickMarsDecision2 setScreen={setScreen}/>
            )} */}





            
      
        







        </div>




    )}
       

      


export default MarsGame;