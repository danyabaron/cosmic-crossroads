import React, { useEffect, useState, useRef } from 'react';

import MarsGif from '../../../assets/mars-art/mars-art-official.gif';
import MarsStaticImg from '../../../assets/mars-art/mars-art-official1.png';

import JupiterDefault from '../../../assets/jupiter-art/jupiter-art.png';
import JupiterGif from '../../../assets/jupiter-art/jupiter-art-gif.gif';
import JupiterAnnoyedGif from '../../../assets/jupiter-art/jupiter-art-annoyed-gif.gif';

import ButtonContainer from '../../ButtonContainer';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';



// mars and jupiter alone ending: mars + jupiter in status bar

function MarsJupiterEnding({ characters }) {

    //    const [screen, setScreen] = useState(null);

         return (
             
                   
            <div className="bg-default-bg  fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <div className='bg-main-black w-1/2 h-1/2 flex'>

                    MARS + JUPITER  ENDING
                
                </div>
                        
            </div>

                    );
    



   }
   
   

   export default MarsJupiterEnding;