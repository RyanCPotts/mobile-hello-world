// AudioHandler.js
import React, { useState } from 'react';
import { Audio } from 'expo-av';

const AudioHandler = ({ shouldPlay }) => {
  const [sound, setSound] = useState();

  // Play a sound when the flag is set to true
  React.useEffect(() => {
    const playSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('./assets/cowbell.wav') // You can put your audio file here
      );
      setSound(sound);
      await sound.playAsync();
    };

    if (shouldPlay) {
      playSound();
    } else {
      // Stop sound when shouldPlay becomes false or reset
      sound && sound.stopAsync();
    }

    // Cleanup sound when component is unmounted or dependencies change
    return () => {
      sound && sound.unloadAsync();
    };
  }, [shouldPlay]);  // Trigger effect when 'shouldPlay' changes

  return null;
};

export default AudioHandler;
