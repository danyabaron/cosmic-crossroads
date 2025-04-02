import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = ''; // Clear existing stars

    const numberOfStars = 300;
    const numberOfShootingStars = 5; // Number of shooting stars
    const fragment = document.createDocumentFragment();

    // Create regular stars
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'absolute bg-white rounded-full opacity-90 animate-twinkle';

      // Random positioning
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      // Vary size (from 2px to 5px)
      const size = Math.random() * 3 + 2;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Random animation delay
      star.style.animationDelay = `${Math.random() * 3}s`;

      // Random animation duration for more natural twinkling
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;

      // Add to fragment
      fragment.appendChild(star);
    }

    // Create shooting stars
    for (let i = 0; i < numberOfShootingStars; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'absolute bg-white rounded-full opacity-90 animate-shootingStar'; // Use the shooting star animation

      // Random position for shooting stars (scattered throughout the screen)
      const startX = Math.random() * 50; // Random horizontal start position
      const startY = Math.random() * 100; // Random vertical start position

      shootingStar.style.left = `${startX}%`;
      shootingStar.style.top = `${startY}%`;

      // Larger size for shooting stars
      const size = Math.random() * 8 + 5; // Make them bigger
      shootingStar.style.width = `${size}px`;
      shootingStar.style.height = `${size}px`;

      // Add a white glow effect to the shooting star's tail (glow behind the star)
      shootingStar.style.boxShadow = `0 0 15px 5px rgba(255, 255, 255, 0.8)`;

      // Random animation delay
      // shootingStar.style.animationDelay = `${Math.random() * 1}s`; // Faster start

      // Add to fragment
      fragment.appendChild(shootingStar);

      // Log each shooting star
      console.log("Added shooting star", shootingStar);
    }

    container.appendChild(fragment);
    console.log(`Added ${numberOfStars} stars and ${numberOfShootingStars} shooting stars to the background`);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10"
      // style={{
      //   zIndex: 5, // Explicitly set z-index to ensure proper stacking
      //   position: 'fixed',
      //   pointerEvents: 'none'
      // }}
    >
     
    </div>
  );
};

export default StarBackground;
