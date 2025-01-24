// App.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Audio } from 'expo-av';
import AudioHandler from './Components/AudioHandler.js';

export default function App() {
  const [playSound, setPlaySound] = useState(false);

  // Initialize audio settings
  useEffect(() => {
    async function setupAudio() {
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        allowsRecordingIOS: false,
        staysActiveInBackground: false,
        shouldDuckAndroid: true,
      });
    }
    setupAudio();
  }, []);

  // Handle touch on the "HELLO WORLD!" text
  const handleTouch = () => {
    setPlaySound(prev => !prev);  // Toggle sound state to allow multiple plays
  };

  return (
    <View style={styles.container}>
      {/* Pass the handleTouch function to TouchHandler */}
      <TouchHandler onPress={handleTouch} />

      {/* Pass the playSound state to AudioHandler to play sound */}
      <AudioHandler shouldPlay={playSound} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});