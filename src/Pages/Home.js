import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import TitleArt from '../assets/other-art/title-art2.jpeg';
import StarBackground from '../Components/StarBackground.js'; 

const Home = () => {
  const [popup, setPopup] = useState(null);
  const navigate = useNavigate();

  return (
    <div className='relative min-h-screen w-full overflow-hidden'>
      {/* Star background */}
      <StarBackground />
      
      {/* Main background layer */}
      <div className="absolute inset-0 bg-main-black  z-[5]"></div>
      
      {/* Main content with higher z-index */}
      <div className="relative min-w-screen h-screen flex overflow-hidden flex-col p-4 justify-center items-center z-[20]">
        <div className="flex flex-col justify-center items-center w-fit max-h-full gap-2">
          <img src={TitleArt} alt="Cosmic Crossroads" className="w-72 sm:w-80 md:w-96 rounded-lg mb-3" />

          <div className='text-center flex flex-col gap-1 justify-center items-center'>
            <h1 className="text-white font-header text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-center relative z-10">
                Cosmic Crossroads: An Interactive Story about Astrology
            </h1>
            <h2 className="text-white font-header text-xs sm:text-sm md:text-md font-bold mb-2 text-center relative z-10 max-w-md">
                STEP INTO THE STARS AND CHOOSE YOUR DESTINY
            </h2>
          </div>
            
          <div className="flex flex-col gap-1">
            <button 
              className="w-36 h-10 rounded-lg bg-button-blue text-white relative z-10 
              drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] 
              mb-6 px-4 font-medium text-center flex items-center justify-center
                shadow-lg hover:scale-105  transition duration-300 ease-in-out" 
              onClick={() => navigate("/marsintro")}
            >
              Start
            </button>

            <button 
              className="w-36 h-10 rounded-lg bg-button-blue text-white relative z-10 
              drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] 
              mb-6 px-4 font-medium text-center flex items-center justify-center
                shadow-lg hover:scale-105  transition duration-300 ease-in-out" 
              onClick={() => setPopup("about")}
            >
              About
            </button>

            <button 
              className="w-36 h-10 rounded-lg bg-button-blue text-white relative z-10 
              drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)] 
              mb-6 px-4 font-medium text-center flex items-center justify-center
                shadow-lg hover:scale-105  transition duration-300 ease-in-out" 
              onClick={() => setPopup("howtoplay")}
            >
              How to Play
            </button>
          </div>
        </div>

        {popup === "howtoplay" && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-main-black bg-opacity-80 z-30">
            <div className="bg-button-blue p-6 rounded-md shadow-md w-80 max-w-[90%] text-white relative
                  drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
              <button 
                className="absolute top-2 right-3 text-white text-xl font-bold 
                hover:scale-110 transition-transform duration-200 ease-in-out"
                onClick={() => setPopup(null)}
              >
                ✖
              </button>
              <h2 className="text-xl font-bold mb-4">HOW TO PLAY</h2>
              <div className="text-left space-y-3">
                <p>1. <span className="font-semibold">Scroll</span> through the story to explore.</p>
                <p>2. <span className="font-semibold">Click choices</span> to interact with the environment.</p>
                <p>3. <span className="font-semibold">Your decisions</span> will shape the story's outcome.</p>
                <p>4. <span className="font-semibold">No time limits</span> - play at your own pace.</p>
              </div>
            </div>
          </div>
        )}

        {popup === "about" && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-main-black bg-opacity-80 z-30">
            <div className="bg-[#484C7D] p-6 rounded-md shadow-md w-80 max-w-[90%] text-white relative
                  drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
              <button 
                className="absolute top-2 right-3 text-white text-xl 
                font-bold hover:scale-110 transition-transform duration-200 ease-in-out"
                onClick={() => setPopup(null)}
              >
                ✖
              </button>
              <h2 className="text-xl font-bold mb-4">ABOUT</h2>
              <p className="mb-3 text-sm">Cosmic Crossroads is an interactive adventure that blends astronomy with storytelling.</p>
              <p className="mb-3 text-sm">Navigate the solar system and learn about the malefic and benefic planets, each with unique personalities and abilities.</p>
              <p className="mb-3 text-sm">Your choices will determine the fate of the cosmos!</p>

              <h3 className='font-header mb-3 text-md font-bold text-white text-center'>
                Credits:
              </h3>
              <p className="mb-3 text-sm"> Design, Development, Pixel Art by <a href='https://danyabaron.com/' target="_blank" rel="noopener noreferrer" className="underline
               hover:text-[#A0A6E1]"> Danya Baron</a></p>
              <p className="mb-3 text-sm"> Music: <a href="https://wowsound.itch.io/space-bobble-music-pack" target="_blank" rel="noopener noreferrer" className="underline
               hover:text-[#A0A6E1]">Space Bobble Music Pack</a></p>
               <p className="mb-3 text-sm"> Space Backgrounds: <a href="https://deep-fold.itch.io/space-background-generator" target="_blank" rel="noopener noreferrer" className="underline
               hover:text-[#A0A6E1]">Deep-Fold Pixel Space Background Generator</a></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;