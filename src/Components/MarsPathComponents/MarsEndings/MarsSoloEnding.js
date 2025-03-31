import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MarsGif from '../../../assets/mars-art/mars-art-official.gif';
import MarsStaticImg from '../../../assets/mars-art/mars-art-official.png'; 
import AsteroidMouthOpen from '../../../assets/asteroid-art/asteroid-mouth-open.png';
import ButtonContainer from '../../ButtonContainer';
import Fireball from '../../../assets/other-art/fire.gif';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import VenusAnnoyedGif from '../../../assets/venus-art/venus-annoyed-gif.gif';
import JupiterAnnoyedGif from '../../../assets/jupiter-art/jupiter-art-annoyed-gif.gif';



gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function MarsSoloEnding({ advanceRound }) {
    const containerRef = useRef(null);
    const marsRef = useRef(null);
    const asteroidRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const navigate = useNavigate();

    const createSparkle = (x, y) => {
        const sparkle = document.createElement("div");
        sparkle.className = "absolute z-50 overflow-visible w-[7px] h-[7px] bg-[#fc7014] rounded-full";
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        document.getElementById("sparkle-container").appendChild(sparkle);

        gsap.to(sparkle, {
            opacity: 0,
            // scale: 1.5,
            duration: 1,
            onComplete: () => sparkle.remove(),
        });
    };

    useGSAP(() => {
        console.log('Container Ref:', containerRef.current);
        console.log('Mars Ref:', marsRef.current);
        asteroidRefs.forEach((ref, index) => console.log(`Asteroid ${index + 1} Ref:`, ref.current));

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
        asteroidRefs.forEach((asteroidRef) => {
            tl.to(asteroidRef.current, {
                motionPath: {
                    path: [
                        { x: -200, y: 200 },  // Point 1 (opposite direction)
                        { x: -600, y: 300 },  // Point 2 (opposite direction)
                        { x: -300, y: 500 },  // Point 3 (opposite direction)
                    ],
                    alignOrigin: [0.5, 0.5]
                },
                rotation: 360, // Rotate 360 degrees
                duration: 3, // Adjust duration as needed
                ease: "power1.inOut",
                onUpdate: () => {
                    // Get the asteroid's position using GSAP's getProperty
                    const rect = asteroidRef.current.getBoundingClientRect();
                    const containerRect = containerRef.current.getBoundingClientRect();
                    
                    // Calculate position relative to the container
                    const x = rect.left - containerRect.left;
                    const y = rect.top - containerRect.top;
                
                    // console.log("Sparkle at:", x, y);
                    createSparkle(x, y);
                }
            }, 0); // Start at the same time as Mars animation
        });

        // Completely reset ScrollTrigger for the header to avoid conflicts
        ScrollTrigger.getAll().forEach(st => {
            if (st.vars.trigger === '#fight-header' || st.vars.pin === '#fight-header') {
                st.kill();
            }
        });

        // Set the header to be initially hidden but in the correct position
        gsap.set('#fight-header', {
            opacity: 0,
            y: 0,
            visibility: 'hidden',
            position: 'fixed',
            left: '50%',
            top: '50%',
            xPercent: -50,
            yPercent: -50,
            width: '100%',
            maxWidth: '100%',
            textAlign: 'center'
        });

        // Make the header appear earlier in the scroll sequence
        gsap.to('#fight-header', {
            opacity: 1,
            visibility: 'visible',
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "20% center", // Make it appear much earlier - when 20% of container passes center
                end: "40% center",   // Complete the animation quicker
                scrub: 1,
                markers: true,       // Keep markers for debugging
                id: "header-appear"  // Give it an ID for easier debugging
            }
        });
        
        // Remove the previous header movement for clarity
        // And remove the pinning which might be causing issues
        
        // Add a simple fade out for the header when reaching text section
        gsap.to('#fight-header', {
            opacity: 0,
            y: 50,
            scrollTrigger: {
                trigger: '#text',
                start: "top 80%",
                end: "top 50%",
                scrub: 1,
                markers: true,
                id: "header-fadeout"
            }
        });
    }, []);

    return (
        <div className="bg-default-bg h-fit min-w-screen pt-14 flex flex-col justify-center items-center relative overflow-hidden">
           
           {/* animation container for mars and asteroids */}
            <div ref={containerRef} className="animation-container relative w-full h-[200vh]">
                {/* Sparkle Container */}
                <div id='sparkle-container' className="absolute inset-0 pointer-events-none z-10"></div>

                {/* Mars Container */}
                <div ref={marsRef} className="absolute w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px] 
                top-10 left-10">
                    <img 
                        src={MarsStaticImg} 
                        alt="Mars" 
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Asteroids Container */}
                <div ref={asteroidRefs[0]} className="absolute w-11 top-10 right-10">
                    <img 
                        src={AsteroidMouthOpen} 
                        alt="Asteroid" 
                        className="w-full h-full object-contain"
                    />
                </div>
                <div ref={asteroidRefs[1]} className="absolute w-11 top-20 right-20">
                    <img 
                        src={AsteroidMouthOpen} 
                        alt="Asteroid" 
                        className="w-full h-full object-contain"
                    />
                </div>
                <div ref={asteroidRefs[2]} className="absolute w-11 top-32 right-10">
                    <img 
                        src={AsteroidMouthOpen} 
                        alt="Asteroid" 
                        className="w-full h-full object-contain"
                    />
                </div>
                <div ref={asteroidRefs[3]} className="absolute w-11 top-48 right-20">
                    <img 
                        src={AsteroidMouthOpen} 
                        alt="Asteroid" 
                        className="w-full h-full object-contain"
                    />
                </div>

               
            </div>

            {/* Simplified and fixed header with guaranteed centering */}
            <div 
                id='fight-header-container' 
                className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
                style={{ zIndex: 9999 }}
            >
                <h1 
                    id='fight-header' 
                    className="text-white font-header text-5xl
                               font-bold tracking-wider text-center px-4"
                    style={{
                        textShadow: '0 0 15px rgba(255, 0, 0, 0.7), 0 0 25px rgba(255, 100, 0, 0.5)',
                        maxWidth: '90vw'
                    }}
                >
                    You fought alone...
                </h1>
            </div>

            {/* Text Section */}
            <section id='text' className='min-w-screen min-h-screen flex flex-col gap-6 justify-center items-center'>
                
                
              


                <div id='container' className='flex flex-col justify-center items-center gap-32'>
                        <div id='mars-container' className='flex flex-row gap-3 justify-center items-center'>
                            <img 
                                src={MarsGif} 
                                alt="Mars" 
                                className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px] object-contain"
                            />

                            <div id='text' className='relative flex w-fit md:w-96 h-fit bg-white rounded-md font-body text-wrap p-5 mr-8 text-xs md:text-sm'>
                                    {/* <img id='corner-black-sparkle' className='absolute w-[100px] h-auto max-w-full max-h-full object-contain -top-8 -right-11' loading='lazy' src={YellowSparkle}/> */}
                                You chose to fight alone, how Martian of you. While you were able to defeat the asteroids, 
                                your brute force method did not bode well with your fellow benefic planets.
                            </div>



                        </div>

                        <div id='jupiter-container' className='flex flex-row gap-3 justify-center items-center'>
                            <img 
                                src={JupiterAnnoyedGif} 
                                alt="Jupiter" 
                                className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px] object-contain"
                            />

                            <div id='text' className='relative flex w-fit md:w-96 h-fit bg-white rounded-md font-body text-wrap p-5 mr-8 text-xs md:text-sm'>
                                    {/* <img id='corner-black-sparkle' className='absolute w-[100px] h-auto max-w-full max-h-full object-contain -top-8 -right-11' loading='lazy' src={YellowSparkle}/> */}
                                You chose to fight alone, how Martian of you. While you were able to defeat the asteroids, 
                                your brute force method did not bode well with your fellow benefic planets.
                            </div>



                        </div>
                        <div id='venus-container' className='flex flex-row gap-3 justify-center items-center'>
                            <img 
                                src={VenusAnnoyedGif} 
                                alt="Venus" 
                                className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px] object-contain"
                            />

                            <div id='text' className='relative flex w-fit md:w-96 h-fit bg-white rounded-md font-body text-wrap p-5 mr-8 text-xs md:text-sm'>
                                    {/* <img id='corner-black-sparkle' className='absolute w-[100px] h-auto max-w-full max-h-full object-contain -top-8 -right-11' loading='lazy' src={YellowSparkle}/> */}
                                You chose to fight alone, how Martian of you. While you were able to defeat the asteroids, 
                                your brute force method did not bode well with your fellow benefic planets.
                            </div>



                        </div>

                        <section id='asteroids' className='flex flex-col gap-3 mb-7 justify-center items-center'>
                                <img src={MarsGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />
                                
                                <img 
                                src={AsteroidMouthOpen} 
                                alt="Asteroid" 
                                className="w-7 h-7 object-contain"
                            />

                            <p className='w-1/2 text-white font-body text-xs md:text-sm'>
                                The asteroids, seeing your aggressive approach, were not pleased. They felt that you did not
                                value their existence and were only interested in using them for your own gain.
                                As a result, they became hostile and vowed to never trust you again.
                                This has led to a rift between you and the asteroids, and they have become your enemies.    

                                While you were able to defeat them this time, they will always be a thorn in your side. Your benefic planets
                                are also disappointed in you for not trying to negotiate with the asteroids. They feel that you have let them down,
                                and they are no longer willing to help you in your future endeavors.
                            </p>
                        </section>


                </div>

               



            

            </section>
            
            <button 
                  className="w-32 h-8 rounded-lg bg-button-blue text-white relative z-10 
                  m-10 hover:bg-opacity-80" 
                  onClick={() => navigate("/marsintro")}
                >
                  Play Again
                </button>

      

        </div>
    );
}

  
export default MarsSoloEnding;