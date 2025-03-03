

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const ParticleBackground = () => {
  const particleContainerRef = useRef(null);

  useGSAP(() => {
    const particleContainer = particleContainerRef.current;

    // Function to create a single particle
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className =
        'particle absolute rounded-full bg-white opacity-80'; // Tailwind classes for styling
      particle.style.width = `${Math.random() * 10 + 1}px`; // Random size
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}%`; // Random horizontal position
      particle.style.top = `${Math.random() * 100}%`; // Random vertical position
      particleContainer.appendChild(particle);


      console.log('Particle created:', particle); // Debugging

      // Animate the particle
      gsap.to(particle, {
        y: -1000, // Move upward
        duration: Math.random() * 10 + 5, // Random duration
        ease: 'power1.inOut',
        repeat: -1, // Infinite loop
        onComplete: () => {
          particle.remove(); // Remove particle after animation
        },
      });
    };

    // Create multiple particles
    const createParticles = () => {
      for (let i = 0; i < 100; i++) {
        createParticle();
      }
    };

    // Function to form constellations on hover
    const formConstellations = (event) => {
      const { clientX, clientY } = event;
      const particles = particleContainer.querySelectorAll('.particle');

      particles.forEach((particle) => {
        const distanceX = clientX - particle.offsetLeft;
        const distanceY = clientY - particle.offsetTop;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 200) {
          gsap.to(particle, {
            x: clientX - particle.offsetLeft,
            y: clientY - particle.offsetTop,
            duration: 1,
            ease: 'power2.out',
          });
        }
      });

      // Draw lines between particles
      drawLines(particles);
    };

    // Function to draw lines between particles
    const drawLines = (particles) => {
      particles.forEach((particle1, index) => {
        particles.slice(index + 1).forEach((particle2) => {
          const distanceX = particle1.offsetLeft - particle2.offsetLeft;
          const distanceY = particle1.offsetTop - particle2.offsetTop;
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

          if (distance < 100) {
            const line = document.createElement('div');
            line.className = 'particle-line absolute bg-white opacity-30'; // Tailwind classes for styling
            line.style.left = `${particle1.offsetLeft}px`;
            line.style.top = `${particle1.offsetTop}px`;
            line.style.width = `${distance}px`;
            line.style.height = '1px';
            line.style.transformOrigin = '0 0';
            line.style.transform = `rotate(${Math.atan2(distanceY, distanceX)}rad)`;
            particleContainer.appendChild(line);

            // Remove line after a short delay
            gsap.to(line, {
              opacity: 0,
              duration: 1,
              onComplete: () => line.remove(),
            });
          }
        });
      });
    };

    // Initialize particles
    createParticles();

    // Add hover effect
    particleContainer.addEventListener('mousemove', formConstellations);

    // Cleanup
    return () => {
      particleContainer.removeEventListener('mousemove', formConstellations);
      gsap.killTweensOf('.particle');
    };
  }, []);

  return (
    <div
      ref={particleContainerRef}
      className="particle-container fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    ></div>
  );
};

export default ParticleBackground;