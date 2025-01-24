import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

const AudioHandler = ({ shouldPlay }) => {
  const [sound, setSound] = useState();

  // Play a sound when the flag is set to true
  useEffect(() => {
    const playSound = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require('../assets/cowbell.wav') // Correct relative path
        );
        setSound(sound);
        await sound.playAsync();
      } catch (error) {
        console.error('Error playing sound:', error);
      }
    };

    if (shouldPlay) {
      playSound();
    } else if (sound) {
      // Stop sound when shouldPlay becomes false
      sound.stopAsync();
    }

    // Cleanup sound when component is unmounted or dependencies change
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [shouldPlay]); // Trigger effect when 'shouldPlay' changes

  return null;
};

export default AudioHandler;
