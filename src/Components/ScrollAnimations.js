import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


import VenusMouthOpen from '../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../assets/mars-art/mars-art-official.gif';
// import MarsStaticImg from '../../../assets/mars-art/mars-art-official1.png';
import VenusGifDefault from '../assets/venus-art/venus-default-GIF.gif';
import VenusGifAnnoyed from '../assets/venus-art/venus-annoyed-gif.gif';
import VenusGifSmirk from '../assets/venus-art/venus-smirk-gif.gif';
import VenusGifMouthOpen from '../assets/venus-art/venus-mouth-open-gif.gif';
import SaturnDefault from '../assets/saturn-art/saturn-mouth-open.png';
import JupiterDefault from '../assets/jupiter-art/jupiter-art.png';
import ButtonContainer from '../Components/ButtonContainer';
import AsteroidImg1 from '../assets/asteroid-art/asteroid-angry.png';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

   

function ScrollAnimations() 

{


    let config = useRef({strengh: 1});

    const marsRef = useRef();
    const projectileRef = useRef();
    const asteroidRefs = useRef([]);

    useGSAP(() => {
        
        // line animation
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".panel",
              scrub: true,
              pin: true,
              start: "top top",
              end: "+=100%",
              markers: true,
            }
          });
          
          tl.from(".line", {
            scaleX: 0,
            transformOrigin: "left center",
            ease: "none",
          }, 0) // Start immediately



          
          .fromTo(".asteroid", 
            { x: "-60vw" }, // Start off-screen to the left
            { x: "0", rotation: -360, ease: "none" }, 
            0 // Start at the same time as the line
          );

          //fade in color on line animation
          tl.to( ".overlay", {
            backgroundColor: "#F6EEC4",
            opacity: 0.5,
            duration: 3,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".panel",
                scrub: true,
                start: "top center",
                end: "+=100%",
                
            }
          }, 0.5);
          

          // intensify animation
          gsap.to(".mars-container", {
            repeat: -1,
            yoyo: true,
            x: 1,
            duration: 0.2,
            ease: "power1.inOut",
            modifiers: {
              x: gsap.utils.unitize(value => value * config.current.strength, "px"), // Apply strength dynamically
            },
          });
      
          // Animate the strength value based on scroll
          gsap.to(config.current, {
            strength: 100,
            ease: "none",
            scrollTrigger: {
              trigger: ".planet-animation1",
              scrub: true,
              start: "top center",
              end: "bottom bottom", // Adjust as needed
            },
            onUpdate: () => {
              console.log("Strength:", config.current.strength); // Debugging log to track strength value
            },
          });


          gsap.to(projectileRef.current, {
            x: '100vw',
            duration: 2,
            ease: 'power1.inOut',
            scrollTrigger: {
              trigger: '.planet-animation2',
              start: 'top bottom',
              end: 'bottom top',
            //   scrub: true,
              markers: true,
              onEnter: () => console.log("Entered ScrollTrigger for projectile animation"), // Debugging log
            onLeave: () => console.log("Left ScrollTrigger for projectile animation"), // Debugging log
            },
          });
        // Animate asteroids
            asteroidRefs.current.forEach((asteroid, index) => {
                gsap.to(asteroid, {
                y: '100vh', // Move down relative to starting position
                x: `${Math.random() * 100 - 50}vw`, // Moves within -50vw to 50vw
                rotation: '+=360', // Rotate asteroids
                duration: 1 + index, // Move faster by reducing duration
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: '.planet-animation2',
                    scrub: true,
                    toggleActions: "restart pause restart pause",
                    start: 'top bottom',
                    end: 'bottom top',
                    // markers: true,
                },
                onComplete: () => {
                    // Remove asteroid from view after it goes off-screen
                    gsap.set(asteroid, { opacity: 0 });
                },
                });
            });

            // Function to shoot the projectile towards the asteroids
            const shootProjectile = (targetAsteroid) => {
                const asteroidRect = targetAsteroid.getBoundingClientRect();

                gsap.to(projectileRef.current, {
                x: asteroidRect.left + window.scrollX, // Adjust x position to target asteroid's x position
                y: asteroidRect.top + window.scrollY,  // Adjust y position to target asteroid's y position
                duration: 1, // Speed of projectile (adjsust as needed)
                ease: 'power1.inOut',
                onComplete: () => {
                    // Optional: Impact effect or reset projectile
                    gsap.set(projectileRef.current, { opacity: 0 });
                },
                });
            };

            // Add click event listeners to asteroids to trigger shooting
            asteroidRefs.current.forEach((asteroid, index) => {
                asteroid.addEventListener('click', () => {
                shootProjectile(asteroid); // Shoot at clicked asteroid
                });
            });



        }, []);


        console.log(projectileRef.current); // Should log the projectile DOM element
    console.log(asteroidRefs.current); // Should log an array of asteroid DOM elements






        






    





    return (

        <div className='container overflow-x-hidden overflow-y-hidden'>

        <section className="panel bg-venus-bg-reg w-screen h-screen flex justify-center items-center relative">
            <div className="overlay absolute opacity-0 inset-0 bg-transparent"></div>
            
            
            <div className='line-container w-full h-full flex flex-col gap-2 justify-center items-center'>
                <span className="line w-1/2 h-full p-2 m-auto relative  inline-block bg-main-black"></span>

                {/* Asteroid */}
                <img
                src={AsteroidImg1}
                alt="Asteroid"
                className="asteroid w-15 h-15 object-contain relative "
                />


            </div>
            





        </section>





        {/* text animation */}
        <section className='planet-animation1 bg-default-bg w-screen h-screen flex justify-center items-center relative'>
            <div className='intensify mars-container flex w-full h-fit pt-12 flex-col md:flex-row pl-5 pr-5'>
                    <div id='mars-pic' className='mt-14'>
                        <img className="w/[100px] sm:w/[100px] md:w/[100px] lg:w/[150px]" src={MarsGif} alt="Venus Gif"/>
                    </div>
                    <div id ='mars-text' className='flex w-fit md:w-72 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                        War goddamit, war!
                    </div>
                </div>
                {/* <h1 className='intensify font-header font-bold text-white text-xl'>animation 2</h1> */}
        </section>




        <section className="planet-animation2 bg-saturn-bg-reg w-screen h-screen flex justify-center items-center relative">
            <h1 className="font-header font-bold text-white text-xl absolute top-10">Animation 3</h1>

            {/* Mars and Projectiles */}
            <div ref={marsRef} className="shooting-container flex relative justify-center items-center relative w-full h-full">
            <div id="mars-pic" className="absolute">
                <img className="w-[100px] sm:w-[100px] md:w-[100px] lg:w-[150px]" src={MarsGif} alt="Mars Gif" />
            </div>
            <div
                id="mars-text"
                className="absolute bottom-10 flex justify-center w-fit md:w-72 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm"
            >
                War goddamit, war!
            </div>

            {/* Shooting Projectiles */}
            <div className="projectile-container">
                <div
                ref={projectileRef}
                className="projectile bg-mars-red w-8 h-8 rounded-full absolute left-[calc(50%-40px)] top-[calc(50%-40px)]"
                />
            </div>
            </div>

            {/* Asteroids */}
            <div className="asteroids-container">
            <img
                ref={(el) => (asteroidRefs.current[0] = el)}
                className="asteroid w-12 h-12 absolute top-[50px] left-[{`${Math.random() * 90}vw`}]"
                src={AsteroidImg1}
                alt="Asteroid"
            />
            <img
                ref={(el) => (asteroidRefs.current[1] = el)}
                className="asteroid w-12 h-12 absolute top-[90px] left-[{`${Math.random() * 90}vw`}]"
                src={AsteroidImg1}
                alt="Asteroid"
            />
            <img
                ref={(el) => (asteroidRefs.current[2] = el)}
                className="asteroid w-12 h-12 absolute top-[80px] left-[{`${Math.random() * 90}vw`}]"
                src={AsteroidImg1}
                alt="Asteroid"
            /> 
             <img
                ref={(el) => (asteroidRefs.current[3] = el)}
                className="asteroid w-12 h-12 absolute top-[50px] left-[{`${Math.random() * 90}vw`}]"
                src={AsteroidImg1}
                alt="Asteroid"
            /> 
            <img
                ref={(el) => (asteroidRefs.current[4] = el)}
                className="asteroid w-12 h-12 absolute top-[-30px] left-[90vw]"
                src={AsteroidImg1}
                alt="Asteroid"
            /> 
            <img
                ref={(el) => (asteroidRefs.current[5] = el)}
                className="asteroid w-12 h-12 absolute top-[-20px] left-[60vw]"
                src={AsteroidImg1}
                alt="Asteroid"
            />
             <img
                ref={(el) => (asteroidRefs.current[6] = el)}
                className="asteroid w-12 h-12 absolute top-[-20px] left-[60vw]"
                src={AsteroidImg1}
                alt="Asteroid"
            />
             <img
                ref={(el) => (asteroidRefs.current[7] = el)}
                className="asteroid w-12 h-12 absolute top-[-20px] left-[60vw]"
                src={AsteroidImg1}
                alt="Asteroid"
            />
             <img
                ref={(el) => (asteroidRefs.current[8] = el)}
                className="asteroid w-12 h-12 absolute top-[-20px] left-[60vw]"
                src={AsteroidImg1}
                alt="Asteroid"
            />
             <img
                ref={(el) => (asteroidRefs.current[9] = el)}
                className="asteroid w-12 h-12 absolute top-[-20px] left-[60vw]"
                src={AsteroidImg1}
                alt="Asteroid"
            />
            </div>
      </section>


      {/* text animation */}
      <section className='planet-animation3 bg-default-bg w-screen h-screen flex justify-center items-center relative'>
            <div className='intensify venus-container flex w-full h-fit pt-12 flex-col md:flex-row pl-5 pr-5'>
                    <div id='venus-pic' className='mt-14'>
                        <img className="w/[100px] sm:w/[100px] md:w/[100px] lg:w/[150px]" src={VenusGifMouthOpen} alt="Venus Gif"/>
                    </div>
                    <div id ='venus-text' className='flex w-fit md:w-72 h-fit bg-white rounded-md font-body text-wrap p-5 text-xs md:text-sm'>
                        War goddamit, war!
                    </div>
                </div>
                {/* <h1 className='intensify font-header font-bold text-white text-xl'>animation 2</h1> */}
        </section>




        </div>
        
        



    );
}

export default ScrollAnimations;