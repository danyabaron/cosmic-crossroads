import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MarsStaticImg from '../../../assets/mars-art/mars-art-official1.png';
import JupiterDefault from '../../../assets/jupiter-art/jupiter-art.png';
import VenusMouthOpen from '../../../assets/venus-art/venus-mouth-open.png';
import MarsGif from '../../../assets/mars-art/mars-art-official.gif';
import JupiterGif from '../../../assets/jupiter-art/jupiter-art-gif.gif';
import VenusGif from '../../../assets/venus-art/venus-mouth-open-gif.gif';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const MarsVenusJupiterEnding = () => {
  const bgRef = useRef(null);
  const marsRef = useRef(null);
  const jupiterRef = useRef(null);
  const venusRef = useRef(null);
  const navigate = useNavigate(); 
  
  // Text content refs
  const marsTextRef = useRef(null);
  const jupiterTextRef = useRef(null);
  const venusTextRef = useRef(null);
  const conclusionTextRef = useRef(null);
  
  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Immediate planet animations that don't depend on scroll
    const animatePlanetsImmediately = () => {
      // Mars immediate animation
      gsap.fromTo(
        marsRef.current,
        { 
          opacity: 0,
          x: "-100vw", 
          y: "0", 
          scale: 0.2,
          rotation: -180
        },
        {
          opacity: 1,
          motionPath: {
            path: [
              {x: "-80vw", y: "10vh"},
              {x: "-60vw", y: "-20vh"},
              {x: "-40vw", y: "15vh"},
              {x: "-20vw", y: "-10vh"},
              {x: "0", y: "0"}
            ],
            curviness: 1.8
          },
          scale: 1,
          rotation: 360,
          duration: 3,
          ease: "power2.inOut",
          delay: 0.2
        }
      );

      // Jupiter immediate animation
      gsap.fromTo(
        jupiterRef.current,
        { 
          opacity: 0,
          x: "0", 
          y: "100vh", 
          scale: 0.3,
          rotation: 180
        },
        {
          opacity: 1,
          motionPath: {
            path: [
              {x: "30vw", y: "80vh"},
              {x: "-25vw", y: "60vh"},
              {x: "20vw", y: "40vh"},
              {x: "-15vw", y: "20vh"},
              {x: "0", y: "0"}
            ],
            curviness: 2
          },
          scale: 1,
          rotation: -360,
          duration: 3.5,
          delay: 0.3,
          ease: "power1.inOut"
        }
      );

      // Venus immediate animation
      gsap.fromTo(
        venusRef.current,
        { 
          opacity: 0,
          x: "100vw", 
          y: "-20vh", 
          scale: 0.2,
          rotation: 180
        },
        {
          opacity: 1,
          motionPath: {
            path: [
              {x: "80vw", y: "-15vh"},
              {x: "60vw", y: "20vh"},
              {x: "40vw", y: "-15vh"},
              {x: "20vw", y: "10vh"},
              {x: "0", y: "0"}
            ],
            curviness: 1.5
          },
          scale: 1,
          rotation: -360,
          duration: 3,
          delay: 0.4,
          ease: "power3.inOut"
        }
      );
    };

    // Run the animation immediately
    animatePlanetsImmediately();

    // Create references to the paragraph parent containers
    const marsSection = marsTextRef.current ? marsTextRef.current.parentNode : null;
    const jupiterSection = jupiterTextRef.current ? jupiterTextRef.current.parentNode : null;
    const venusSection = venusTextRef.current ? venusTextRef.current.parentNode : null;
    const conclusionSection = conclusionTextRef.current ? conclusionTextRef.current.parentNode : null;
    
    // Fade in for Mars text with dramatic side entry
    if (marsTextRef.current) {
        gsap.fromTo(
            marsSection,
            { 
                opacity: 0,
                x: -150 // From left
            },
            {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: marsTextRef.current,
                    start: "top 75%",
                    end: "top 35%",
                    toggleActions: "play reverse restart reverse",
                    scrub: 0.8
                }
            }
        );
    }
    
    // Fade in for Jupiter text with dramatic side entry
    if (jupiterTextRef.current) {
        gsap.fromTo(
            jupiterSection,
            { 
                opacity: 0,
                x: 150 // From right
            },
            {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: jupiterTextRef.current,
                    start: "top 75%",
                    end: "top 35%",
                    toggleActions: "play reverse restart reverse",
                    scrub: 0.8
                }
            }
        );
    }
    
    // Fade in for Venus text with dramatic side entry
    if (venusTextRef.current) {
        gsap.fromTo(
            venusSection,
            { 
                opacity: 0,
                x: -150 // From left
            },
            {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: venusTextRef.current,
                    start: "top 75%",
                    end: "top 35%",
                    toggleActions: "play reverse restart reverse",
                    scrub: 0.8
                }
            }
        );
    }
    
    // Fade in for conclusion text with dramatic side entry
    if (conclusionTextRef.current) {
        gsap.fromTo(
            conclusionSection,
            { 
                opacity: 0,
                x: 150 // From right
            },
            {
                opacity: 1,
                x: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: conclusionTextRef.current,
                    start: "top 75%",
                    end: "top 35%",
                    toggleActions: "play reverse restart reverse",
                    scrub: 0.8
                }
            }
        );
    }
  }, []);

  useGSAP(() => {
    // Background transition as story unfolds
    gsap.to(bgRef.current, {
      backgroundColor: "#ffedc2", // From dark to warm golden light
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top top",
        end: "bottom center",
        scrub: 1,
      },
    });

    // Remove or comment out the scroll-based planet animations since we're now handling them in useEffect
  }, []);

  return (
    <div ref={bgRef} className="bg-default-bg flex flex-col justify-center items-center min-w-screen relative pt-14 overflow-hidden">
      
      
      {/* Parallax Section - Planets Enter */}
      <section className='w-full min-h-screen flex relative flex-col pt-6 justify-center items-center'>
        <h1 className="text-white font-header text-3xl mb-16 z-10">The Battle Begins...</h1>

        <h2 className="text-white font-header text-md mb-8 z-10">
          Assume your position! Wait for it ...
        </h2>
        <div className="relative w-full h-[400px] flex flex-row gap-4 justify-center items-center">
          {/* Each planet in a separate div for independent animation */}
          <div className="" ref={marsRef}>
            <img src={MarsStaticImg} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />
          </div>
          <div className="" ref={jupiterRef}>
            <img src={JupiterDefault} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Jupiter" />
          </div>
          <div className="" ref={venusRef}>
            <img src={VenusMouthOpen} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Venus" />
          </div>
        </div>
        
      </section>

      <section className='w-full min-h-screen flex flex-col gap-3 justify-center items-center'>
        <div id='mars-ending' className='flex flex-col gap-4 justify-center items-center w-full'>
          <h1 className="text-white font-header text-3xl z-10">Mars</h1>
          <div className='flex flex-row gap-3 justify-center items-center w-full'>
            <img src={MarsGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />
            <p ref={marsTextRef} className='text-main-black rounded-lg p-6 font-body bg-white w-1/2'>
              As Mars, your willingness to work with others can be low.
              You made the practical decision to team up with your benefic friends, Venus and Jupiter.
              Mixing your motivation to take action, combined with Jupiter and Venus' optimisim and charm,
              you were able to come to a friendly agreement with the asteroids.
            </p>
          </div>
        </div>
      </section>

      <section className='w-full min-h-screen flex flex-col gap-2 justify-center items-center'>
        <div id='jupiter-ending' className='flex flex-col gap-4 justify-center items-center w-full'>
          <h1 className="text-white text-3xl font-header z-10">Jupiter</h1>
          <div className='flex flex-row gap-3 justify-center items-center w-full'>
            <img src={JupiterGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Jupiter" />
            <p ref={jupiterTextRef} className='text-main-black rounded-lg p-6 font-body bg-white w-1/2'>
              Jupiter led the charge of negotiation with the asteroids. Jupiter was able to bargain some land
              of the solar system to the asteroids, and made the asteroids laugh. 
              Jupiter's jovial energy and humor helped a lot. Without Jupiter, the asteroids may have gotten
              more on the defense side, but Jupiter was able to form a friendly alliance with them.
            </p>
          </div>
        </div>
      </section>

      <section className='w-full min-h-screen flex flex-col gap-8 justify-center items-center'>
        <div id='venus-ending' className='flex flex-col gap-4 justify-center items-center w-full'>
          <h1 className="text-white font-header text-3xl z-10">Venus</h1>
          <div className='flex flex-row gap-3 justify-center items-center w-full'>
            <img src={VenusGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Venus" />
            <p ref={venusTextRef} className='text-main-black rounded-lg p-6 font-body bg-white w-1/2'>
              Venus offered to have a party for the asteroids, to celebrate the new alliance. Venus is known for her charm and beauty,
              and she was able to use her diplomatic skills to make the asteroids feel welcome and included. Without Venus, 
              the asteroids may have felt unwelcomed and unappreciated.
            </p>
          </div>
        </div>
      </section>

      <section className='w-full min-h-screen flex flex-col gap-8 justify-center items-center'>
        <div id='ending' className='flex flex-col gap-4 justify-center items-center w-full'>
          <h1 className="text-white font-header text-3xl z-10">Good Work!</h1>
          <div className='flex flex-row gap-4 justify-center items-center'>
            <img src={VenusGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Venus" />
            <img src={MarsGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />
            <img src={JupiterGif} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Jupiter" />
          </div>
          
          <div className='bg-main-black drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] w-1/2 flex justify-center items-center rounded-md p-6 shadow-xl'>
            <p ref={conclusionTextRef} className='text-sm text-white font-body text-center p-4'>
              Together with your benefic friends, you combined both your strengths and weaknesses to tackle 
              the crisis of the asteroids. The asteroids and your team of planets have formed a strong alliance and
              it's time to party!
            </p>
          </div>
        </div>
      </section>

      <button 
        className="w-36 h-10 rounded-lg bg-button-blue text-white relative z-10 
        mb-6 px-4 font-medium text-center flex items-center justify-center
        hover:bg-opacity-80 shadow-lg hover:shadow-xl transition-all duration-200" 
        onClick={() => navigate("/marsintro")}
      >
        Play Again
      </button>

    </div>
  );
};
   
export default MarsVenusJupiterEnding;