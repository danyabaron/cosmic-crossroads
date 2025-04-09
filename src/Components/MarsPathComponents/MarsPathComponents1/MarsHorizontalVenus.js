import React, { useEffect, useState, useRef } from 'react';

import VenusMouthOpen from '../../../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../../../assets/mars-art/mars-art-official.gif';
import MarsDefaultPng from '../../../assets/mars-art/mars-art-official1.png';
import VenusGifAnnoyed from '../../../assets/venus-art/venus-annoyed-gif.gif';
import VenusGifDefault from '../../../assets/venus-art/venus-default-GIF.gif';
import VenusGifMouthOpen from '../../../assets/venus-art/venus-mouth-open-gif.gif';
import VenusAnnoyedImg from '../../../assets/venus-art/venus-annoyed.png';
import VenusDefaultImg from '../../../assets/venus-art/venus-default.png';
import ButtonContainer from '../../ButtonContainer';
import AsteroidMouthOpen from '../../../assets/asteroid-art/asteroid-mouth-open.png'; 
import AsteroidAngry from '../../../assets/asteroid-art/asteroid-angry.png';
import AsteroidHappy from '../../../assets/asteroid-art/asteroid-happy.png';
import YellowSparkle from '../../../assets/other-art/yellow-sparkle.png';
import BlackSparkle from '../../../assets/other-art/black-sparkle.png';  
import Fireball from '../../../assets/other-art/fire.gif';
import { gsap } from "gsap";
import { useNavigate } from 'react-router-dom';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import StarBackground from '../../../Components/StarBackground.js';
import ShootSound from '../../../assets/other-art/mars-shoot.mp3'; // Import the sound file for shooting fireballs
import { useAudio } from '../../../Components/AudioContext';
import BeyoncePNG from '../../../assets/other-art/beyonce.png';

gsap.registerPlugin(ScrollTrigger);

function getRandomPosition(min, max) {
    return Math.random() * (max - min) + min;
}

function MarsHorizontalVenus({ setScreen, addCharacter, characters }) {

    const [modalIsOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!modalIsOpen);
    };

    const navigate = useNavigate();

    const marsRef = useRef(null);
    const fireballContainerRef = useRef(null);
    const marsBattleRef = useRef(null);
    const asteroidContainerRef = useRef(null);
    const soundRef = useRef(null); // Reference to the audio element

    const { pauseAudio, resumeAudio } = useAudio();

    let marsAnimation;
    let fireballTimeout;
    let fireballScrollTrigger;
    let asteroidScrollTrigger;
    let lightningInterval;

    const minDistance = 40;
    const maxRetries = 50;

    function generateAsteroidPositions(numAsteroids) {
        let asteroids = [];
        for (let i = 0; i < numAsteroids; i++) {
            let newAsteroid;
            let overlapping;
            let retries = 0;
            do {
                overlapping = false;
                newAsteroid = {
                    top: getRandomPosition(10, 90),
                    left: getRandomPosition(10, 30)
                };
                for (let asteroid of asteroids) {
                    let dx = newAsteroid.left - asteroid.left;
                    let dy = newAsteroid.top - asteroid.top;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < minDistance) {
                        overlapping = true;
                        break;
                    }
                }
                retries++;
                if (retries > maxRetries) {
                    console.warn("Max retries reached, placing asteroid anyway.");
                    break;
                }
            } while (overlapping);
            asteroids.push(newAsteroid);
        }
        return asteroids;
    }

    const asteroidPositions = generateAsteroidPositions(5);

    useGSAP(() => {
        const marsDialogs = gsap.utils.toArray(".mars-dialogue");
        const venusDialogs = gsap.utils.toArray(".venus-dialogue");
        const maleficDialog1 = gsap.utils.toArray(".malefic-dialogue1");
        const maleficDialog2 = gsap.utils.toArray(".malefic-dialogue2");
        const maleficDialog3 = gsap.utils.toArray(".malefic-dialogue3");
        const beyonceQuote = gsap.utils.toArray(".beyonce-quote");

        marsDialogs.forEach((dialog) => {
            gsap.fromTo(dialog,
                { x: "-100%", opacity: 0 },
                {
                    x: "0%",
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: dialog,
                        start: "top 90%",
                        end: "top 60%",
                        scrub: 0.5,
                        toggleActions: "restart pause reverse pause",
                    }
                }
            );
        });

        venusDialogs.forEach((dialog) => {
            gsap.fromTo(dialog,
                { x: "100%", opacity: 0 },
                {
                    x: "0%",
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: dialog,
                        start: "top 90%",
                        end: "top 60%",
                        scrub: 0.5,
                        toggleActions: "restart pause reverse pause",
                    }
                }
            );
        });

        maleficDialog1.forEach((dialog) => {
            gsap.fromTo(dialog,
                { x: "-100%", opacity: 0 },
                {
                    x: "0%",
                    opacity: 1,
                    duration: 1.5,
                    delay: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '#malefic-text',
                        start: "top center",
                        scrub: 0.5,
                        toggleActions: "restart pause reverse pause",
                    }
                }
            );
        });

        maleficDialog2.forEach((dialog) => {
            gsap.fromTo(dialog,
                { x: "100%", opacity: 0 },
                {
                    x: "0%",
                    opacity: 1,
                    delay: 1,
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: "#malefic-text",
                        start: "top center",
                        scrub: 0.5,
                        toggleActions: "restart pause reverse pause",
                    }
                }
            );
        });

        maleficDialog3.forEach((dialog) => {
            gsap.fromTo(dialog,
                { x: "-100%", opacity: 0 },
                {
                    x: "0%",
                    opacity: 1,
                    delay: 1,
                    duration: 2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: "#malefic-text",
                        start: "top center",
                        scrub: 0.5,
                        toggleActions: "restart pause reverse pause",
                    }
                }
            );
        });

        const beyonceQuoteElement = document.querySelector(".beyonce-quote");
        if (beyonceQuoteElement) {
            gsap.killTweensOf(beyonceQuoteElement);

            const quoteTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".malefic-dialogue3",
                    start: "top 70%",
                    end: "bottom -100%",
                    toggleActions: "play none none reverse",
                },
                repeat: -1,
                yoyo: false,
            });

            gsap.set(beyonceQuoteElement, { 
                opacity: 1,
                scale: 1,
                color: "#171711",
                textShadow: "none"
            });

            quoteTl
                .to(beyonceQuoteElement, {
                    color: "#DA78F6",
                    textShadow: "0px 0px 8px rgba(218,120,246,0.7)",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    duration: 1.5,
                    ease: "power1.inOut"
                })
                .to(beyonceQuoteElement, {
                    color: "#F59D42",
                    textShadow: "0px 0px 10px rgba(245,157,66,0.8)",
                    duration: 1.5,
                    ease: "power1.inOut"
                })
                .to(beyonceQuoteElement, {
                    color: "#FFFFFF",
                    textShadow: "0px 0px 5px rgba(255,255,255,0.5)",
                    duration: 1,
                    ease: "power1.inOut"
                });

            gsap.to(beyonceQuoteElement, {
                scale: 1.05,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".venus-line",
                scrub: true,
                pin: true,
                start: "top top",
                end: "+=100%", 
                onEnter: () => {
                    document.querySelector(".venus-annoyed").src = VenusMouthOpen;
                    document.querySelectorAll(".asteroid-angry").forEach(img => img.src = AsteroidHappy);
                },
                onLeaveBack: () => {
                    document.querySelector(".venus-annoyed").src = VenusAnnoyedImg;
                    document.querySelectorAll(".asteroid-angry").forEach(img => img.src = AsteroidAngry);
                }
            }
        });

        tl.from(".line", {
            scaleX: 0,
            transformOrigin: "left center",
            ease: "none",
            duration: 2,
        }, 0);

        tl.to(".venus-annoyed, .asteroid-angry", {
            x: "50vw", 
            ease: "power2.out",
            duration: 2,
            scale: 1,
        }, "<");

        tl.to(".venus-annoyed, .asteroid-angry", {
            filter: "drop-shadow(0px 0px 10px rgba(255, 215, 0, 1))",
            duration: 0.5, 
            ease: "power1.inOut",
        }, 0.5);

        tl.add(() => {
            document.querySelector(".venus-annoyed").src = VenusMouthOpen;
            document.querySelectorAll(".asteroid-angry").forEach(img => img.src = AsteroidHappy);
        }, tl.duration() / 2);

        tl.to(".venus-annoyed, .asteroid-angry", {
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: "power2.out",
        }, tl.duration() / 2 + 0.5);
    }, []);

    useGSAP(() => {
        // Create audio element for the sound effect
        const sound = new Audio(ShootSound);
        sound.loop = true;
        sound.volume = 0.2; // Lower volume to mix better with theme music
        soundRef.current = sound;

        // Only animate Mars if the reference exists
        if (marsRef.current) {
            marsAnimation = gsap.to(marsRef.current, {
                x: 600,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: marsBattleRef.current,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play none none none",
                },
            });
        }

        const shootFireball = () => {
            if (!marsRef.current || !fireballContainerRef.current) return; // Guard against null references
            
            try {
                const marsRect = marsRef.current.getBoundingClientRect();
                const fireballsToShoot = 5;

                for (let i = 0; i < fireballsToShoot; i++) {
                    const fireball = document.createElement("img");
                    fireball.src = Fireball;
                    fireball.className = "absolute w-10 h-10";
                    fireball.style.left = `${marsRect.left + marsRect.width / 2 - 25}px`;
                    fireball.style.top = `${marsRect.top + marsRect.height / 2}px`;
                    fireballContainerRef.current.appendChild(fireball);

                    const randomX = Math.random() * 200 - 100;
                    const randomY = Math.random() * -400 - 200;
                    const randomDuration = Math.random() * 2 + 2;

                    gsap.fromTo(
                        fireball,
                        { x: 0, y: 0, opacity: 1 },
                        {
                            x: randomX,
                            y: randomY,
                            duration: randomDuration,
                            opacity: 0,
                            ease: "power2.out",
                            onComplete: () => fireball.remove(),
                        }
                    );
                }
            } catch (error) {
                console.error("Error in shootFireball:", error);
            }
        };

        const shootFireballsContinuously = () => {
            fireballTimeout = setInterval(shootFireball, 1000);
        };

        // Create ScrollTrigger only if marsBattleRef exists
        if (marsBattleRef.current) {
            fireballScrollTrigger = ScrollTrigger.create({
                trigger: marsBattleRef.current,
                start: "top center",
                end: "bottom center",
                onEnter: () => {
                    shootFireballsContinuously();
                    // Don't pause the global audio - just play the shooting sound
                    if (soundRef.current) soundRef.current.play().catch(e => console.log("Audio play failed:", e));
                },
                onLeaveBack: () => {
                    if (fireballTimeout) clearInterval(fireballTimeout);
                    // Stop shooting sound without affecting global audio
                    if (soundRef.current) {
                        soundRef.current.pause();
                        soundRef.current.currentTime = 0;
                    }
                },
                onLeave: () => {
                    // Stop shooting sound without affecting global audio
                    if (soundRef.current) {
                        soundRef.current.pause();
                        soundRef.current.currentTime = 0;
                    }
                },
                onEnterBack: () => {
                    // Start shooting sound without affecting global audio
                    shootFireballsContinuously();
                    if (soundRef.current) soundRef.current.play().catch(e => console.log("Audio play failed:", e));
                },
                toggleActions: "play none none none",
            });
        }

        const createAsteroids = () => {
            const asteroidCount = 5;
            const existingAsteroids = asteroidContainerRef.current.querySelectorAll('img');

            if (existingAsteroids.length >= 10) return;

            for (let i = 0; i < asteroidCount; i++) {
                const asteroid = document.createElement("img");
                asteroid.src = AsteroidAngry;
                asteroid.className = "absolute w-10 h-10 z-0";
                asteroid.style.left = `${Math.random() * 100}vw`;
                asteroid.style.top = `-50px`;
                asteroidContainerRef.current.appendChild(asteroid);

                gsap.to(asteroid, {
                    y: "100vh",
                    opacity: 1,
                    duration: Math.random() * 3 + 2,
                    ease: "linear",
                    onComplete: () => {
                        asteroid.remove();
                        createAsteroids();
                    },
                });
            }
        };

        asteroidScrollTrigger = ScrollTrigger.create({
            trigger: marsBattleRef.current,
            start: "top center",
            end: "bottom center",
            onEnter: createAsteroids,
            onEnterBack: createAsteroids,
            toggleActions: "play none none none",
        });

        const createLightning = () => {
            const lightningContainer = document.getElementById("lightningContainer");
            if (!lightningContainer) {
                console.warn("No lightningContainer found. Lightning won't be created.");
                return;
            }

            const lightning = document.createElement("div");
            lightning.classList.add("absolute", "top-0", "left-1/2", "w-[4px]", "h-full", "bg-[#FFFF00]", "z-[9999]", "pointer-events-none");

            const createLightningParts = () => {
                const parts = [];
                let currentTop = 0;

                for (let i = 0; i < 5; i++) {
                    const part = document.createElement("div");
                    part.classList.add("absolute", "bg-[#FFFF00]", "z-[9999]", "pointer-events-none");

                    const left = Math.random() * 20 + 40;
                    const height = Math.random() * 50 + 30;
                    const rotate = Math.random() * 60 - 30;

                    part.style.left = `${left}%`;
                    part.style.top = `${currentTop}px`;
                    part.style.width = "6px";
                    part.style.height = `${height}px`;
                    part.style.transform = `rotate(${rotate}deg)`;
                    currentTop += height;

                    parts.push(part);
                }

                return parts;
            };

            const lightningParts = createLightningParts();
            lightningParts.forEach(part => lightning.appendChild(part));
            lightningContainer.appendChild(lightning);

            gsap.fromTo(lightning, {
                opacity: 0,
                scale: 0.1,
                rotation: Math.random() * 90 - 45,
                top: "-10%",
            }, {
                opacity: 1,
                scale: 1,
                rotation: 0,
                top: "0%",
                duration: 0.2,
                ease: "power2.inOut",
                onComplete: () => {
                    gsap.to(lightning, {
                        opacity: 0,
                        scale: 0.1,
                        duration: 0.3,
                        ease: "power2.out",
                        onComplete: () => lightning.remove(),
                    });
                },
            });

            gsap.to('.mars-battle', {
                backgroundColor: "#000000",
                duration: 0.2,
                ease: "power2.inOut",
                onComplete: () => {
                    gsap.to('.mars-battle', {
                        backgroundColor: "initial",
                        duration: 0.5,
                        ease: "power2.out",
                    });
                },
            });
        };

        lightningInterval = setInterval(() => {
            createLightning();
        }, Math.random() * 3000 + 2000);

        return () => {
            if (marsAnimation) marsAnimation.kill();
            if (fireballTimeout) clearInterval(fireballTimeout);
            if (fireballScrollTrigger) fireballScrollTrigger.kill();
            if (asteroidScrollTrigger) asteroidScrollTrigger.kill();
            if (lightningInterval) clearInterval(lightningInterval);
            
            // Clean up audio
            if (soundRef.current) {
                soundRef.current.pause();
                soundRef.current.currentTime = 0;
            }
            
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const buttons = [
        {
            text: "Stick with your Malefic",
            style: "bg-main-black font-header text-white px-4 py-2 rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] hover:bg-main-black hover:scale-105 transition duration-300 ease-in-out",
            screen: "stick-mars-1",
            addCharacter: "Mars",
            onClick: () => {
                navigate("/stick-mars-1");
            }
        },
        {
            text: "Compromise with Venus",
            style: "bg-main-black text-white font-header px-4 py-2 rounded-md drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] hover:bg-main-black hover:scale-105 transition duration-300 ease-in-out",
            screen: "choose-venus-1",
            addCharacter: "Venus",
            onClick: () => {
                navigate("/choose-venus-1");
            }
        },
       
    ];

    return (
        <div className='relative min-h-screen w-full overflow-hidden'>
            {/* Star background */}
            <StarBackground />
            
            {/* Background with proper z-index */}
            <div className="absolute inset-0 bg-venus-bg-reg bg-center bg-opacity-90 z-[5]"></div>
            
            {/* Main content with higher z-index */}
            <div className="relative w-full min-w-screen overflow-x-hidden z-[20]">
                <div className='flex flex-col w-2/3 md:w-1/2 h-fit mt-10 ml-5 gap-5 ' id='venus-grotto-container'>
                    <div className=' flex flex-col md:flex-row lg:flex-row gap-8 bg-main-black p-5 text-white rounded-md items-center' id='venus-bio-text-container'>
                        <div className='flex flex-col gap-4' id='venus-grotto-text'>
                            <h1 className='text-xl font-header'>Venus' Grotto</h1>
                            <p className='text-sm font-header'> Keep scrolling to learn about Venus and what she thinks about the asteroids coming. Learn more about your benefic friend!</p>
                            <p className='text-xs font-header'>Traits: 
                                <span className='text-[#D77BBA] font-header'> positivity</span>,  
                                <span className='text-[#CF8242] font-header'> love</span>,
                                <span className='text-[#A40073] font-header'> abundance</span>,
                            </p>
                        </div>
                        <div className='flex flex-col items-center justify-center
                        cursor-pointer' onClick={togglePopup} id='venus-bio'>
                            <h1 className='text-sm text-nowrap font-header font-bold'>View Venus' Bio</h1>
                            <img className="md:max-w-[65px] h-auto hover:scale-110 transition-transform duration-200 ease-in-out" src={VenusMouthOpen} alt="Venus Bio Image"/>
                        </div>
                    </div>

                    {modalIsOpen && (
                        <div className="fixed inset-0 bg-main-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-main-black text-black p-6 rounded-lg w-96 max-w-[90%] mt-16 mb-9 md:mt-20 
                                drop-shadow-[0_10px_20px_rgba(215,123,186,0.6)] shadow-lg relative">
                                <button
                                    className="absolute top-2 right-3 text-lg font-bold
                                    hover:scale-110 transition-transform duration-200 ease-in-out text-white hover:text-venus-pink"
                                    onClick={togglePopup}
                                >
                                    ✖
                                </button>

                                <div className='flex justify-center items-center flex-col gap-2 pt-5'>
                                    <h2 className="text-xl text-white font-bold font-header">VENUS</h2>
                                    <img className="w-[80px] sm:w-[60px] md:w-[80px] lg:w-[80px]" src={VenusGifMouthOpen} alt="Venus Bio Image"/>
                                </div>

                                <div className="flex flex-col gap-2 text-left text-sm w-full mt-4 px-7 text-white">
                                    <p><span className="font-bold text-[#D77BBA]">Planet:</span> Venus</p>
                                    <p><span className="font-bold text-[#D77BBA]">Dignity:</span> Benefic</p>
                                    <p><span className="font-bold text-[#D77BBA]">Rules the Zodiacs:</span> Taurus & Libra</p>
                                    <p><span className="font-bold text-[#D77BBA]">Representations:</span> beauty, love, pleasure, sensuality, harmony, romance, parties</p>
                                    <p><span className="font-bold text-[#D77BBA]">Color:</span> Pink</p>
                                    <p className="mt-2">Venus likes to throw parties and spread love and cheer. They like to adorn 
                                        themselves with lovers, friends, business acquaintances, and family. Venus likes to 
                                        solve conflict through diplomacy and harmony 
                                        and would rather indulge than restrict.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className='bg-main-black rounded-md w-52 p-5' id='scroll-text-container'>
                        <p className='text-xs text-white font-header '>Scroll down or 
                            use your UP or DOWN arrow keys to scroll vertically.</p>
                    </div>
                </div>

                <section id="panel" className='mars-venus-panel1 w-full min-h-screen flex flex-col gap-8'>
                    <div id='container-panel-mars' className='flex flex-col w-full h-full pt-12 justify-between'>
                        <div id='' className='mars-dialogue flex flex-row w-fit h-fit mt-9 ml-12'>
                            <div id='mars-pic' className='mt-14'>
                                <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="Mars Gif"/>
                            </div>
                            <div id ='mars-text' className='flex w-64 h-fit bg-white rounded-md font-header text-wrap p-5 text-xs md:text-sm'>
                                Oof.. why is everything so bright and pink in here? We must be at Venus’ place... I wanna go home already...
                            </div>
                        </div>

                        <div id='container-panel-venus' className='flex flex-row w-full h-full justify-end'>
                            <div id='' className='venus-dialogue flex flex-row mr-8 w-fit h-fit'>
                                <div id='venus-pic' className='mt-14'>
                                    <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={VenusGifAnnoyed} alt="Venus Gif"/>
                                </div>
                                <div id ='venus-text' className='flex w-64 h-fit bg-white rounded-md font-header text-wrap p-5 text-xs md:text-sm'>
                                    Ohhhhh look who it is. Mars. Heyyy Mars. Let me guess. You want to go to war?
                                </div>
                            </div>
                        </div>

                        <div id='' className='mars-dialogue flex flex-row w-full h-fit mt-9 justify-center'>
                            <div id='mars-pic' className='mt-14'>
                                <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="Venus Gif"/>
                            </div>
                            <div id ='mars-text' className='flex max-w-64 h-fit bg-white rounded-md font-header break-words p-5 text-xs md:text-sm'>
                                Well yeah. I do. Unless you had something better in mind?
                            </div>
                        </div>
                    </div>
                </section>

                <section id="panel" className='venus-line relative w-full min-w-screen min-h-screen flex flex-col justify-start pt-20'>
                    <div id='container-panel-venus' className='flex w-full justify-between flex-col md:flex-row px-10 md:px-40 '>
                        <div id='venus-dialogue-2' className='flex flex-row w-fit h-fit mb-8'>
                            <div id='venus-pic' className='h-fit mt-28'>
                                <img className="w-[100px] h-auto" src={VenusGifDefault} alt="Venus Gif"/>
                            </div>
                            <div id ='venus-text' className='flex mb-14 w-fit md:w-72 h-fit bg-white rounded-md font-header text-wrap p-5 text-xs md:text-sm'>
                                Maybe the asteroid is lonely and that's why it's coming over here. you need to stop asserting dominance for no reason. I probably could charm them with my beauty..
                            </div>
                        </div> 
                        <div id='benefic-text' className='relative flex flex-col gap-2 w-fit md:w-96 h-fit
                         bg-main-black rounded-md font-header text-white text-wrap p-5 mr-8 text-xs md:text-sm'>
                            
                            <img id='corner-yellow-sparkle' className='absolute w-[100px] h-auto max-w-full max-h-full object-contain -top-8 -right-11 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] animate-pulse' loading='lazy' src={YellowSparkle}/>
                            <img id='corner-yellow-sparkle' className='absolute w-[100px] h-auto max-w-full max-h-full object-contain -bottom-8 -left-11 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] animate-pulse ' loading='lazy' src={YellowSparkle}/>
                            <h1 className='text-center text-lg text-white font-header font-bold'>Benefic Fact:</h1>
                            Venus tends to take the diplomatic approach when it comes to conflict. Venus wants to do things that are going to feel goooood, and tends to shy away from things that may be uncomfortable.
                        </div>
                    </div>

                    <div className='flex justify-center items-center mb-12 w-full'>
                        <h1 className='font-header text-white text-2xl text-center px-4'>
                            Scroll your mouse to see Venus use her beauty to charm the asteroids!
                        </h1>
                    </div>

                    <div id='animation-container' className="relative gap-3 w-full h-[150px] mb-10">
                        <img className='venus-annoyed absolute z-10 left-0 w-[100px] h-auto' src={VenusAnnoyedImg} alt="Venus Annoyed Image"/>
                        {asteroidPositions.map((position, index) => (
                            <img
                                key={index}
                                className="asteroid-angry absolute w-[50px] h-auto max-w-full max-h-full object-contain"
                                src={AsteroidAngry}
                                alt={`Asteroid ${index}`}
                                style={{
                                    top: `${position.top}%`,
                                    left: `${position.left}%`,
                                }}
                            />
                        ))}
                    </div>

                    <div className='line-container relative w-full h-8 flex flex-col gap-2 justify-center items-center mb-10'>
                        <span className="line w-full h-2 p-2 m-auto relative inline-block z-0 bg-white"></span>
                    </div>
                </section>

                <section id="panel" className='malefic-text w-screen min-h-screen relative mt-6 flex flex-col'>
                    <div id='malefic-text' className='items-center flex flex-col gap-14'>
                        <div id='mars-dialogue' className='malefic-dialogue1 flex flex-row w-fit h-fit self-start relative ml-44 p-5'>
                            <div id='mars-pic' className='mt-14'>
                                <img id='mars' className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="Mars Gif"/>
                            </div>
                            <div id ='mars-text' className=' w-96 relative h-fit bg-main-black rounded-md font-header text-white text-wrap p-5 text-xs md:text-sm'>
                                <h1 className='text-center text-lg text-white font-header font-bold mb-3 '>Malefic Fact:</h1>
                                    
                                    <img id='corner-asteroid' className='absolute w-[40px] h-auto max-w-full max-h-full object-contain -top-4 -right-3 rotate-12 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]' loading='lazy' src={AsteroidMouthOpen}/>
                                        As a Malefic planet, you feel like you need to push people, maybe in not the best of ways. 
                                        Sometimes that means that people can be uncomfortable with your energy. 
                                        <br /><br />
                                        However, your energy pushes people to be stronger, and better. You tend to take the more aggressive approach.
                            </div>
                        </div>
                        <div id='mars-dialogue' className='malefic-dialogue2 flex flex-row w-fit h-fit self-end mr-44 p-5'>
                            <div id ='mars-text' className='flex flex-col w-96 h-fit relative bg-main-black text-white rounded-md font-header text-wrap p-5 text-xs md:text-sm'>
                                <h1 className='text-center text-lg text-white font-header font-bold mb-3 '>Mars Fact:</h1>
                                <img id='corner-black-sparkle' className='absolute w-[100px] h-auto max-w-full max-h-full object-contain -top-11 -left-11 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] animate-pulse ' loading='lazy' src={BlackSparkle}/>
                                <img id='corner-black-sparkle' className='absolute w-[100px] h-auto max-w-full max-h-full object-contain -bottom-11 -right-11 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] animate-pulse ' loading='lazy' src={BlackSparkle}/>
                                Waiting to take the offense side is difficult for you. You are prone to taking action immediately and channeling your inner warrior.
                            </div>
                            <div id='mars-pic' className='mt-14'>
                                <img className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" src={MarsGif} alt="Venus Gif"/>
                            </div>
                        </div>
                        <div id='mars-dialogue' className='malefic-dialogue3 flex flex-col w-fit h-fit justify-center items-center p-5'>
                            <div id='mars-text' className='flex flex-col w-96 h-fit relative bg-main-black text-white rounded-md font-header text-wrap p-5 text-xs md:text-sm'>
                                <img id='corner-yellow-sparkle' className='absolute w-[100px] h-auto max-w-full max-h-full object-contain -top-11 -left-11 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] animate-pulse' loading='lazy' alt='Yellow Sparkle' src={YellowSparkle}/>
                                <img id='beyonce-img' className='absolute w-[100px] h-auto max-w-full max-h-full object-contain -top-11 -right-11 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] ' loading='lazy' src={BeyoncePNG}/>
                                As Beyoncé once said, 
                                <div className='justify-center text-center my-3'>
                                    ♪ <span className='beyonce-quote px-2 py-1 font-medium text-center'>Feel like you partied in Venus and we woke up in Mars</span> ♪
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="panel" className='mars-battle w-screen min-h-screen relative flex flex-col justify-center'>
                    <div className="absolute top-10 w-full z-10 text-center">
                        <h1 className='text-2xl font-header text-white px-4 py-2 bg-black bg-opacity-50 rounded-md inline-block'>
                            Mars Shows His Power!
                        </h1>
                    </div>
                    <div ref={marsBattleRef} className="relative w-screen h-screen overflow-hidden bg-black" id="mars-battle">
                        <img 
                            ref={marsRef}
                            className="absolute bottom-10 left-[30%] w-[100px]" 
                            id="mars" 
                            src={MarsDefaultPng} 
                            alt="Mars"
                        />
                        <div ref={fireballContainerRef} id="fireball-container" className="absolute w-full h-full flex items-center"></div>
                        <div ref={asteroidContainerRef} id="asteroid-container" className="absolute w-full h-full"></div>
                        <div id="lightningContainer" className="absolute top-0 left-0 w-full h-full pointer-events-none"></div>
                    </div>
                </section>

                <section id="panel" className='relative w-screen min-h-screen flex flex-col justify-center pr-5'>
                    <div id='container-panel' className='flex flex-col items-center gap-14'>
                        <div id='header' className='font-header text-white text-xl font-bold'>
                            <h1>Decision Time!</h1>
                        </div>
                        <div id='planet-pics' className='flex flex-row gap-5 items-center justify-center w-full h-fit'>
                            <img className="w/[100px] sm:w/[100px] md:w/[100px] lg:w/[150px]" src={MarsGif} alt="Mars Gif"/>
                            <img className="w/[100px] sm:w/[100px] md:w/[100px] lg:w/[150px]" src={VenusGifMouthOpen} alt="Mars Gif"/>
                        </div>
                        <div id='decision-text' className='flex w-1/3 h-fit bg-white text-main-black rounded-md shadow-md font-header text-wrap p-5 text-xs md:text-sm'>
                            It’s up to you to decide if you want to compromise with Venus, or fight the asteroids in the way that you want to. The decision is yours.
                        </div>
                        <div id='button-container-wrapper'>
                            <ButtonContainer 
                                setScreen={setScreen} 
                                buttons={buttons}
                                containerStyle="custom-container-style"
                                buttonStyle="custom-button-style"
                                characters={characters}
                                addCharacter={addCharacter}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MarsHorizontalVenus;