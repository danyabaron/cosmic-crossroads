import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import VenusMouthOpen from '../../../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../../../assets/mars-art/mars-art-official.gif';
import MarsDefaultPng from '../../../assets/mars-art/mars-art-official.png';
import VenusGifDefault from '../../../assets/venus-art/venus-default-GIF.gif';
import VenusDefaultPng from '../../../assets/venus-art/venus-default.png';
import VenusGifAnnoyed from '../../../assets/venus-art/venus-annoyed-gif.gif';
import VenusGifSmirk from '../../../assets/venus-art/venus-smirk-gif.gif';
import VenusGifMouthOpen from '../../../assets/venus-art/venus-mouth-open-gif.gif';
import AsteroidHappy from '../../../assets/asteroid-art/asteroid-happy.png';
import ButtonContainer from '../../ButtonContainer';
import Particles from 'react-tsparticles';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);



   function ChooseVenusDecision1({ setScreen }) {

      const asteroidRefs = useRef([]);
      const venusRef = useRef(null);
      const marsRef = useRef(null);
      const mainTextRef = useRef(null);



      // SET PROPERTIES OF BACKGROUND PARTICLES



      // CREATE SPARKLE EFFECT FOR ASTEROID ANIMATION
      const createSparkle = (x, y) => {
         const sparkle = document.createElement("div");
         sparkle.className = "absolute w-[6px] h-[6px] bg-[#fefd9e] opacity-80 rounded-full shadow-md";
         sparkle.style.left = `${x}px`;
         sparkle.style.top = `${y}px`;
         document.getElementById("sparkle-container").appendChild(sparkle);
       
         gsap.to(sparkle, {
           opacity: 0,
           scale: 1.5,
           duration: 0.5,
           onComplete: () => sparkle.remove(),
         });
       };


      //  GSAP ANIMATION CONFIGURATIONS

      useGSAP(() => {

         const numberOfAsteroids = 8;
         const duration = 5; // Duration of one full rotation
         const delayBetweenAsteroids = duration / numberOfAsteroids; // Delay to space asteroids evenly




         asteroidRefs.current.forEach((asteroid, index) => {
             gsap.to(asteroid, {
                 motionPath: {
                     path: "M -200 0 A 200 200 0 1 1 200 0 A 200 200 0 1 1 -200 0 Z", // Circular path
                     align: "self",
                     alignOrigin: [0.5, 0.5],
                     autoRotate: true,
                 },
                  transformOrigin: "center center", // Ensure rotation is around the center
                  duration: duration,
                  repeat: -1, // Infinite loop
                  ease: "linear", // Consistent speed
                  delay: index * delayBetweenAsteroids, // Evenly spaced delay
                  onUpdate: function () {
                     const rect = asteroid.getBoundingClientRect();
                     createSparkle(rect.x + rect.width / 2, rect.y + rect.height / 2);
                   },
             });
         });
         // Mars and Venus moving closer, then back
         gsap.to([venusRef.current, marsRef.current], {
            x: (i) => (i === 0 ? 15 : -15), // Venus moves right, Mars moves left
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
         });

         gsap.from(mainTextRef.current, {
            x: -50, // Slide in from left
            opacity: 0, // Start invisible
            duration: 1.8, // Smooth entrance
            ease: "power2.out",
          });



});









   
     

 

      const buttons = [
        {
            text: "WHO'S NEXT?",
            style: "mt-8 bg-main-black text-white px-4 py-2 rounded-md shadow-md hover:bg-main-black hover:scale-105 transition duration-300 ease-in-out",
            screen: "MarsHorizontalJupiter"
        }
    ];

         return (
             
                   
                    <div className="bg-venus-bg-reg pt-14 bg-center min-h-screen overflow-x-hidden flex flex-col justify-center items-center">
                        {/* Particles background */}
                   

                           {/* MAIN TEXT WITH FADE IN EFFECT */}
                        <div ref={mainTextRef} id='main-text' className='absolute left-0 flex flex-row w-fit h-fit top-20 px-6'>
                                    <div id='venus-pic' className='mt-14'>
                                       <img className="w-[80px]" src={VenusGifMouthOpen} alt="Venus Gif"/>
                                    </div>
                                    <div id ='venus-text' className='flex w-1/3 h-fit bg-main-black rounded-md text-white font-body text-wrap p-5 text-xs md:text-sm'>
                                    You decided to compromise your Malefic energy with Venus'
                                    benefic energy! Together. you can move forward as a team to solve this crisis.
                                    </div>

                           </div>


                           {/* CONTAINER FOR MARS AND VENUS IMAGERY */}
                           <div id='mars-venus-container' className="relative flex justify-center items-center gap-5 ">
                              <img ref={venusRef} className="w-[80px]" src={VenusGifMouthOpen} alt="Venus" />
                              <img ref={marsRef} className="w-[80px]" src={MarsGif} alt="Mars" />
                           </div>

                           {/* ASTEROID CONTAINER */}
                           <div className="flex justify-center items-center">

                               {/* Sparkle Container */}
                              <div id="sparkle-container" className="absolute w-full h-full top-0 left-0 pointer-events-none"></div>
                              {Array.from({ length: 8 }).map((_, i) => (
                                 <img
                                    key={i}
                                    ref={(el) => (asteroidRefs.current[i] = el)}
                                    className="absolute w-[30px] transform -translate-x-[200px] -translate-y-[30px]"
                                    src={AsteroidHappy}
                                    alt="Happy Asteroid"
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
   
   

   export default ChooseVenusDecision1;
