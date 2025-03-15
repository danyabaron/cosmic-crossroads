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
    const textRef = useRef(null);
    const animationContainerRef = useRef(null);

    useGSAP(() => {
        // Define simpler motion paths using percentages of the container
        // These are relative to the animation container
        const marsPath = [
            { x: "20%", y: "100%" },     // Start at top left
            { x: "80%", y: "30%" },     // Move down and right
            // { x: "20%", y: "60%" },     // Move down and slightly left
            // { x: "40%", y: "70%" },     // Move right and down
            // { x: "30%", y: "80%" }      // End position
        ];
        
        // const asteroidPath = [
        //     { x: "90%", y: "20%" },     // Start at top right
        //     { x: "70%", y: "40%" },     // Move down and left
        //     { x: "80%", y: "50%" },     // Move right and down
        //     { x: "60%", y: "70%" },     // Move left and down
        //     { x: "70%", y: "80%" }      // End position
        // ];

        // Make sure Mars and asteroid are initially visible
        gsap.set(marsRef.current, { 
            x: "10%",
            y: "10%",
            opacity: 1,
            scale: 1,
            zIndex: 10
        });
        
        gsap.set(asteroidRef.current, {
            x: "90%", 
            y: "20%",
            opacity: 1,
            scale: 1,
            zIndex: 10
        });

        // Create a master timeline for better control
        const masterTl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom", 
                scrub: 1,
                pin: animationContainerRef.current,
                pinSpacing: true,
                markers: true // For debugging - remove in production
            }
        });

        // Add Mars animation to the timeline
        masterTl.to(marsRef.current, {
            motionPath: {
                path: marsPath,
                alignOrigin: [0.5, 0.5],
                autoRotate: false
            },
            duration: 3,
            ease: "power1.inOut"
        }, 0); // Start at the beginning of the timeline

        // Add asteroid animation to the timeline
        // masterTl.to(asteroidRef.current, {
        //     motionPath: {
        //         path: asteroidPath,
        //         alignOrigin: [0.5, 0.5],
        //         autoRotate: true
        //     },
        //     duration: 3,
        //     ease: "power1.inOut"
        // }, 0); // Start at the beginning of the timeline

        // Add text fade-in
        masterTl.fromTo(
            textRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1 },
            1 // Delay this animation until 1 second into the timeline
        );

    }, []);

    return (
        <div ref={containerRef} className="bg-default-bg min-h-[300vh] min-w-screen overflow-hidden">
            {/* Fixed position container for animations */}
            <div 
                ref={animationContainerRef}
                className="sticky top-0 left-0 w-full h-screen flex justify-center items-center bg-blue-900/30"
            >
                {/* Debugging border/background to see container boundaries */}
                <div className="relative w-full h-full border border-red-500 overflow-visible">
                    {/* Mars Container */}
                    <div ref={marsRef} className="absolute top-10 left-30 w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px] z-10">
                        <img 
                            src={MarsStaticImg} 
                            alt="Mars" 
                            className="w-full h-full object-contain"
                        />
                    </div>
                
                    {/* Asteroid Container */}
                    <div ref={asteroidRef} className="absolute w-[80px] h-[80px] z-10">
                        <img 
                            src={AsteroidMouthOpen} 
                            alt="Asteroid" 
                            className="w-11 object-contain" 
                        />
                    </div>
                
                    {/* Text Container */}
                    <div 
                        ref={textRef} 
                        className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 text-center z-20 w-full max-w-md px-4"
                    >
                        <h1 className="text-4xl font-bold text-white mb-4">Mars Faces the Challenge Alone</h1>
                        <p className="text-white text-lg">
                            With fiery determination, Mars confronts the asteroid threat head-on. 
                            Though brave, this solitary path leads to a difficult struggle.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content after animation */}
            <div className="w-full py-20 px-4 bg-blue-900/50 text-center text-white">
                <h2 className="text-3xl font-bold mb-6">The Solo Battle Outcome</h2>
                <p className="text-lg max-w-2xl mx-auto mb-10">
                    Mars fights valiantly, but the asteroid is too powerful for one planet alone...
                </p>
            </div>
        </div>
    );
}
  
export default MarsSoloEnding;