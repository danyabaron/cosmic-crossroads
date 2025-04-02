import React from 'react';
import StarBackground from '../../Components/StarBackground.js';

function MarsEndings({ characters }) {
  return (
    <div className='relative min-h-screen w-full overflow-hidden'>
      {/* Star background */}
      <StarBackground />
      
      {/* Background with proper z-index */}
      <div className="absolute inset-0 bg-default-bg bg-center bg-opacity-90 z-[5]"></div>
      
      {/* Main content with higher z-index */}
      <div className="relative w-full min-w-screen pt-14 overflow-x-hidden z-[20]">
        <h2 className="text-sm">
          diff endings based on mars path
        </h2>
      </div>
    </div>
  );
}

export default MarsEndings;