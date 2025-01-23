
import React, { useEffect, useState, useRef } from 'react';

import VenusMouthOpen from '../../../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../../../assets/mars-art/mars-art-official.gif';
import MarsStaticImg from '../../../assets/mars-art/mars-art.png';
import VenusGifDefault from '../../../assets/venus-art/venus-default-GIF.gif';
import VenusGifAnnoyed from '../../../assets/venus-art/venus-annoyed-gif.gif';
import VenusGifSmirk from '../../../assets/venus-art/venus-smirk-gif.gif';
import VenusGifMouthOpen from '../../../assets/venus-art/venus-mouth-open-gif.gif';
import JupiterDefault from '../../../assets/jupiter-art/jupiter-art.png';
import JupiterGif from '../../../assets/jupiter-art/jupiter-art-gif.gif';
import JupiterAnnoyedGif from '../../../assets/jupiter-art/jupiter-art-annoyed-gif.gif';


import ButtonContainer from '../../ButtonContainer';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


// mars + venus + jupiter ending - user picked all benefics to team 

function MarsVenusJupiterEnding({ setScreen }) {

    //    const [screen, setScreen] = useState(null);

         return (
             
                   
            <div className="bg-default-bg  fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <div className='bg-main-black w-1/2 h-1/2 flex'>

                    MARS + JUPITER + VENUS ENDING
                
                </div>
                        
            </div>

                    );
    



   }
   
   

   export default MarsVenusJupiterEnding;