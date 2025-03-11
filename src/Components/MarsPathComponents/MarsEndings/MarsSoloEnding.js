import React, { useEffect, useState, useRef } from 'react';


import MarsGif from '../../../assets/mars-art/mars-art-official.gif';
import MarsStaticImg from '../../../assets/mars-art/mars-art-official.png'; 
import AsteroidMouthOpen from '../../../assets/asteroid-art/asteroid-mouth-open.png';

import ButtonContainer from '../../ButtonContainer';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);


// mars alone ending - user did not add anyone to team: mars in status bar

function MarsSoloEnding({  }) {

    //    const [screen, setScreen] = useState(null);

            const marsRef = useRef(null);
            const asteroidRef = useRef(null);
            const textRef = useRef(null);
        
            useGSAP(() => {
            // Define the motion path for Mars
            const marsPath = [
                { x: 800, y: 100}, // Start point
                { x: 300, y: 50 },
                { x: 500, y: 200 },
                { x: 700, y: 100 },
                { x: 900, y: 300 }, // End point
            ];
		
            
        
            // Define the motion path for the asteroid
            const asteroidPath = [
                { x: 800, y: 100}, // Start point
                { x: 300, y: 50 },
                { x: 500, y: 200 },
                { x: 700, y: 100 },
                { x: 900, y: 300 }, // End point
            ];
        
            console.log("Mars Path:", marsPath);

            // Animate Mars along the motion path
            gsap.to(marsRef.current, {
                motionPath: {
                path: marsPath,
                align: 'self',
                alignOrigin: [0.5, 0.5],
                autoRotate: true, // Make Mars rotate along the path
                },
                duration: 10,
                ease: 'power2.inOut',
                scrollTrigger: {
                trigger: '.scroll-container',
                
                start: 'top top',
                end: 'bottom bottom',
                scrub: 2, // Smoothly scrub through the animation as the user scrolls
                },
            });
        
            // Animate the asteroid along the motion path
            // gsap.to(asteroidRef.current, {
            //     motionPath: {
            //     path: asteroidPath,
            //     align: 'self',
            //     alignOrigin: [0.5, 0.5],
            //     autoRotate: true, // Make the asteroid rotate along the path
            //     },
            //     scrollTrigger: {
            //     trigger: '.scroll-container',
            //     start: 'top top',
            //     end: 'bottom bottom',
            //     scrub: true,
            //     },
            // });
        
            // Animate Text Reveal
            gsap.from(textRef.current, {
                opacity: 0,
                y: 50,
                scrollTrigger: {
                trigger: textRef.current,
                start: 'top 80%',
                end: 'top 50%',
                scrub: true,
                },
            });
            });
        
            return (
            <div className="scroll-container bg-default-bg relative h-[200vh] min-w-screen overflow-hidden">
                {/* Mars Container */}
                <div ref={marsRef} className="fixed top-20 left-0">
                <img src={MarsStaticImg} alt="Mars" className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" />
                </div>
        
                {/* Asteroid Container */}
                <div ref={asteroidRef} className="fixed  top-20 left-0">
                <img src={AsteroidMouthOpen} alt="Asteroid" className="w-[50px] h-auto max-w-full max-h-full object-contain" />
                </div>
        
                {/* Text Container */}
                <div ref={textRef} className="absolute top-[100vh] left-1/2 transform -translate-x-1/2 opacity-0">
                <h1 className="text-4xl font-bold text-white">You Fought Alone</h1>
                </div>
            </div>
            );
        }
        
  export default MarsSoloEnding;