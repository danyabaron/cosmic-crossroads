import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate();

         return (
            <div className="bg-default-bg max-w-screen min-h-screen flex flex-col justify-center items-center min-w-screen relative overflow-hidden">
                 
            <section className='w-full min-h-screen flex flex-col justify-center items-center gap-3'>
               <div className='flex flex-row gap-3 justify-center items-center w-full'>
                   <img src={MarsGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />
                   <img src={JupiterGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Jupiter" />
               </div>

               <div id='intro-text' className='bg-main-black w-1/2 flex justify-center items-center rounded-md p-6 shadow-xl'>
                   <p className='text-white font-body text-center p-4'>
                       You chose to team up with Jupiter! Together, Mars and 
                       Jupiter create a powerful yet contrasting alliance. Mars, 
                       a traditional malefic planet, brings its fiery aggression, 
                       drive, and combat skill, while Jupiter, a benefic force, contributes 
                       wisdom, optimism, and expansive thinking. 
                       
                       Mars' determination and assertiveness complement Jupiter's strategic vision and ability to see the bigger picture. However, the absence of Venus—the other benefic planet—means you lack diplomatic 
                       finesse and charm that could have helped establish a more peaceful resolution. Without Venus' harmonizing influence, your approach to the asteroid threat relies more heavily on force and authority, making it challenging to gain the complete trust of all asteroid factions. Some asteroids remain suspicious of your intentions, creating potential for future conflict even as you successfully deflect the immediate danger to the solar system.
                   </p>
               </div>
            </section>

            <section className='w-full min-h-screen flex flex-col gap-3 justify-center items-center'>
               <div id='mars-ending' className='flex flex-col gap-4 justify-center items-center w-full'>
                   <h1 className="text-white text-3xl mb-16 z-10"> Mars </h1>
                   <div className='flex flex-row gap-3 justify-center items-center w-full'>
                       <img src={MarsGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />
                       <p className='text-main-black rounded-lg p-6 font-body bg-white w-1/2'>
                           As Mars, your assertiveness and willingness to take action were crucial in forming this alliance. 
                           However, your malefic nature can sometimes lead to impulsive decisions, which Jupiter's wisdom helps balance. 
                           Together, you were able to rally the solar system's forces against the asteroid threat.
                       </p>
                   </div>
               </div>
           </section>

           <section className='w-full min-h-screen flex flex-col gap-3 justify-center items-center'>
               <div id='jupiter-ending' className='flex flex-col gap-4 justify-center items-center w-full'>
                   <h1 className="text-white text-3xl mb-16 z-10"> Jupiter </h1>
                   <div className='flex flex-row gap-3 justify-center items-center w-full'>
                       <img src={JupiterGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Jupiter" />
                       <p className='text-main-black rounded-lg p-6 font-body bg-white w-1/2'>
                           Jupiter's benefic qualities of optimism and expansion were instrumental in forming a united front. 
                           However, without Venus' charm and diplomacy, the asteroids were not fully convinced of the alliance's sincerity. 
                           This lack of Venus' influence left some asteroids feeling excluded, which could lead to future challenges.
                       </p>
                   </div>
               </div>
           </section>

           <button 
             className="w-32 h-8 mb-7 rounded-lg bg-button-blue text-white relative z-10 
              hover:bg-opacity-80" 
             onClick={() => navigate("/marsintro")}
           >
             Play Again
           </button>
                   
   </div>
);
    



   }
   
   

   export default MarsJupiterEnding;