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

function MarsSoloEnding({ }) {
    const containerRef = useRef(null);
    const marsRef = useRef(null);
    const asteroidRef = useRef(null);


    useGSAP(() => {
       

        console.log('Container Ref:', containerRef.current);
        console.log('Mars Ref:', marsRef.current);

              // Create a timeline for the animations
              const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top", // Start animation when the top of the container hits the top of the viewport
                    end: "bottom bottom", // End animation when the bottom of the container hits the bottom of the viewport
                    scrub: 1, // Smoothly sync animation with scroll position
                    pin: true, // Pin the container while the animation is running
                    markers: true // Show markers for debugging (remove in production)
                }
            });
    
            // Add Mars animation to the timeline
            tl.to(marsRef.current, {
                motionPath: {
                    path: [
                        { x: 200, y: 200 },  // Point 1
                        { x: 600, y: 300 },  // Point 2
                        { x: 300, y: 500 },  // Point 3
                    ],
                    alignOrigin: [0.5, 0.5]
                },
                duration: 3, // Adjust duration as needed
                ease: "power1.inOut"
            });
    
            // Add Asteroid animation to the timeline
            tl.to(asteroidRef.current, {
                motionPath: {
                    path: [
                        { x: -200, y: 200 },  // Point 1 (opposite direction)
                        { x: -600, y: 300 },  // Point 2 (opposite direction)
                        { x: -300, y: 500 },  // Point 3 (opposite direction)
                    ],
                    alignOrigin: [0.5, 0.5]
                },
                duration: 3, // Adjust duration as needed
                ease: "power1.inOut"
            }, 0); // Start at the same time as Mars animation
        }, []);


    return (
        <div className="bg-default-bg bg-cover h-[300vh] min-w-screen pt-14 flex flex-col relative overflow-hidden">
            <div ref={containerRef} className="animation-container relative w-full h-full">
                {/* Mars Container */}
                <div ref={marsRef} className="absolute w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px] 
                top-10 left-10">
                    <img 
                        src={MarsStaticImg} 
                        alt="Mars" 
                        className="w-full h-full object-contain"
                    />
                </div>
                <div ref={asteroidRef} className="absolute w-11
                top-10 right-10">
                    <img 
                        src={AsteroidMouthOpen} 
                        alt="Asteroid" 
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            <section id='text' className='w-screen h-screen flex flex-col justify-center items-center'>
                <h1 className='text-white font-header text-3xl'>
                    You fought alone
                </h1>

            </section>




        </div>
    );
}
  
export default MarsSoloEnding;