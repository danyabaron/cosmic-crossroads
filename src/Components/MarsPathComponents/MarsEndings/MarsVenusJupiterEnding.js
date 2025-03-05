import React, { useRef } from 'react';
import MarsStaticImg from '../../../assets/mars-art/mars-art-official1.png';
import JupiterDefault from '../../../assets/jupiter-art/jupiter-art.png';
import VenusMouthOpen from '../../../assets/venus-art/venus-mouth-open.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const MarsVenusJupiterEnding = () => {
  const planetsRef = useRef([]);
  const bgRef = useRef(null);
  const marsRef = useRef(null);
  const jupiterRef = useRef(null);
  const venusRef = useRef(null);

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

    // Mars entry animation - swoop from top left
    gsap.fromTo(
      marsRef.current,
      { 
        opacity: 0,
        x: "-100vw", 
        y: "-50vh", 
        scale: 0.5 
      },
      {
        opacity: 1,
        motionPath: {
          path: [
            {x: "-50vw", y: "-30vh"},
            {x: "0", y: "0"}
          ],
          curviness: 1.5
        },
        scale: 1,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: marsRef.current.parentNode,
          start: "top 70%",
          toggleActions: "play none none none",
        }
      }
    );

    // Jupiter entry animation - swoop from bottom right
    gsap.fromTo(
      jupiterRef.current,
      { 
        opacity: 0,
        x: "100vw", 
        y: "50vh", 
        scale: 0.5 
      },
      {
        opacity: 1,
        motionPath: {
          path: [
            {x: "50vw", y: "30vh"},
            {x: "0", y: "0"}
          ],
          curviness: 1.5
        },
        scale: 1,
        duration: 2.5,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: jupiterRef.current.parentNode,
          start: "top 70%",
          toggleActions: "play none none none",
        }
      }
    );

    // Venus entry animation - spiral in from top
    gsap.fromTo(
      venusRef.current,
      { 
        opacity: 0,
        x: "0", 
        y: "-70vh", 
        scale: 0.5 
      },
      {
        opacity: 1,
        motionPath: {
          path: [
            {x: "30vw", y: "-50vh"},
            {x: "-30vw", y: "-30vh"},
            {x: "20vw", y: "-15vh"},
            {x: "0", y: "0"}
          ],
          curviness: 1.5
        },
        scale: 1,
        duration: 3,
        delay: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: venusRef.current.parentNode,
          start: "top 70%",
          toggleActions: "play none none none",
        }
      }
    );
  }, []);

  return (
    <div ref={bgRef} className="bg-default-bg w-full flex flex-col justify-center items-center min-w-screen relative pt-14 bg-center overflow-hidden">
      {/* Parallax Section - Planets Enter */}
      <section className='w-full min-h-screen flex relative flex-col justify-center items-center'>
        <h1 className="text-white text-3xl mb-16 z-10">The Battle Begins...</h1>
        <div className="relative w-full h-[300px] flex justify-center items-center">
          {/* Planets positioned absolutely within this container */}
          <div className="absolute" ref={marsRef}>
            <img src={MarsStaticImg} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Mars" />
          </div>
          <div className="absolute" ref={jupiterRef}>
            <img src={JupiterDefault} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Jupiter" />
          </div>
          <div className="absolute" ref={venusRef}>
            <img src={VenusMouthOpen} className="w-[100px] sm:w-[60px] md:w-[80px] lg:w-[100px]" alt="Venus" />
          </div>
        </div>
        
        <div className="mt-16 text-white text-center max-w-2xl">
          <p className="text-xl">The three planets unite to face the asteroid threat...</p>
        </div>
      </section>

      <section className='w-full min-h-screen flex flex-col gap-8 justify-center items-center'>
        <h2 className="text-white text-2xl">Their combined powers create a shield that protects the solar system</h2>
        {/* Add more content here */}
      </section>
    </div>
  );
};
   
export default MarsVenusJupiterEnding;