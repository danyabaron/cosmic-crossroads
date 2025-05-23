import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MarsGif from '../../../assets/mars-art/mars-art-official.gif';
import JupiterDefault from '../../../assets/jupiter-art/jupiter-art.png';
import JupiterGif from '../../../assets/jupiter-art/jupiter-art-gif.gif';
import JupiterAnnoyedGif from '../../../assets/jupiter-art/jupiter-art-annoyed-gif.gif';
import GoldCoin from '../../../assets/other-art/asteroid-coin.png';
import AsteroidAngry from '../../../assets/asteroid-art/asteroid-angry.png';
import YellowSparkle from '../../../assets/other-art/yellow-sparkle.png';
import AsteroidMouthOpen from '../../../assets/asteroid-art/asteroid-mouth-open.png';   
import BlackSparkle from '../../../assets/other-art/black-sparkle.png';  
import ButtonContainer from '../../ButtonContainer';
import Fireball from '../../../assets/other-art/fire.gif';
import StarBackground from '../../../Components/StarBackground.js';
import CoinSound from '../../../assets/other-art/coin-sound.mp3';
import SaturnPNG from '../../../assets/saturn-art/saturn-mouth-open.png';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function MarsHorizontalJupiter({ setScreen, addCharacter, characters }) {
    const navigate = useNavigate();
    
    // Define all the necessary refs
    const container = useRef(null);
    const jupiterRef = useRef(null);
    const jupiterBattleRef = useRef(null);
    const coinContainerRef = useRef(null);
    const asteroidContainerRef = useRef(null);
    const asteroidRefs = useRef([]);
    const coinRefs = useRef([]);
    
    // Audio ref for coin sound
    const coinSoundRef = useRef(new Audio(CoinSound));
    
    // Store timeouts and intervals in refs so they can be cleared properly
    const timeouts = useRef([]);
    const intervals = useRef([]);

    // jupiter bio popup states
    const [modalIsOpen, setIsOpen] = useState(false);
    
    // Toggle the popup
    const togglePopup = () => {
        setIsOpen(!modalIsOpen);
    };

    // Clear a timeout and remove it from the timeouts ref
    const clearAndRemoveTimeout = (timeoutId) => {
        clearTimeout(timeoutId);
        timeouts.current = timeouts.current.filter(id => id !== timeoutId);
    };

    // Clear an interval and remove it from the intervals ref
    const clearAndRemoveInterval = (intervalId) => {
        clearInterval(intervalId);
        intervals.current = intervals.current.filter(id => id !== intervalId);
    };

    // Setup the coin sound
    useEffect(() => {
        const audio = coinSoundRef.current;
        
        // Set audio to loop
        audio.loop = true;
        audio.volume = 0.5; // Adjust volume as needed
        
        return () => {
            // Cleanup: pause and reset audio when component unmounts
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    // FIRST SECTION/PANEL ANIMATION
    useGSAP(() => {
        const marsDialogs = gsap.utils.toArray(".mars-dialogue");
        const jupiterDialogs = gsap.utils.toArray(".jupiter-dialogue");
        const jupiterDialogs2 = gsap.utils.toArray(".jupiter-dialogue2");
        const marsDialogs2 = gsap.utils.toArray(".mars-dialogue2");

        marsDialogs.forEach((dialog) => {
            gsap.fromTo(dialog,
                { x: "-100%", opacity: 0 },
                {
                    x: "0%",
                    opacity: 1,
                    duration: 3, // Slower animation
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: dialog,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: 1,  // Keeps it synced with the scroll
                    }
                }
            );
        });

        jupiterDialogs.forEach((dialog) => {
            gsap.fromTo(dialog,
                { x: "100%", opacity: 0 },
                {
                    x: "0%",
                    opacity: 1,
                    duration: 3, // Slower animation
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: dialog,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: 1,  // Keeps it synced with the scroll
                    }
                }
            );
        });

        jupiterDialogs2.forEach((dialog) => {
            gsap.fromTo(dialog,
                { x: "100%", opacity: 0 },
                {
                    x: "0%",
                    opacity: 1,
                    duration: 3, // Slower animation
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.last-dialogue',
                        start: "top center",
                        end: "bottom 60%",
                        scrub: 1,  // Keeps it synced with the scroll
                        // markers: true,
                    }
                }
            );
        });

        marsDialogs2.forEach((dialog) => {
            gsap.fromTo(dialog,
                { x: "-100%", opacity: 0 },
                {
                    x: "0%",
                    opacity: 1,
                    duration: 3, // Slower animation
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.last-dialogue',
                        start: "top center",
                        end: "bottom 60%",
                        scrub: 1,  // Keeps it synced with the scroll
                        // markers: true,
                    }
                }
            );
        });
    }, []);

    // SECOND SECTION/PANEL ANIMATION
    useGSAP(() => {
        // Function to shoot coins at asteroids at random positions

         
                    let jupiterAnimation = gsap.to(jupiterRef.current, {
                        y: -50,
                        duration: 2,
                        repeat: -1,
                        yoyo: true,
                        ease: "power1.inOut",
                        scrollTrigger: {
                            trigger: jupiterBattleRef.current,
                            start: "top center",
                            end: "bottom center",
                            toggleActions: "play none none none",
                        },
                    });

        // Create a scroll trigger for the coin sound
        let soundScrollTrigger = ScrollTrigger.create({
            trigger: document.querySelectorAll('#panel')[1],
            start: 'top center',
            end: 'bottom center',
            onEnter: () => {
                coinSoundRef.current.play();
            },
            onLeave: () => {
                coinSoundRef.current.pause();
                coinSoundRef.current.currentTime = 0;
            },
            onEnterBack: () => {
                coinSoundRef.current.play();
            },
            onLeaveBack: () => {
                coinSoundRef.current.pause();
                coinSoundRef.current.currentTime = 0;
            },
        });

        const shootCoin = () => {
            if (!coinContainerRef.current) return; // Check if ref exists
            
            const jupiterRect = jupiterRef.current?.getBoundingClientRect();
            if (!jupiterRect) return; // Check if Jupiter element exists

            const coinsToShoot = 5; // Number of coins to shoot at once

            const minY = 0;  // Minimum top position
            const maxY = 200;  // Maximum top position
    
            for (let i = 0; i < coinsToShoot; i++) {
                try {
                    const coin = document.createElement('img');
                    coin.src = GoldCoin; // Coin image
                    coin.className = 'absolute w-10 h-10'; // Adjust the size as needed
                    coin.style.left = `30px`; 
                    const randomY = Math.random() * (maxY - minY) + minY; // Random vertical movement
                    coin.style.top = `${randomY}px`;
                    
                    if (coinContainerRef.current) {
                        coinContainerRef.current.appendChild(coin);
                        
                        gsap.fromTo(
                            coin,
                            { x: 0, y: 0, opacity: 1 },
                            {
                                x: '100vh',
                                y: randomY,
                                duration: 3,
                                opacity: 1,
                                ease: 'power2.out',
                                onComplete: () => {
                                    if (coin.parentNode) {
                                        coin.remove(); // Remove coin after animation completes
                                    }
                                }, 
                            }
                        );
                    }
                } catch (error) {
                    console.error("Error creating coin:", error);
                }
            }
        };
    
        // Continuous coin shooting with a delay
        const shootCoinsContinuously = () => {
            // Shoot coins immediately when this function is called
            shootCoin();
            
            // Then set up the interval for continuous shooting
            const intervalId = setInterval(() => {
                if (coinContainerRef.current) {
                    shootCoin();
                } else {
                    clearInterval(intervalId); // Stop if container no longer exists
                }
            }, 3000);
            intervals.current.push(intervalId);
            return intervalId;
        };
    
        // Trigger coin shooting when scroll is in the correct section
        let coinShootScrollTrigger = ScrollTrigger.create({
            trigger: document.querySelectorAll('#panel')[1],
            start: 'top center',
            end: 'bottom center',
            onEnter: shootCoinsContinuously,
            onEnterBack: shootCoinsContinuously, // Also trigger when scrolling back up
            onLeaveBack: () => {
                intervals.current.forEach(clearAndRemoveInterval);
            },
            toggleActions: 'play none none reverse',
        });
            
                const createAsteroids = () => {
                    if (!asteroidContainerRef.current) return;
                
                    const asteroidCount = 5;
                    const existingAsteroids = asteroidContainerRef.current.querySelectorAll('img');
                
                    // Prevent spawning too many asteroids
                    if (existingAsteroids.length >= 10) return;
                
                    for (let i = 0; i < asteroidCount; i++) {
                        if (!asteroidContainerRef.current) return;
                
                        const containerHeight = asteroidContainerRef.current.clientHeight;
                        const randomTop = Math.random() * containerHeight;
                
                        const asteroid = document.createElement('img');
                        asteroid.src = AsteroidAngry;
                        asteroid.className = 'absolute w-10 h-10 z-0';
                        asteroid.style.right = `0px`; // Start from right edge
                        asteroid.style.top = `${randomTop}px`;
                
                        asteroidContainerRef.current.appendChild(asteroid);
                
                        // Ensure asteroid is added to DOM before animating
                        requestAnimationFrame(() => {
                            if (!asteroid.parentNode) {
                                console.error("Asteroid not appended properly!");
                                return;
                            }
                
                            const tl = gsap.timeline({
                                onComplete: () => {
                                    asteroid.remove();
                                    const timeoutId = setTimeout(() => createAsteroids(), 500);
                                    timeouts.current.push(timeoutId);
                                }
                            });
                            
                            // Phase 1: Asteroid enters from the right to some distance in
                            tl.fromTo(asteroid, {
                                x: '0vw',
                            }, {
                                x: '-50vw',
                                duration: 1.5,
                                ease: 'linear'
                            });
                            
                            // Phase 2: Asteroid "gets hit" and turns back around
                            tl.to(asteroid, {
                                x: '100vw', // Exit back to the right
                                duration: 1.5,
                                ease: 'power2.in'
                            }, "+=0"); // No delay between reversal
                        });
                    }
                };
                
                // Initial asteroid spawn
                createAsteroids();
                
                // Scroll-triggered asteroid spawning
                let asteroidScrollTrigger = ScrollTrigger.create({
                    trigger: jupiterBattleRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    onEnter: createAsteroids,
                    onEnterBack: createAsteroids,
                    
                    toggleActions: "play none none none", // Allows for continuous asteroid generation as you scroll up and down

                });
                
                // Cleanup function
                return () => {
                    // Kill all animations and scroll triggers
                    gsap.killTweensOf("*");
                    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                    
                    // Stop the sound
                    if (coinSoundRef.current) {
                        coinSoundRef.current.pause();
                        coinSoundRef.current.currentTime = 0;
                    }
                };
        
        }, []);
    
    
    
    // Update the buttons to use navigate directly instead of setScreen
    const handleDecision = (decision) => {
        console.log("Decision made:", decision);
        console.log("Current characters:", characters);
        
        let nextScreen = "";
        
        if (decision === 'jupiter') {
            // Add Jupiter to team
            if (addCharacter) {
                addCharacter('Jupiter');
            }
            
            // Determine next screen based on current team
            if (characters && characters.includes("Venus")) {
                nextScreen = "/mars-venus-jupiter-ending";
            } else {
                nextScreen = "/mars-jupiter-ending";
            }
        } else {
            // Stick with Mars decision
            if (characters && characters.includes("Venus")) {
                nextScreen = "/mars-venus-ending";
            } else {
                nextScreen = "/mars-solo-ending";
            }
        }
        
        console.log("Navigating to:", nextScreen);
        setTimeout(() => {
            navigate(nextScreen);
        }, 100);
    };

     //mount to top of page
            useEffect(() => {
                window.scrollTo(0, 0);
            }, []);

    const buttons = [
        {
            text: "Stick with your Malefic",
            style: "bg-main-black text-white font-header px-4 py-2 rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] hover:bg-main-black hover:scale-105 transition duration-300 ease-in-out",
            onClick: () => handleDecision('mars')
        },
        {
            text: "Compromise with Jupiter",
            style: "bg-main-black text-white font-header px-4 py-2 rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] hover:bg-main-black hover:scale-105 transition duration-300 ease-in-out",
            onClick: () => handleDecision('jupiter')
        },
        
    ];

    return (
        <div className='relative min-h-screen w-full overflow-hidden'>
            {/* Star background */}
            <StarBackground />
            
            {/* Background with proper z-index */}
            <div className="absolute inset-0 bg-jupiter-bg-reg bg-center bg-opacity-90 z-[5]"></div>
            
            {/* Main content with higher z-index */}
            <div className="relative w-full min-w-screen pt-14 overflow-x-hidden z-[20]">
                {/* container for the jupiter-grotto portion at top left of screen */}
                <div className='flex flex-col  w-1/3 md:w-1/3 h-fit mt-10 ml-5 gap-5' id='jupiter-grotto-container'>
                    {/* container for the top black box */}
                    <div className='flex flex-col md:flex-row lg:flex-row gap-8 bg-main-black p-5 text-white rounded-md items-center' id='jupiter-bio-text-container'>
                        <div className='flex flex-col gap-4' id='jupiter-grotto-text'>
                            <h1 className='text-xl font-header'>Jupiter's Grotto</h1>
                            <p className='text-sm '> Keep scrolling to learn about what Jupiter wants to do about the asteroids coming to us.</p>
                            <p className='text-sm font-header'>Traits: 
                                <span className='font-ttneueMedium text-[#DA78F6]'> growth</span>,  
                                <span className='font-ttneueMedium text-[#FFE684]'> luck</span>,
                                <span className='font-ttneueMedium text-[#F59D42]'> benevolence</span>,
                            </p>
                        </div>
                        <div className='flex flex-col items-center justify-center cursor-pointer' onClick={togglePopup} id='jupiter-bio'>
                            <h1 className='text-sm text-nowrap font-header'>View Jupiter's Bio</h1>
                            <img className="md:max-w-[65px] h-auto hover:scale-110 transition-transform duration-200 ease-in-out" src={JupiterDefault} alt="Jupiter Bio Image"/>
                        </div>
                    </div>

                    {modalIsOpen && (
                    <div className="fixed inset-0 bg-main-black bg-opacity-50 flex justify-center items-center z-50 pt-16">
                        <div className="bg-main-black text-black p-6 rounded-lg w-96 max-w-[90vw] my-4 
                        overflow-hidden drop-shadow-[0_10px_20px_rgba(217,207,170,0.6)] shadow-lg relative">
                            {/* Close Button */}
                            <button
                                className="absolute top-2 right-3 text-lg font-bold
                                hover:scale-110 transition-transform duration-200 ease-in-out text-white hover:text-[#D9CFAA]"
                                onClick={togglePopup}
                            >
                                ✖
                            </button>

                            <div className='flex justify-center items-center flex-col gap-2 pt-5'>
                                {/* Jupiter Bio Content */}
                                <h2 className="text-xl text-white font-bold font-header">JUPITER</h2>
                                <img className="w-[80px] sm:w-[60px] md:w-[80px] lg:w-[80px]" src={JupiterGif} alt="Jupiter Bio Image"/>
                            </div>

                            <div className="flex flex-col gap-2 text-left text-sm w-full mt-4 px-2 md:px-5 text-white">
                                <p className=''><span className="font-bold text-[#D9CFAA] ">Planet:</span> Jupiter</p>
                                <p className=''><span className="font-bold text-[#D9CFAA] ">Dignity:</span> Benefic</p>
                                <p className=''><span className="font-bold text-[#D9CFAA] ">Rules the Zodiacs:</span> Sagittarius & Pisces</p>
                                <p className="break-words "><span className="font-bold text-[#D9CFAA] ">Representations:</span> growth, expansion, opportunities, luck, prosperity, benevolence</p>
                                <p className=''><span className="font-bold text-[#D9CFAA]">Color:</span> <span className='text-[#DA78F6] '>Purple</span> & <span className='text-[#D9CFAA] '>Tan</span></p>
                                <p className="mt-2 mb-2 ">Jupiter is the student of life. They love to learn about life and strive to 
                                    earn more wisdom in this world. 
                                    <br></br>
                                    <br></br>
                                    Jupiter likes to assume the best in people, and deals 
                                    with conflict in a diplomatic manner. Jupiter likes to expand energies, whether that is good or bad.</p>
                            </div>
                        </div>
                    </div>
                )}




                    {/* container for the bottom black box */}
                    <div className='bg-main-black rounded-md w-52 p-5' id='scroll-text-container'>
                        <p className='text-sm  text-white'>Scroll down or 
                        use your UP or DOWN arrow keys to scroll vertically.</p>
                    </div>
                </div>

                {/* container for FIRST scroll section / dialogue */}
                <section id="panel" className='w-screen min-h-screen flex flex-col gap-14'>
                    <div id='container-panel-mars' className='flex flex-row w-full h-fit pt-12 justify-center'>
                        <div id='' className='mars-dialogue flex flex-row w-fit h-fit mt-9 ml-12 '>
                            <div id='mars-pic' className='mt-14'>
                                <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="Mars Gif"/>
                            </div>
                            <div id ='mars-text' className='flex w-64 h-fit bg-white rounded-md text-wrap p-5 text-xs md:text-sm'>
                                WAR! Goddammit, war. No one ever wants to go to war with me these days.
                                <br /><br />
                                 Also... why is everything so gassy in here? ...
                            </div>
                        </div>
                    </div>
                    <div id='container-panel-jupiter' className='flex flex-row w-full h-full justify-center'>
                        <div id='' className='jupiter-dialogue flex flex-row w-fit h-fit mr-14'>
                            <div id='jupiter-pic' className='mt-14'>
                                <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={JupiterAnnoyedGif} alt="Jupiter Gif"/>
                            </div>
                            <div id ='jupiter-text' className='flex w-64 h-fit bg-white rounded-md  text-wrap p-5 text-xs md:text-sm'>
                                Mars, you need to just listen to others for once. Not everything needs to be filled with aggression. 
                                <br /><br />
                                Also, why do you even want to fight the asteroids? Do you know what that's going to cause?
                            </div>
                        </div>
                    </div>
                </section>

                {/* container for SECOND scroll section / dialogue */}
                <section id="panel" className='relative w-screen min-h-screen flex flex-col justify-center gap-14'>
                    
                    
                    <div id='container-panel-jupiter' className='flex w-full h-fit justify-between flex-col md:flex-row px-10 md:px-40 pl-5 pr-5'>
                        <div id='jupiter-dialogue-2' className='flex flex-row w-fit h-fit'>
                            <div id='jupiter-pic' className='mt-14'>
                                <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={JupiterGif} alt="jupiter Gif"/>
                            </div>
                            <div id ='jupiter-text' className='flex w-fit md:w-72 h-fit bg-white rounded-md text-wrap p-5 text-xs md:text-sm'>
                                I say try to negotiate with the guy. Or maybe there's a greater purpose to all of this. Maybe the asteroid isn't even going to hit us at all.
                            </div>
                        </div>
                        <div id='benefic-text' className='relative flex flex-col w-fit md:w-96 h-fit bg-main-black rounded-md  text-white text-wrap p-5 mr-8 text-xs md:text-sm'>
                            
                            <img id='corner-yellow-sparkle' className='absolute w-[100px] h-auto max-w-full max-h-full object-contain -top-8 -left-11 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] animate-pulse' loading='lazy' src={YellowSparkle}/>
                            <img id='corner-yellow-sparkle' className='absolute w-[100px] h-auto max-w-full max-h-full object-contain -bottom-8 -right-11 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] animate-pulse ' loading='lazy' src={YellowSparkle}/>
                            <h1 className='text-center text-lg text-white font-header font-bold mb-3'>Benefic Fact:</h1>
                            Benefic planets, such as Jupiter, tend to have an overindulgent streak. 
                            Jupiter's optimist attitude can help balance out your will to take action. 
                            <br></br>
                            <br></br>
                            
                            However, Jupiter sometimes needs to understand that their buoyance attitude sometimes can get them in trouble.
                        </div>
                    </div>

                    <div className='flex justify-center items-center mb-12 w-full'>
                        <h1 className='font-header text-white text-2xl text-center px-4'>
                            Watch Jupiter try to Negotiate with the Asteroids!
                        </h1>
                    </div>
                    

                    {/* Animation Section */}
                    <div ref={jupiterBattleRef} className='relative w-screen h-[300px] justify-center overflow-hidden bg-black' id='animation-container'>
                        {/* Jupiter Static Image */}
                        <img ref={jupiterRef} src={JupiterDefault} alt="Jupiter Default" className="absolute bottom-20 left-3 w-[100px] z-10" />
                        <div ref={coinContainerRef} className='absolute w-full h-full flex items-center' id='coin-container'>
                            {/* Coins Falling */}
                        </div>
                        {/* Asteroids */}
                        <div ref={asteroidContainerRef} id='asteroid-container' className="absolute w-full h-full">
                        </div>
                    </div>
                </section>

                {/* container for THIRD scroll section / dialogue */}
                <section id="panel" className='w-screen min-h-screen flex flex-col justify-center'>
                    <div id='container-panel-mars' className='items-center flex flex-col gap-14'>
                        <div id='' className='jupiter-dialogue flex flex-row w-fit h-fit p-5'>
                            <div id='mars-pic' className='mt-14'>
                                <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="Mars Gif"/>
                            </div>
                            <div id ='mars-text' className='relative flex flex-col text-white  w-96 h-fit bg-main-black rounded-md text-wrap p-5 text-xs md:text-sm'>
                            <img id='corner-asteroid' className='absolute w-12 h-auto max-w-full max-h-full object-contain -bottom-6 -left-5 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] animate-pulse ' loading='lazy' src={AsteroidMouthOpen}/>
                            <img id='corner-saturn' className='absolute w-28 h-auto max-w-full max-h-full object-contain -top-4 -right-9 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] ' loading='lazy' src={SaturnPNG}/>        
                                    
                                    <h1 className='text-center text-lg text-white font-header font-bold mb-3 '>Malefic Fact:</h1>
                                In traditional astrology, Mars was known as the lesser malefic planet, 
                                with Saturn being the bigger malefic planet. 
                                <br /><br />
                                Traditional astrologers associated malefic planets to 
                                represent everything that was 'bad' about being alive.
                            </div>
                        </div>
                        <div id='' className='mars-dialogue flex flex-row w-fit h-fit p-5'>
                            <div id ='mars-text' className='relative flex flex-col w-96 h-fit bg-main-black text-white rounded-md  text-wrap p-5 text-xs md:text-sm'>
                                <img id='corner-black-sparkle' className='absolute w-[100px] h-auto max-w-full max-h-full object-contain -top-10 -left-11 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] animate-pulse ' loading='lazy' src={BlackSparkle}/>
                                <img id='corner-black-sparkle' className='absolute w-[100px] h-auto max-w-full max-h-full object-contain -bottom-11 -right-11 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] animate-pulse ' loading='lazy' src={BlackSparkle}/>
                                    <h1 className='text-center text-lg text-white font-header font-bold mb-3 '>Mars Fact:</h1>
                                As a malefic planet, specifically Mars, you thrive on acting on your 'survival instinct'. 
                                <br></br>
                                <br></br>
                                Mars is what gets you out of danger, but won't play defense.
                            </div>
                            <div id='mars-pic' className='mt-14'>
                                <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="jupiter Gif"/>
                            </div>
                        </div>
                    </div>
                </section>

                {/* container for FOURTH scroll section / dialogue */}
                <section id="panel" className='last-dialogue w-screen min-h-screen flex flex-col justify-center'>
                    <div id='container-panel' className='flex flex-col items-center gap-14'>
                        <div id='' className='jupiter-dialogue2 flex flex-row w-fit h-fit self-start p-7 ml-9'>
                            <div id='jupiter-pic' className='mt-14'>
                                <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={JupiterAnnoyedGif} alt="jupiter Gif"/>
                            </div>
                            <div id ='jupiter-text' className='flex w-fit md:w-72 h-fit bg-white rounded-md  text-wrap p-5 text-xs md:text-sm'>
                                I don't think fighting is the answer! I wish you would just listen to me for once.
                                <br /><br />
                                And what happens when your 
                                'action' backfires? You can't just punch your way through everything, Mars.
                            </div>
                        </div>
                        <div id='' className='mars-dialogue2 flex flex-row w-fit h-fit self-end p-7 mr-9'>
                            <div id='mars-pic' className='mt-14'>
                                <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="Mars Gif"/>
                            </div>
                            <div id ='mars-text' className='flex w-96 h-fit bg-white rounded-md text-wrap p-5 text-xs md:text-sm'>
                                Boys go to Jupiter to get stupider. It's true. Which is why I should go with my plan.
                                <br /><br />
                                Thinking is for Mercury. Action is for me. And right now, action is what we need.  
                            </div>
                        </div>
                    </div>
                </section>

                {/* container for SIXTH/FINAL scroll section / dialogue */}
                <section id="panel" className='w-screen min-h-screen flex flex-col justify-center pr-5'>
                    <div id='container-panel' className='flex flex-col items-center gap-8'>
                            <div id='decision-header' className='flex bg-main-black flex-col h-full w-fit justify-center drop-shadow-[0_0_15px_#ffff00] items-center relative z-[15] p-3 rounded-md shadow-lg'>
                                    <h1 className="text-center font-header max-w-lg text-white text-xl">
                                        Decision Time!
                                    </h1>
                                </div>
                        <div id='planet-pics' className='flex flex-row gap-5 items-center justify-center w-full h-fit'>
                            <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="Mars Gif"/>
                            <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={JupiterGif} alt="Jupiter Gif"/>
                        </div>
                        <div id='decision-text' className='flex w-1/3 h-fit bg-white text-main-black rounded-md shadow-md text-wrap p-5 text-md'>
                            It's up to you to decide if you want to compromise with Jupiter, or fight the asteroids in the way that you want to. The decision is yours.
                        </div>
                        <div id='button-container-wrapper' className='flex flex-col items-center justify-center gap-4'>
                            {buttons.map((button, index) => (
                                <button
                                    key={index}
                                    onClick={button.onClick}
                                    className={button.style}
                                >
                                    {button.text}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}


export default MarsHorizontalJupiter;