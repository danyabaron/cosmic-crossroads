import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import 'locomotive-scroll/dist/locomotive-scroll.css';
import VenusMouthOpen from '../../../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../../../assets/mars-art/mars-art-official.gif';
import MarsStaticImg from '../../../assets/mars-art/mars-art.png';
import VenusGifDefault from '../../../assets/venus-art/venus-default-GIF.gif';
import VenusGifAnnoyed from '../../../assets/venus-art/venus-annoyed-gif.gif';
import VenusGifSmirk from '../../../assets/venus-art/venus-smirk-gif.gif';
import VenusGifMouthOpen from '../../../assets/venus-art/venus-mouth-open-gif.gif';
import AsteroidAngry from '../../../assets/asteroid-art/asteroid-angry.png';    
import ButtonContainer from '../../ButtonContainer';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';



   function StickMarsDecision1({ setScreen }) {

    //    const [screen, setScreen] = useState(null);
    const mainTextRef = useRef(null);
    const marsRef = useRef(null);
    
    const asteroidRefs = useRef([]);
    const marsPosition = marsRef.current ? marsRef.current.getBoundingClientRect() : { left: 0, top: 0 };

    const buttons = [
      {
          text: "WHO'S NEXT?",
          style: "mt-8 bg-main-black text-white px-4 py-2 rounded-md shadow-md hover:bg-main-black hover:scale-105 transition duration-300 ease-in-out",
          screen: "MarsHorizontalJupiter"
      }
  ];

        useGSAP(() => { 
            
       
            if (asteroidRefs.current.length) {
                asteroidRefs.current.forEach((asteroid, index) => {
                  gsap.fromTo(
                    asteroid,
                    {
                      x: Math.random() * window.innerWidth, // Start at random position across the screen
                      y: Math.random() * window.innerHeight, // Random vertical start position
                      opacity: 0, // Start off-screen with opacity 0
                      rotation: Math.random() * 360, // Random rotation
                    },
                    {
                      x: marsPosition.left, // Move towards Mars' X position
                      y: marsPosition.top,  // Move towards Mars' Y position
                      rotation: Math.random() * 720 + 360, // Add some more rotation
                      opacity: 1, // Fade in as it approaches
                      duration: 3 + Math.random(), // Randomize the time it takes to charge
                      ease: "power2.inOut", // Ease for smooth movement
                      delay: index * 0.3, // Stagger animations for each asteroid
                    }
                  );
                });
              }
            }, [marsPosition]); // Re-run if Mars' position change
                    

            gsap.from(mainTextRef.current, {
                x: -50, // Slide in from left
                opacity: 0, // Start invisible
                duration: 1.8, // Smooth entrance
                ease: "power2.out",
            });
        
        







         return (
             
                   
            <div className="bg-mars-bg-reg pt-14 bg-center min-h-screen overflow-x-hidden flex flex-col justify-center items-center">
  

                {/* MAIN TEXT WITH FADE IN EFFECT */}
                <div ref={mainTextRef} id='main-text' className='absolute left-0 flex flex-row w-fit h-fit top-20 px-6'>
                    
                    <div id='venus-pic' className='mt-14'>
                        <img className="w-[80px]" src={VenusGifAnnoyed} alt="Venus Gif"/>
                    </div>
                    <div id ='venus-text' className='flex w-1/3 h-fit bg-main-black rounded-md text-white font-body text-wrap p-5 text-xs md:text-sm'>
                        You decided to stick to your Martian gut and channel your Malefic traits! You’re going to choose to fight the asteroids back. 
                        As a result, Venus is not on your team. You’re riding solo... for now ...
                    </div>

                </div>

                {/* CONTAINER FOR MARS AND VENUS IMAGERY */}
                <div id='mars-img-container' className="relative flex justify-center items-center gap-5 ">
                    <img ref={marsRef} className="w-[80px]" src={MarsGif} alt="Mars" />
                </div>

                <div className="flex justify-center items-center">
                   {Array.from({ length: 8 }).map((_, i) => (
                                 <img
                                    key={i}
                                    ref={(el) => (asteroidRefs.current[i] = el)}
                                    className="w-[30px]"
                                    src={AsteroidAngry}
                                    alt="Angry Asteroid"
                                 />
                              ))}
                </div>


                <div id='button-div' className='absolute right-20 bottom-32'>
                           <ButtonContainer 
                              setScreen={setScreen} 
                              buttons={buttons}
                              containerStyle="custom-container-style"
                              buttonStyle="custom-button-style"
                           />

                </div>
                        

                    


                        
            </div>

                    );
    



   }
   
   

   export default StickMarsDecision1;