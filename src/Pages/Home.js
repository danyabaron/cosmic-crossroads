import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [popup, setPopup] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="bg-main-black w-screen h-screen flex flex-col gap-6 justify-center items-center relative z-10">
      <h1 className="text-4xl font-bold text-white">COSMIC CROSSROADS</h1>
      <div className="flex flex-col gap-7">
        <button 
          className="w-40 h-8 rounded-lg bg-button-blue text-white relative z-10" 
          onClick={() => navigate("/marsintro")}
        >
          Start
        </button>

        <button 
          className="w-40 h-8 rounded-lg bg-button-blue text-white relative z-10" 
          onClick={() => setPopup("about")}
        >
          About
        </button>

        <button 
          className="w-40 h-8 rounded-lg bg-button-blue text-white relative z-10" 
          onClick={() => setPopup("howtoplay")}
        >
          How to Play
        </button>
      </div>

      {popup === "howtoplay" && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-30">
          <div className="bg-button-blue p-6 rounded-md shadow-md w-80 max-w-[90%] text-white">
            <h2 className="text-xl font-bold mb-4">HOW TO PLAY</h2>
            <div className="text-left space-y-3">
              <p>1. <span className="font-semibold">Scroll</span> through the story to explore.</p>
              <p>2. <span className="font-semibold">Click choices</span> to interact with the environment.</p>
              <p>3. <span className="font-semibold">Your decisions</span> will shape the story's outcome.</p>
              <p>4. <span className="font-semibold">No time limits</span> - play at your own pace.</p>
            </div>
            <button 
              className="mt-6 px-4 py-1 bg-[#6D74B0] rounded-lg hover:bg-[#5A6096]"
              onClick={() => setPopup(null)}
            >
              Got It!
            </button>
          </div>
        </div>
      )}

      {popup === "about" && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-30">
          <div className="bg-[#484C7D] p-6 rounded-md shadow-md w-80 max-w-[90%] text-white">
            <h2 className="text-xl font-bold mb-4">ABOUT</h2>
            <p className="mb-3">Cosmic Crossroads is an interactive adventure that blends astronomy with storytelling.</p>
            <p className="mb-3">Navigate the solar system as different planets, each with unique personalities and abilities.</p>
            <p>Your choices will determine the fate of the cosmos!</p>
            <button 
              className="mt-6 px-4 py-1 bg-[#6D74B0] rounded-lg hover:bg-[#5A6096]"
              onClick={() => setPopup(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;