// TouchHandler.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const TouchHandler = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>HELLO WORLD!</Text>
    </TouchableOpacity>
  );
};

export default TouchHandler;
