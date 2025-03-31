import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAudio } from '../../Components/AudioContext';
import MarsGif from '../../assets/mars-art/mars-art-official.gif';
import SaturnPng from '../../assets/saturn-art/saturn-mouth-open.png';
import MarsDefaultPng from '../../assets/mars-art/mars-art-official.png';
import JupiterDefaultPng from '../../assets/jupiter-art/jupiter-art.png';
import VenusDefaultPng from '../../assets/venus-art/venus-mouth-open.png';
import VenusGif from '../../assets/venus-art/venus-mouth-open-gif.gif';
import JupiterGif from '../../assets/jupiter-art/jupiter-art-gif.gif';
import SaturnGif from '../../assets/saturn-art/saturn-mouth-open-gif.gif';
import MarsStats from '../../assets/mars-art/mars-stats.png';
import MarsCloudLong from '../../assets/clouds/mars-cloud-long.png';
import MarsCloudShort from '../../assets/clouds/mars-cloud-short.png';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function MarsIntro({ addCharacter, characters }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { playAudio } = useAudio();
    
    // Add refs for dialogue elements
    const dialogueRefs = useRef([]);
    
    // Reset refs array
    dialogueRefs.current = [];
    
    // Add to refs array function
    const addToDialogueRefs = (el) => {
        if (el && !dialogueRefs.current.includes(el)) {
            dialogueRefs.current.push(el);
        }
    };
    
    useEffect(() => {
        playAudio();
    }, [playAudio]);
    
    useEffect(() => {
        window.scrollTo(0, 0);
        
        // Special dramatic animation for intro paragraph
        const introElement = document.getElementById('intro');
        if (introElement) {
            // First make sure the parent has relative position for proper animation
            introElement.parentNode.style.position = 'relative';
            
            // Create dramatic shake and glow effect
            gsap.fromTo(
                introElement, 
                {
                    opacity: 0,
                    scale: 0.8,
                    textShadow: "0px 0px 0px rgba(255,0,0,0)"
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 2,
                    ease: "power2.out",
                    textShadow: "0px 0px 10px rgba(255,50,50,0.7)",
                    onComplete: () => {
                        // Add shake effect after fade-in
                        gsap.to(introElement, {
                            x: "random(-5, 5)", 
                            y: "random(-5, 5)",
                            duration: 0.1,
                            repeat: 5,
                            yoyo: true,
                            ease: "power1.inOut",
                            onComplete: () => {
                                // Add final pulse effect
                                gsap.to(introElement, {
                                    scale: 1.05,
                                    duration: 0.5,
                                    repeat: 1,
                                    yoyo: true,
                                    ease: "power1.inOut"
                                });
                            }
                        });
                    }
                }
            );
            
            // Add dramatic background effect to the container
            gsap.fromTo(
                introElement.parentNode,
                {
                    backgroundColor: "rgba(189,53,8,0.1)",
                    boxShadow: "0 0 0px rgba(255,0,0,0)"
                },
                {
                    backgroundColor: "rgba(189,53,8,0.3)",
                    boxShadow: "0 0 20px rgba(255,50,50,0.5)",
                    duration: 2,
                    ease: "power2.out",
                    yoyo: true,
                    repeat: 1
                }
            );
        }
        
        // Regular animations for other dialogue elements
        dialogueRefs.current.forEach((element, index) => {
            // Skip the intro element as it has its own animation
            if (element.id === 'intro') return;
            
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
    }, []);

    const handleEnterClick = () => {
        // add Mars to status bar
        addCharacter('Mars');
        // navigate to mars game / path
        navigate('/mars-game/mars-horizontal-venus');
    };

    return (
        <div className="flex flex-col gap-8 items-center justify-center min-h-screen bg-default-bg text-white pt-14 px-6">
            {/* Header */}
            <h1 className="text-4xl font-header text-center mt-6 mb-8">
                Welcome to Cosmic Crossroads
            </h1>

            {/* Mars Section */}
            <div className="flex flex-row items-center bg-mars-bg-reg 
            shadow-md drop-shadow-[0_0_10px_rgba(189,53,8,0.8)] rounded-md p-6 mb-8">
                <img src={MarsGif} alt="Mars" className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" />
                <p ref={addToDialogueRefs} id='intro' className="text-center max-w-lg text-white text-md">
                    Your name is Mars. As a Malefic warrior, you are known for your initative, action, strength and power.
                    The zodiac signs that you rule are: Aries & Scorpio. 
                </p>
            </div>

            <section id='malefic' className='flex flex-col items-center justify-center'>
                <h2 className="text-2xl font-header text-center mb-4">What are the Malefic and Benefic Planets?</h2>

                <div id='malefic-description' className='flex flex-col gap-5 justify-center items-center'>
                    <h3 className="text-xl font-header text-center mb-4">THE MALEFICS</h3>

                    <div id='malefic-img-container' className='flex flex-row justify-center gap-2 w-full'>
                        <div id='mars' className='flex flex-col gap-2 items-center'>
                            <h3 className='text-md font-header text-white'>MARS</h3>
                            <div className="flex justify-center items-center h-[100px] sm:h-[60px] md:h-[80px] lg:h-[100px]">
                                <img 
                                    src={MarsGif} 
                                    className='w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]' 
                                    alt="Mars"
                                />
                            </div>
                        </div>
                        <div id='saturn' className='flex flex-col gap-2 items-center'>
                            <h3 className='text-md font-header text-white'>SATURN</h3>
                            <div className="flex justify-center items-center h-[100px] sm:h-[60px] md:h-[80px] lg:h-[100px]">
                                <img 
                                    src={SaturnGif} 
                                    className='w-[180px] sm:w-[108px] md:w-[144px] lg:w-[180px] object-contain transform scale-90' 
                                    alt="Saturn"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <div className='w-1/2 flex justify-center drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-2xl p-7 bg-main-black'>
                            <p ref={addToDialogueRefs} className='font-body text-md'> 
                                Malefic planets! That's you. Sound familiar? Maybe not.
                                The Malefic planets tend to bring the more challenging experiences that we may face in our life.
                                The two Malefic planets in our solar system are Mars and Saturn. 
                                Mars loves to fight, and Saturn loves to restrict. Go in an escape room with these two, and you'll probably be begging to get let out. Kidding...
                            </p>
                        </div>

                        <div className='w-1/2 flex justify-center drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-2xl p-7 bg-main-black'>
                            <p ref={addToDialogueRefs} className='font-body text-md'>
                                However, we all know life isn't so black and white. While the Malefic planets bring us challenging experiences
                                they also can bring us rewards and growth. You'll make the Malefic planets
                                happy by accepting the challenges they bring, and learning from them.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='benefic' className='flex flex-col items-center justify-center'>
                <div id='benefic-description' className='flex flex-col justify-center items-center'>
                    <h3 className="text-xl font-header text-center mb-4">THE BENEFICS</h3>

                    <div id='benefic-img-container' className='flex flex-row justify-center gap-2 w-full'>
                        <div id='venus' className='flex flex-col gap-2 items-center'>
                            <h3 className='text-md font-header text-white'>VENUS</h3>
                            <div className="flex justify-center items-center h-[100px] sm:h-[60px] md:h-[80px] lg:h-[100px]">
                                <img 
                                    src={VenusGif} 
                                    className='w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]' 
                                    alt="Venus"
                                />
                            </div>
                        </div>
                        <div id='jupiter' className='flex flex-col gap-2 items-center'>
                            <h3 className='text-md font-header text-white'>JUPITER</h3>
                            <div className="flex justify-center items-center h-[100px] sm:h-[60px] md:h-[80px] lg:h-[100px]">
                                <img 
                                    src={JupiterGif} 
                                    className='w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]' 
                                    alt="Jupiter"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <div className='w-1/2 flex justify-center drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-2xl p-7 bg-main-black'>
                            <p ref={addToDialogueRefs} className='font-body text-md'> 
                                Benefic planets! Ahhhhh the Benefic planets.
                                Such a good time, these two. The Benefic planets love to bring life's more pleasant and positive experiences.
                                The two Benefic planets in our solar system are Venus and Jupiter.
                                Venus loves to bring pleasure & fun, and Jupiter loves to bring good fortune & abundance.
                                Benefic planets love to have fun, as they love being adorned with life's pleasures. Isn't that so fun?
                                Go to a party with these two, and you'll be partying all night long.
                            </p>
                        </div>

                        <div className='w-1/2 flex justify-center drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-2xl p-7 bg-main-black'>
                            <p ref={addToDialogueRefs} className='font-body text-md'> 
                                Now Benefic planets love to bring the fun, but what happens when you can 
                                get lost in the fun? You'll make the Benefic planets happy by enjoying the pleasures they bring, but also by 
                                reminding yourself that everything in moderation is key.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='game-description' className='flex flex-col gap-8 items-center justify-center'>
                <h3 className='font-header text-xl'>Okay... so what now?</h3>

                <div id='mars-header' className='flex flex-row gap-2 justify-center items-center bg-mars-bg-reg rounded-lg
                drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-2xl p-7'>
                    <img 
                        src={MarsGif} 
                        className='w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]' 
                        alt="Mars"
                    />
                    <p ref={addToDialogueRefs} className='font-body text-md text-white'>
                        Wait.. so that's me? Mars?
                    </p>
                </div>

                <div className='w-1/2 flex justify-center drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-2xl p-7 bg-main-black'>
                    <p ref={addToDialogueRefs} className='font-body text-md text-white'>
                        Now that you've learned a little bit about the Benefic and Malefic planets,
                        it's time to actually experience them. Remember that your name is Mars, and you are a Malefic planet.
                    </p>
                </div>

                <div className='w-1/2 flex justify-center drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-2xl p-7 bg-main-black'>
                    <p ref={addToDialogueRefs} className='font-body text-md text-white'>
                        There's currently a group of asteroids heading straight to the solar system. 
                        As Mars, you must go to your fellow Benefic planets, and hear what they think we should 
                        do about the incoming asteroid attack. 
                    </p>
                </div>
                    
                <div className='w-1/2 flex justify-center drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] shadow-2xl p-7 bg-main-black'>
                    <p ref={addToDialogueRefs} className='font-body text-md text-white'>
                        Throughout this experience, you can decide if you want to team up with your fellow Benefic planets,
                        or if you want to fight the asteroids solo. The choice is yours. Have fun in there! Try not to fight too much...
                    </p>
                </div>
            </section>

            {/* Enter Button */}
            <button
                onClick={handleEnterClick}
                className="mt-10 mb-12 px-6 py-3 text-white font-semibold rounded-lg shadow-lg bg-button-blue transition-transform hover:scale-105"
            >
                ENTER
            </button>
        </div>
    );
}

export default MarsIntro;