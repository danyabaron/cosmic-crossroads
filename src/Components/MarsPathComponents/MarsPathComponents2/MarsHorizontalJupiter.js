import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MarsGif from '../../../assets/mars-art/mars-art-official.gif';
import JupiterDefault from '../../../assets/jupiter-art/jupiter-art.png';
import JupiterGif from '../../../assets/jupiter-art/jupiter-art-gif.gif';
import JupiterAnnoyedGif from '../../../assets/jupiter-art/jupiter-art-annoyed-gif.gif';
import GoldCoin from '../../../assets/other-art/asteroid-coin.png';
import AsteroidAngry from '../../../assets/asteroid-art/asteroid-angry.png';
import YellowSparkle from '../../../assets/other-art/yellow-sparkle.png';
import BlackSparkle from '../../../assets/other-art/black-sparkle.png';  
import ButtonContainer from '../../ButtonContainer';
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
    
    // Store timeouts and intervals in refs so they can be cleared properly
    const timeouts = useRef([]);
    const intervals = useRef([]);

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

    // FIRST SECTION/PANEL ANIMATION
    useGSAP(() => {
        const marsDialogs = gsap.utils.toArray(".mars-dialogue");
        const jupiterDialogs = gsap.utils.toArray(".jupiter-dialogue");

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
            trigger: jupiterBattleRef.current,
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
                
                            // Timeline for coordinated animations
                            const tl = gsap.timeline({
                                onComplete: () => {
                                    asteroid.remove();
                                    const timeoutId = setTimeout(() => createAsteroids(), 500);
                                    timeouts.current.push(timeoutId);
                                }
                            });
                
                            // Add asteroid movement animation
                            tl.to(asteroid, {
                                x: "-100vw", // Move fully off-screen
                                duration: 3, // Animation duration
                                ease: "linear"
                            });
                
                            // Add opacity animation that starts at the halfway point
                            tl.to(asteroid, {
                                opacity: 0, // Fade to transparent
                                duration: .2, // Half the duration of the movement
                                ease: "power1.in" // Smooth easing for fade
                            }, "-=1.5"); // Start 1.5 seconds before the main animation ends (halfway through)
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
                nextScreen = "/mars-venus-jupiter";
            } else {
                nextScreen = "/mars-jupiter";
            }
        } else {
            // Stick with Mars decision
            if (characters && characters.includes("Venus")) {
                nextScreen = "/mars-venus";
            } else {
                nextScreen = "/mars-solo";
            }
        }
        
        console.log("Navigating to:", nextScreen);
        setTimeout(() => {
            navigate(nextScreen);
        }, 100);
    };

    const buttons = [
        {
            text: "Compromise with Jupiter",
            style: "bg-main-black text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600",
            onClick: () => handleDecision('jupiter')
        },
        {
            text: "Stick with your Malefic",
            style: "bg-main-black text-white px-4 py-2 rounded-md shadow-md",
            onClick: () => handleDecision('mars')
        }
    ];

    return (
        <div className='bg-jupiter-bg-scroll w-full min-w-screen relative pt-14 bg-center overflow-x-hidden' id='mars-path-container'>
            {/* container for the jupiter-grotto portion at top left of screen */}
            <div className='flex flex-col w-2/3 md:w-1/2 h-fit mt-10 ml-5 gap-5' id='jupiter-grotto-container'>
                {/* container for the top black box */}
                <div className='flex flex-col md:flex-row lg:flex-row gap-8 bg-main-black p-5 text-white rounded-md items-center' id='jupiter-bio-text-container'>
                    <div className='flex flex-col gap-4' id='jupiter-grotto-text'>
                        <h1 className='text-xl font-header'>Jupiter's Grotto</h1>
                        <p className='text-sm'> Keep scrolling to learn about what Jupiter wants to do about the asteroids coming to us.</p>
                        <p className='text-xs'>Traits: growth, luck, benevolence</p>
                    </div>
                    <div className='flex flex-col items-center justify-center' id='jupiter-bio'>
                        <h1 className='text-sm text-nowrap'>View Jupiter's Bio</h1>
                        <img className="md:max-w-[65px] h-auto" src={JupiterDefault} alt="Jupiter Bio Image"/>
                    </div>
                </div>
                {/* container for the bottom black box */}
                <div className='bg-main-black rounded-md w-52 p-5' id='scroll-text-container'>
                    <p className='text-xs text-white'>Use your L or R arrow keys to scroll horizontally or scroll.</p>
                </div>
            </div>

            {/* container for FIRST scroll section / dialogue */}
            <section id="panel" className='w-screen min-h-screen flex flex-col gap-14'>
                <div id='container-panel-mars' className='flex flex-row w-full h-fit pt-12 justify-between'>
                    <div id='' className='mars-dialogue flex flex-row w-fit h-fit mt-9 ml-12 '>
                        <div id='mars-pic' className='mt-14'>
                            <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="Mars Gif"/>
                        </div>
                        <div id ='mars-text' className='flex w-64 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                            WAR! Goddammit, war. No one ever wants to go to war with me these days. Also... why is everything so gassy in here? ...
                        </div>
                    </div>
                </div>
                <div id='container-panel-jupiter' className='flex flex-row w-full h-full justify-end '>
                    <div id='' className='jupiter-dialogue flex flex-row w-fit h-fit mr-14'>
                        <div id='jupiter-pic' className='mt-14'>
                            <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={JupiterAnnoyedGif} alt="Jupiter Gif"/>
                        </div>
                        <div id ='jupiter-text' className='flex w-64 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                            Mars, you need to just listen to others for once. Not everything needs to be filled with aggression. Also, why do you even want to fight it? Do you know what that's going to cause?
                        </div>
                    </div>
                </div>
            </section>

            {/* container for SECOND scroll section / dialogue */}
            <section id="panel" className='relative w-screen min-h-screen flex flex-col justify-center gap-14'>
                <div id='container-panel-jupiter' className='flex w-full h-fit pt-12 justify-between gap-6 flex-col md:flex-row pl-5 pr-5'>
                    <div id='jupiter-dialogue-2' className='flex flex-row w-fit h-fit'>
                        <div id='jupiter-pic' className='mt-14'>
                            <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={JupiterGif} alt="jupiter Gif"/>
                        </div>
                        <div id ='jupiter-text' className='flex w-fit md:w-72 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                            I say try to negotiate with the guy. Or maybe there's a greater purpose to all of this. Maybe the asteroid isn't even going to hit us at all.
                        </div>
                    </div>
                    <div id='benefic-text' className='relative flex w-fit md:w-96 h-fit bg-white rounded-md font-body text-wrap p-5 mr-8 text-xs md:text-sm'>
                    <img id='corner-yellow-sparkle' className='absolute w-[100px] h-auto max-w-full max-h-full object-contain -top-8 -right-11' loading='lazy' src={YellowSparkle}/>
                        Benefic planets, such as Jupiter, tend to have an overindulgent streak. Jupiter's optimist attitude can help balance out your will to take action. However, Jupiter sometimes needs to understand that their buoyance attitude sometimes can get them in trouble.
                    </div>
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
                    <div id='mars-dialogue' className='flex flex-row w-fit h-fit self-start p-5'>
                        <div id='mars-pic' className='mt-14'>
                            <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="Mars Gif"/>
                        </div>
                        <div id ='mars-text' className='flex w-96 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                            In traditional astrology, Mars was known as the lesser malefic planet, with Saturn being the bigger malefic planet. Traditional astrologers associated malefic planets to represent everything that was 'bad' about being alive
                        </div>
                    </div>
                    <div id='mars-dialogue' className='flex flex-row w-fit h-fit self-end p-5'>
                        <div id ='mars-text' className='flex w-96 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                            As a malefic planet, specifically Mars, you thrive on acting on your 'survival instinct'. Mars is what gets you out of danger, but won't play defense.
                        </div>
                        <div id='mars-pic' className='mt-14'>
                            <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="jupiter Gif"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* container for FOURTH scroll section / dialogue */}
            <section id="panel" className='w-screen min-h-screen flex flex-col justify-center'>
                <div id='container-panel-mars' className='items-center flex flex-col '>
                    <div id='mars-dialogue' className='flex flex-row w-fit h-fit p-5'>
                        <div id='mars-pic' className='mt-14'>
                            <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="Mars Gif"/>
                        </div>
                        <div id ='mars-text' className='flex w-96 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                            mars animation here
                        </div>
                    </div>
                </div>
            </section>

            {/* container for FIFTH scroll section / dialogue */}
            <section id="panel" className='w-screen min-h-screen flex flex-col justify-center'>
                <div id='container-panel' className='flex flex-col items-center gap-14'>
                    <div id='jupiter-dialogue' className='flex flex-row w-fit h-fit self-start p-7 ml-9'>
                        <div id='jupiter-pic' className='mt-14'>
                            <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={JupiterAnnoyedGif} alt="jupiter Gif"/>
                        </div>
                        <div id ='jupiter-text' className='flex w-fit md:w-72 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                            I don't think fighting is the answer! I wish you would just listen to me for once.
                        </div>
                    </div>
                    <div id='mars-dialogue' className='flex flex-row w-fit h-fit self-end p-7 mr-9'>
                        <div id='mars-pic' className='mt-14'>
                            <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="Mars Gif"/>
                        </div>
                        <div id ='mars-text' className='flex w-96 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                            Boys go to Jupiter to get stupider. It's true. Which is why I should go with my plan.
                        </div>
                    </div>
                </div>
            </section>

            {/* container for SIXTH/FINAL scroll section / dialogue */}
            <section id="panel" className='w-screen min-h-screen flex flex-col justify-center pr-5'>
                <div id='container-panel' className='flex flex-col items-center gap-14'>
                    <div id='header' className='font-header text-white font-bold'>
                        <h1>Decision Time: 15 seconds</h1>
                    </div>
                    <div id='planet-pics' className='flex flex-row gap-5 items-center justify-center w-full h-fit'>
                        <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="Mars Gif"/>
                        <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={JupiterGif} alt="Jupiter Gif"/>
                    </div>
                    <div id='decision-text' className='flex w-1/3 h-fit bg-white text-main-black rounded-md shadow-md font-body text-wrap p-5 text-xs md:text-sm'>
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
    );
}

export default MarsHorizontalJupiter;