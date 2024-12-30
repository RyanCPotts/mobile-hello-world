import { React, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  // We can use state to store a message that shows up when the text is touched
  const [message, setMessage] = useState('');

  const handleTouch = () => {
    setMessage("You touched the 'HELLO WORLD!' text!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleTouch}>
        <Text>HELLO WORLD!</Text>
      </TouchableOpacity>

      {/* Conditionally render the message when the text is touched */}
      {message !== '' && <Text>{message}</Text>}

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
