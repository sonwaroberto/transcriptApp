// SuccessScreen.js
import React from 'react';
import {View, Text} from 'react-native';

import LottieView from 'lottie-react-native';
import styles from './applyForm.style';

const SuccessScreen = () => {
  return (
    <View style={styles.successContainer}>
      <LottieView
        source={require('../../components/animation/fireworks.json')}
        autoPlay
        loop={true}
        style={styles.fireworksAnimation}
      />

      <Text style={styles.successText}>Success!!</Text>
    </View>
  );
};

export default SuccessScreen;
