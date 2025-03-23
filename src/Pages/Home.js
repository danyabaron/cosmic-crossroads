import { useState } from "react";


const Home = () => {
  const [popup, setPopup] = useState(null);

  return (
    <div className="bg-black w-screen h-screen flex flex-col gap-6 justify-center items-center relative">
      <h1 className="text-4xl font-bold text-white">Interactive Story Game</h1>
      <div className="flex flex-col gap-4">
        <button className="w-40" onClick={() => setPopup("start")}>Start</button>
        <button className="w-40" onClick={() => setPopup("about")}>About</button>
        <button className="w-40" onClick={() => setPopup("settings")}>Settings</button>
      </div>

      {popup && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md w-80 text-center">
            <h2 className="text-xl font-bold">{popup.charAt(0).toUpperCase() + popup.slice(1)}</h2>
            <p className="mt-4">This is the {popup} pop-up content.</p>
            <button className="mt-4" onClick={() => setPopup(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;