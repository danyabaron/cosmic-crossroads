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
import StarBackground from '../../../Components/StarBackground.js';
import ThemeMusic2 from '../../../assets/other-art/theme-music2.wav';
import { useAudio } from '../../../Components/AudioContext';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function MarsSoloEnding({ advanceRound }) {
    const containerRef = useRef(null);
    const marsRef = useRef(null);
    const asteroidRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
    const navigate = useNavigate();
    const soundRef = useRef(null); // Reference to the audio element

    const paragraphRefs = useRef([]);
    const jupiterTextRef = useRef(null);
    const venusTextRef = useRef(null);

    paragraphRefs.current = [];

    const addToParagraphRefs = (el) => {
        if (el && !paragraphRefs.current.includes(el)) {
            paragraphRefs.current.push(el);
        }
    };

    const createSparkle = (x, y) => {
        const sparkleContainer = document.getElementById("sparkle-container");
        if (!sparkleContainer) return; // Guard against null container
        
        const sparkle = document.createElement("div");
        sparkle.className = "absolute z-50 overflow-visible w-[7px] h-[7px] bg-[#fc7014] rounded-full";
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        sparkleContainer.appendChild(sparkle);

        gsap.to(sparkle, {
            opacity: 0,
            duration: 1,
            onComplete: () => sparkle.remove(),
        });
    };

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

        // Animate intro text divs from alternating sides with dramatic timing
        paragraphRefs.current.forEach((element, index) => {
            const startX = index % 2 === 0 ? -150 : 150; // Alternate between left and right
            
            gsap.fromTo(element.parentNode, // Target the parent div containing the paragraph
                { 
                    opacity: 0,
                    x: startX,
                },
                { 
                    opacity: 1,
                    x: 0,
                    duration: 1.5, // Longer duration for more dramatic effect
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: element.parentNode,
                        start: "top 75%", // Start animation when element is further down in viewport
                        end: "top 35%", // End animation when element is higher in viewport
                        toggleActions: "play reverse restart reverse",
                        scrub: 0.8, // Smoother scrubbing with more delay
                    }
                }
            );
        });

        // Fade in for Jupiter text with more dramatic timing
        if (jupiterTextRef.current) {
            gsap.fromTo(jupiterTextRef.current.parentNode, 
                { 
                    opacity: 0,
                    x: -80 // Increased distance
                },
                { 
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: jupiterTextRef.current,
                        start: "top 80%",
                        end: "top 40%", // Longer animation window
                        toggleActions: "play reverse restart reverse",
                        scrub: 0.8
                    }
                }
            );
        }
        
        // Fade in for Venus text with more dramatic timing
        if (venusTextRef.current) {
            gsap.fromTo(venusTextRef.current.parentNode, 
                { 
                    opacity: 0,
                    x: 80 // From opposite side for visual variety
                },
                { 
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: venusTextRef.current,
                        start: "top 80%",
                        end: "top 40%", // Longer animation window
                        toggleActions: "play reverse restart reverse",
                        scrub: 0.8
                    }
                }
            );
        }

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
        // Only create the timeline if the container ref exists
        if (!containerRef.current) return;
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                pin: true,
                markers: true
            }
        });

        // Check if mars ref exists
        if (marsRef.current) {
            tl.to(marsRef.current, {
                motionPath: {
                    path: [
                        { x: 200, y: 200 },
                        { x: 600, y: 300 },
                        { x: 300, y: 500 },
                    ],
                    alignOrigin: [0.5, 0.5]
                },
                duration: 3,
                ease: "power1.inOut"
            });
        }

        // Loop through asteroid refs safely
        asteroidRefs.forEach((asteroidRef) => {
            if (asteroidRef.current) {
                tl.to(asteroidRef.current, {
                    motionPath: {
                        path: [
                            { x: -200, y: 200 },
                            { x: -600, y: 300 },
                            { x: -300, y: 500 },
                        ],
                        alignOrigin: [0.5, 0.5]
                    },
                    rotation: 360,
                    duration: 3,
                    ease: "power1.inOut",
                    onUpdate: () => {
                        // Guard clauses to prevent null reference errors
                        if (!asteroidRef.current || !containerRef.current) return;
                        
                        try {
                            const rect = asteroidRef.current.getBoundingClientRect();
                            const containerRect = containerRef.current.getBoundingClientRect();
                            const x = rect.left - containerRect.left;
                            const y = rect.top - containerRect.top;
                            createSparkle(x, y);
                        } catch (error) {
                            console.error("Error in sparkle animation:", error);
                        }
                    }
                }, 0);
            }
        });

        ScrollTrigger.getAll().forEach(st => {
            if (st.vars.trigger === '#fight-header' || st.vars.pin === '#fight-header') {
                st.kill();
            }
        });

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

        // Show the header when scrolling through animation section
        gsap.to('#fight-header', {
            opacity: 1,
            visibility: 'visible',
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "20% center",
                end: "40% center",
                scrub: 1,
                markers: false,
                id: "header-appear"
            }
        });

        // Hide the header when reaching the intro text section - Fix here
        gsap.to('#fight-header', {
            opacity: 0,
            y: -50, // Move up instead of down for better exit
            visibility: 'hidden',
            scrollTrigger: {
                trigger: '#intro-text',  
                start: "top bottom",    // Start hiding as soon as intro text enters viewport
                end: "top 70%",        
                scrub: 0.5,              
                markers: false,
                id: "header-fadeout"
            },
            onComplete: () => {
                // Force hide the element after animation completes
                gsap.set('#fight-header', { display: 'none' });
            }
        });
        
        // Add a cleanup function to make sure header is completely hidden when leaving the section
        ScrollTrigger.create({
            trigger: '#intro-text',
            start: "top 50%",
            onEnter: () => {
                gsap.set('#fight-header', { 
                    display: 'none',
                    visibility: 'hidden',
                    opacity: 0 
                });
            }
        });
    }, []);

    return (
        <div className='relative min-h-screen w-full overflow-hidden'>
            {/* Star background */}
            <StarBackground />
            
            {/* Background with proper z-index */}
            <div className="absolute inset-0 bg-mars-bg-reg bg-center  z-[5]"></div>
            
            {/* Main content with higher z-index */}
            <div className="relative w-full min-w-screen pt-14 overflow-x-hidden flex flex-col justify-center items-center z-[20]">
                <div ref={containerRef} className="animation-container relative w-full h-[200vh]">
                    <div id='sparkle-container' className="absolute inset-0 pointer-events-none z-10"></div>

                    <div ref={marsRef} className="absolute w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px] 
                    top-10 left-10">
                        <img 
                            src={MarsStaticImg} 
                            alt="Mars" 
                            className="w-full h-full object-contain"
                        />
                    </div>

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

                <section className='flex flex-col gap-6 mb-7 w-screen min-h-screen justify-center items-center'>
                    <img src={MarsGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />
                    
                    <div id='intro-text' className='bg-main-black drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)]  w-1/2 flex justify-center items-center rounded-md p-6 shadow-xl'>
                        <p ref={addToParagraphRefs} className=' text-white font-body text-xs md:text-sm'>
                            The asteroids, seeing your aggressive approach, were not pleased. They felt that you did not
                            value their existence and were only interested in using them for your own gain.
                            As a result, they became hostile and vowed to never trust you again.
                            This has led to a rift between you and the asteroids, and they have become your enemies.    
                        </p>
                    </div>

                    <div id='intro-text' className='bg-main-black drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)]  w-1/2 flex justify-center items-center rounded-md p-6 shadow-xl'>
                        <p ref={addToParagraphRefs} className=' text-white font-body text-xs md:text-sm'>
                            While you were able to defeat them this time, they will always be a thorn in your side. Your benefic planets
                            are also disappointed in you for not trying to negotiate with the asteroids. They feel that you have let them down,
                            and they are no longer willing to help you in your future endeavors.
                        </p>
                    </div>
                </section>

                <div id='container' className='flex min-h-screen w-screen flex-col justify-center items-center gap-8'>
                    <div id='jupiter-container' className='flex flex-row gap-3 justify-center items-center'>
                        <img 
                            src={JupiterAnnoyedGif} 
                            alt="Jupiter" 
                            className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px] object-contain"
                        />

                        <div id='text' className='relative flex w-fit md:w-96 h-fit bg-white rounded-md font-body text-wrap p-5 mr-8 text-xs md:text-sm'>
                            <p ref={jupiterTextRef}>
                                Mars, I expected better from you. As the 
                                guardian of wisdom and expansion, I've always taught 
                                that diplomacy brings greater rewards than brute force. 
                                Did you even try to understand their perspective? Every 
                                conflict has potential for growth, but you've only 
                                created more division. This impulsiveness of yours will limit your cosmic influence.
                            </p>
                        </div>
                    </div>
                    
                    <div id='venus-container' className='flex flex-row gap-3 justify-center items-center'>
                        <img 
                            src={VenusAnnoyedGif} 
                            alt="Venus" 
                            className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px] object-contain"
                        />

                        <div id='text' className='relative flex w-fit md:w-96 h-fit bg-white rounded-md font-body text-wrap p-5 mr-8 text-xs md:text-sm'>
                            <p ref={venusTextRef}>
                                Oh Mars, always rushing into battle without a second thought! Harmony and connection 
                                are what truly strengthen the cosmos. Did it ever occur 
                                to you that those asteroids might have become valuable allies? 
                                Instead, you've made enemies where you could have made friends. Next time, 
                                try using your heart instead of your sword. Relationships matter more than victories.
                            </p>
                        </div>
                    </div>
                </div>

                <button 
                    className="w-36 h-10 mb-12 rounded-lg bg-button-blue text-white relative z-10 
                    px-4 font-medium text-center flex items-center justify-center
                    drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] 
                    shadow-lg hover:scale-105 transition duration-300 ease-in-out" 
                    onClick={() => navigate("/marsintro")}
                >
                    Play Again
                </button>
            </div>
        </div>
    );
}

export default MarsSoloEnding;