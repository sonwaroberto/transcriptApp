// SuccessScreen.js
import React from 'react';
import { View, Text } from 'react-native';

import LottieView from 'lottie-react-native';
import styles from './applyForm.style';



const SuccessScreen = () => {
  return (
    <View style={styles.successContainer}>
      {/* Fireworks Animation */}
      <LottieView
        source={require('../../components/animation/fireworks.json')}
        autoPlay
        loop={true}
        style={styles.fireworksAnimation}
      />

      {/* Success Text */}
      <Text style={styles.successText}>Successful</Text>
    </View>
  );
};

export default SuccessScreen;
