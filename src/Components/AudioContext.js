import React, { createContext, useState, useContext, useEffect, useRef } from 'react';
import ThemeMusic from '../assets/other-art/theme-music.wav' // Update this path to match your file structure

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(ThemeMusic));
  
  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    
    // Cleanup function
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const playAudio = () => {
    const audio = audioRef.current;
    
    if (!isPlaying) {
      // Fix for mobile devices that require user interaction
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.error("Audio playback failed:", error);
          });
      }
    }
  };

  const pauseAudio = () => {
    const audio = audioRef.current;
    
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, playAudio, pauseAudio, toggleAudio }}>
      {children}
    </AudioContext.Provider>
  );
};
