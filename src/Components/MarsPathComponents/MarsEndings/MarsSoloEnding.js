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
    const asteroidRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const sparkleContainerRef = useRef(null); // Ref for the sparkle container

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
                
                    console.log("Sparkle at:", x, y);
                    createSparkle(x, y);
                }
            }, 0); // Start at the same time as Mars animation
        });

        // Text Fade-In
        gsap.from("#text h1", {
            opacity: 0,
            y: 50,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#text",
                start: "top 80%",
                end: "top 50%",
                scrub: 1
            }
        });

        // Background Dimming
        gsap.to(".bg-default-bg", {
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Darken with 70% opacity black
            duration: 2,
            scrollTrigger: {
                trigger: "#text",
                start: "top 80%",
                end: "top 50%",
                scrub: 1
            }
        });
    }, []);

    return (
        <div className="bg-default-bg bg-cover h-[300vh] min-w-screen pt-14 flex flex-col relative overflow-hidden">
            <div ref={containerRef} className="animation-container relative w-full h-full">
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

            {/* Text Section */}
            <section id='text' className='w-screen h-screen flex flex-col justify-center items-center'>
                <h1 className='text-white font-header text-3xl'>
                    You fought alone
                </h1>
            </section>
        </div>
    );
}

  
export default MarsSoloEnding;