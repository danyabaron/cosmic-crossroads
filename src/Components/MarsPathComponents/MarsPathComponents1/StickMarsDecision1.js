import React, { useEffect, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

import VenusMouthOpen from '../../../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../../../assets/mars-art/mars-art-official.gif';
import MarsStaticImg from '../../../assets/mars-art/mars-art-official1.png';
import VenusGifDefault from '../../../assets/venus-art/venus-default-GIF.gif';
import VenusGifAnnoyed from '../../../assets/venus-art/venus-annoyed-gif.gif';
import VenusGifSmirk from '../../../assets/venus-art/venus-smirk-gif.gif';
import VenusGifMouthOpen from '../../../assets/venus-art/venus-mouth-open-gif.gif';
import AsteroidAngry from '../../../assets/asteroid-art/asteroid-angry.png';    
import ButtonContainer from '../../ButtonContainer';
import ThemeMusic2 from '../../../assets/other-art/theme-music2.wav';
import { useAudio } from '../../../Components/AudioContext';
import StarBackground from '../../../Components/StarBackground.js'; // Import the StarBackground component


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';



function StickMarsDecision1({ setScreen, characters, removeCharacter }) {

    // Add navigation hook
    const navigate = useNavigate();

    const mainTextRef = useRef(null);
    const marsRef = useRef(null);
    const glowRef = useRef(null);
    const asteroidRefs = useRef([]);
     const soundRef = useRef(null); // Reference to the audio element

    const buttons = [
      {
          text: "WHAT'S NEXT?",
          style: " font-header bg-main-black text-white px-4 py-2 rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] hover:bg-main-black hover:scale-105 transition duration-300 ease-in-out drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] ",
          screen: "mars-horizontal-jupiter",
          onClick: () => {
              navigate("/mars-horizontal-jupiter"); // Use navigate to go to the next route
          }
      },
      {
          text: "GO BACK",
          style: "mt-10 font-header  bg-main-black text-white px-4 py-2 rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] hover:bg-main-black hover:scale-105 transition duration-300 ease-in-out drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] ",
          onClick: () => {
              // No character to remove as user didn't add anyone to the team in this route
              navigate("/mars-horizontal-venus"); // Navigate back to the choice screen
          }
      }
    ];





     const { pauseAudio, resumeAudio } = useAudio();
    
         
             useEffect(() => {
                   window.scrollTo(0, 0);
    
                   // Pause the global audio
                   pauseAudio();
    
                   // Create and play background music
                   const sound = new Audio(ThemeMusic2);
                   sound.loop = true;
                   sound.volume = 0.4; // Set volume to 40%
                   soundRef.current = sound;
                   sound.play().catch(e => console.log("Audio play failed:", e));
    
                   return () => {
                      // Clean up audio when component unmounts
                      if (soundRef.current) {
                          soundRef.current.pause();
                          soundRef.current.currentTime = 0;
                      }
                      // Resume global audio when leaving this component
                      resumeAudio();
                  };
              }, [pauseAudio, resumeAudio]);

    useGSAP(() => {
        
       
        requestAnimationFrame(() => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const asteroidSize = 30;

            asteroidRefs.current.forEach((asteroid, index) => {
                if (!asteroid) return;

                // Randomly choose if the asteroid enters from the left or right side
                const startX = Math.random() > 0.5 ? -asteroidSize : viewportWidth + asteroidSize;
                const endX = startX > 0 ? -asteroidSize : viewportWidth + asteroidSize;

                // Random Y position within viewport
                const startY = Math.random() * viewportHeight;
                const duration = 2 + Math.random() * 3; // Random duration for variety

                // Set initial position offscreen
                gsap.set(asteroid, { x: startX, y: startY, opacity: 1 });

                

                // Animate across the screen
                gsap.to(asteroid, {
                    x: endX,
                    duration: duration,
                    ease: "linear",
                    repeat: -1,
                    delay: Math.random() * 2, // Random delay so they don’t all start at the same time
                });
            });
        });


        //  MARS GLOWING EFFECT
        if (marsRef.current && glowRef.current) {
            // Glow effect for Mars
            gsap.fromTo(
                glowRef.current,
                { opacity: 0, scale: 0.5 }, // Start from invisible and smaller
                { 
                    opacity: 1, // Make it fully visible
                    scale: 1.2, // Grow to create the pulsing effect
                    repeat: -1, 
                    yoyo: true, 
                    duration: 1.5, 
                    ease: "sine.inOut"
                }
            );
        }

                

        gsap.from(mainTextRef.current, {
            x: -50, // Slide in from left
            opacity: 0, // Start invisible
            duration: 1.8, // Smooth entrance
            ease: "power2.out",
        });
    
    }, []);

    return (

        <div className='relative min-h-screen w-full overflow-hidden'>
        {/* Star background */}
          <StarBackground />

            {/* Background with proper z-index */}
            <div className="absolute inset-0 bg-mars-bg-reg bg-center z-[5]"></div>



        <div className=" pt-14 bg-center min-h-screen overflow-x-hidden flex flex-col justify-center items-center ">
            {/* MAIN TEXT WITH FADE IN EFFECT */}
            <div ref={mainTextRef} id='main-text' className='absolute  left-0 flex flex-row w-fit h-fit top-24 px-6 z-[40]'>
                <div id='venus-pic' className='mt-14'>
                    <img className="w-[80px]" src={VenusGifAnnoyed} alt="Venus Gif"/>
                </div>
                <div id ='venus-text' className='flex w-1/2 h-fit bg-main-black rounded-md text-white  text-center  p-5 text-xs md:text-sm'>
                    You decided to stick to your Martian gut and channel your Malefic traits! 
                    <br></br>
                    <br></br>
                    You’re going to choose to fight the asteroids back. 
                    As a result, Venus is not on your team. 
                    <br></br>
                    <br></br>
                    
                    You’re riding solo... for now ...
                </div>
            </div>

            {/* CONTAINER FOR MARS AND VENUS IMAGERY */}
            <div id='mars-img-container' className="relative flex justify-center items-center gap-5 z-[40]">
                {/* Mars Glowing Effect */}
                <div ref={glowRef} 
                className="absolute flex justify-center items-center w-[90px] 
                h-[90px] bg-mars-red rounded-full z-0 opacity-10 animate-fiery-pulse" // Initial circle glow
                />
                <img ref={marsRef} className="w-[80px] z-[60]" src={MarsGif} alt="Mars" />
            </div>

            <div className="absolute  inset-0 pointer-events-none z-10">
                {Array.from({ length: 8 }).map((_, i) => (
                    <img
                        key={i}
                        ref={(el) => (asteroidRefs.current[i] = el)}
                        className="w-11"
                        src={AsteroidAngry}
                        alt="Angry Asteroid"
                    />
                ))}
            </div>

            <div id='button-div' className='absolute right-20 bottom-10 z-[50]'>
                <ButtonContainer 
                    setScreen={setScreen} 
                    buttons={buttons}
                    characters={characters}
                    containerStyle="custom-container-style"
                    buttonStyle="custom-button-style"
                />
            </div>
        </div>
    </div>
    );
}

export default StickMarsDecision1;