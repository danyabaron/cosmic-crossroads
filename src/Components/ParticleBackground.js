

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const ParticleBackground = () => {


  useGSAP(() => {
        const starContainer = document.getElementById('star-container');

        // Function to create a star
        const createStar = () => {
            const star = document.createElement('div');
            star.className = 'star';

            // Randomize star size (1px to 3px)
            const size = Math.random() * 2 + 2;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;

            // Randomize star position
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;

            // Add star to the container
            starContainer.appendChild(star);

            // Twinkling animation
            gsap.fromTo(star, {
                opacity: 0,
                scale: 0,
            }, {
                opacity: 0.8,
                scale: 1,
                duration: Math.random() * 2 + 1,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            });

            // Bubble-up effect on hover
            star.addEventListener('mouseenter', () => {
                gsap.to(star, {
                    y: -20,
                    scale: 3,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                });
            });

            star.addEventListener('mouseleave', () => {
                gsap.to(star, {
                    y: 0,
                    scale: 1,
                    opacity: 0.8,
                    duration: 0.5,
                    ease: 'power2.out',
                });
            });
        };

         // Function to create a shooting star
         const createShootingStar = () => {
          const shootingStar = document.createElement('div');
          shootingStar.className = 'shooting-star';

          // Randomize starting position
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          shootingStar.style.left = `${startX}%`;
          shootingStar.style.top = `${startY}%`;

          // Randomize ending position
          const endX = startX + Math.random() * 50 - 25; // Random angle
          const endY = startY + Math.random() * 50 - 25;

          // Add shooting star to the container
          starContainer.appendChild(shootingStar);

          // Animate the shooting star
          gsap.fromTo(
              shootingStar,
              {
                  opacity: 0,
                  x: 0,
                  y: 0,
                 
              },
              {
                  opacity: 1,
                  x: `${endX - startX}%`,
                  y: `${endY - startY}%`,
                 
                  duration: 1,
                  ease: 'power1.out',
                  onComplete: () => {
                      // Remove the shooting star after animation
                      starContainer.removeChild(shootingStar);
                  },
              }
          );
      };

      

        // Create multiple stars
        const numberOfStars = 200; // Adjust the number of stars
        for (let i = 0; i < numberOfStars; i++) {
            createStar();
        }

        // Trigger shooting stars at random intervals
        const triggerShootingStar = () => {
          createShootingStar();
          setTimeout(triggerShootingStar, Math.random() * 5000 + 2000); // Random interval (2-7 seconds)
      };

      triggerShootingStar();

        // Cleanup function
        return () => {
            starContainer.innerHTML = ''; // Remove stars when component unmounts
        };
    }, []);


  return null;
};

export default ParticleBackground;