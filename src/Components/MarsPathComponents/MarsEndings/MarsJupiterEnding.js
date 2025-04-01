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
import StarBackground from '../../../Components/StarBackground.js';
import ThemeMusic2 from '../../../assets/other-art/theme-music2.wav';
import { useAudio } from '../../../Components/AudioContext';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

// mars and jupiter alone ending: mars + jupiter in status bar

function MarsJupiterEnding({ characters, resetCharacters }) {

    const navigate = useNavigate();
    const introTextRefs = useRef([]);
    const marsTextRef = useRef(null);
    const jupiterTextRef = useRef(null);
    const soundRef = useRef(null); // Reference to the audio element
    const { pauseAudio, resumeAudio } = useAudio();
    
    // Reset refs array
    introTextRefs.current = [];
    
    // Add to refs array function
    const addToIntroRefs = (el) => {
        if (el && !introTextRefs.current.includes(el)) {
            introTextRefs.current.push(el);
        }
    };

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
        introTextRefs.current.forEach((element, index) => {
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
        
        // Fade in for Mars section with more dramatic timing
        if (marsTextRef.current) {
            gsap.fromTo(marsTextRef.current.parentNode, 
                { 
                    opacity: 0,
                    x: -80 // From left
                },
                { 
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: marsTextRef.current,
                        start: "top 80%",
                        end: "top 40%", // Longer animation window
                        toggleActions: "play reverse restart reverse",
                        scrub: 0.8
                    }
                }
            );
        }
        
        // Fade in for Jupiter section with more dramatic timing
        if (jupiterTextRef.current) {
            gsap.fromTo(jupiterTextRef.current.parentNode, 
                { 
                    opacity: 0,
                    x: 80 // From right
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

    // Function to handle play again
    const handlePlayAgain = () => {
        // Reset characters in status bar
        resetCharacters();
        // Navigate to Mars intro
        navigate("/marsintro");
    };

    return (
        <div className='relative min-h-screen w-full overflow-hidden'>
            {/* Star background */}
            <StarBackground />
            
            {/* Background with proper z-index */}
            <div className="absolute inset-0 bg-jupiter-bg-reg bg-center bg-opacity-90 z-[5]"></div>
            
            {/* Main content with higher z-index */}
            <div className="relative w-full min-w-screen pt-14 overflow-x-hidden flex flex-col justify-center items-center z-[20]">
                <section className='w-full min-h-screen flex flex-col pt-6 justify-center items-center gap-3'>
                    <h1 className="text-white font-header text-3xl mb-5 mt-5 z-10">The Result</h1>
                    <div className='flex flex-row gap-3 justify-center items-center w-full'>
                        <img src={MarsGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />
                        <img src={JupiterGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Jupiter" />
                    </div>

                    <div id='intro-text' className='bg-main-black drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)]  w-1/2 flex justify-center items-center rounded-md p-6 shadow-xl'>
                        <p ref={addToIntroRefs} className='text-white font-body  text-sm text-center p-4'>
                            You chose to team up with Jupiter! Together, Mars and 
                            Jupiter create a powerful yet contrasting alliance. Mars, 
                            a traditional malefic planet, brings its fiery aggression, 
                            drive, and combat skill, while Jupiter, a benefic force, contributes 
                            wisdom, optimism, and expansive thinking. 
                        </p>
                    </div>
                    <div id='intro-text' className='bg-main-black drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)]  w-1/2 flex justify-center items-center rounded-md p-6 shadow-xl'>
                        <p ref={addToIntroRefs} className='text-white font-body text-sm text-center p-4'>
                            Mars' determination and assertiveness complement Jupiter's strategic 
                            vision and ability to see the bigger picture. 
                            However, the absence of Venus—the other benefic planet—means you lack diplomatic 
                            finesse and charm that could have helped establish a more peaceful resolution. 
                        </p>
                    </div>

                    <div id='intro-text' className='bg-main-black mb-12 drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)]  w-1/2 flex justify-center items-center rounded-md p-6 shadow-xl'>
                        <p ref={addToIntroRefs} className='text-white font-body text-sm text-center p-4'>
                            Without Venus' harmonizing influence, 
                            your approach to the asteroid threat relies 
                            more heavily on force and authority, making it 
                            challenging to gain the complete trust of all 
                            the asteroids. Some asteroids remain suspicious of your
                            intentions, creating potential for future conflict 
                            even as you successfully deflect the immediate danger to the solar system.
                        </p>
                    </div>
                </section>

                <section className='w-full h-fit p-12 flex flex-col gap-3 justify-center items-center'>
                    <div id='mars-ending' className='flex flex-col gap-4 justify-center items-center w-full'>
                        <h1 className="text-white font-header text-3xl z-10"> Mars </h1>
                        <div className='flex flex-row gap-3 justify-center items-center w-full'>
                            <img src={MarsGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />
                            <p ref={marsTextRef} className='text-main-black rounded-lg p-6 font-body bg-white w-1/2'>
                                As Mars, your assertiveness and willingness to take action were crucial in forming this alliance. 
                                However, your malefic nature can sometimes lead to impulsive decisions, which Jupiter's wisdom helps balance. 
                                Together, you were able to rally the solar system's forces against the asteroid threat.
                            </p>
                        </div>
                    </div>
                </section>

                <section className='w-full min-h-screen flex flex-col gap-3 justify-center items-center'>
                    <div id='jupiter-ending' className='flex flex-col gap-4 justify-center items-center w-full'>
                        <h1 className="text-white font-header text-3xl z-10"> Jupiter </h1>
                        <div className='flex flex-row gap-3 justify-center items-center w-full'>
                            <img src={JupiterGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Jupiter" />
                            <p ref={jupiterTextRef} className='text-main-black rounded-lg p-6 font-body bg-white w-1/2'>
                                Jupiter's benefic qualities of optimism and expansion were instrumental in forming a united front. 
                                However, without Venus' charm and diplomacy, the asteroids were not fully convinced of the alliance's sincerity. 
                                This lack of Venus' influence left some asteroids feeling excluded, which could lead to future challenges.
                            </p>
                        </div>
                    </div>
                </section>

                <button 
                    className="w-36 h-10 mb-12 rounded-lg bg-button-blue text-white relative z-10 
                    drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] 
                    px-4 font-medium text-center flex items-center justify-center
                    shadow-lg hover:scale-105 transition duration-300 ease-in-out" 
                    onClick={handlePlayAgain}
                >
                    Play Again
                </button>
            </div>
        </div>
    );
}

export default MarsJupiterEnding;