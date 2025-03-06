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

    // Mars entry animation - spiral from left
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
        scrollTrigger: {
          trigger: marsRef.current.parentNode,
          start: "top 80%",
        //   start: "top bottom",
      
          end: "bottom 20%",
        //   end: "bottom 20%",
        //   scrub: true,
          toggleActions: "play none none reverse",
        }
      }
    );

    // Jupiter entry animation - spiral from bottom
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
        // delay: 0.3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: jupiterRef.current.parentNode,
          start: "top 80%",
        //   start: "top bottom",
          end: "bottom 20%",
        //   end: "bottom 20%",
      
        //   scrub: true,
          toggleActions: "play none none reverse",
        }
      }
    );

    // Venus entry animation - spiral from right
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
        // delay: 0.6,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: venusRef.current.parentNode,
        //   start: "top bottom",
          start: "top 80%",
          end: "bottom 20%",
          
        //   scrub: true,
          toggleActions: "play none none reverse",
        }
      }
    );

    // After planets are in position, make them glow and pulse
    // const glowTimeline = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: bgRef.current,
    //     start: "top top",
    //     end: "+=500",
    //     scrub: 1
    //   }
    // });

    // // Add glow effect to each planet
    // [marsRef.current, jupiterRef.current, venusRef.current].forEach((planet, i) => {
    //   glowTimeline.to(planet, {
    //     boxShadow: "0 0 20px 10px rgba(255,255,255,0.7)",
    //     filter: "brightness(1.3)",
    //     duration: 1,
    //     delay: i * 0.2
    //   }, "glow");
    // });

  }, []);

  return (
    <div ref={bgRef} className="bg-default-bg w-full flex flex-col justify-center items-center min-w-screen relative pt-14 bg-center overflow-hidden">
      {/* Parallax Section - Planets Enter */}
      <section className='w-full min-h-screen flex relative flex-col justify-center items-center'>
        <h1 className="text-white text-3xl mb-16 z-10">The Battle Begins...</h1>
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