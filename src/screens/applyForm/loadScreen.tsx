import React, { FC, useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import theme from '../../resources/theme';
import styles from './applyForm.style';

type Props = {
  navigation: any;
};

const LoadScreen: FC<Props> = ({ navigation }) => {
  const [loadingText, setLoadingText] = useState("Please Validate Payment");

  useEffect(() => {
    const loadingAnimation = setInterval(() => {
     
      setLoadingText((prevText) =>
        prevText === "Please Validate Payment..." ? "Please Validate Payment" : prevText + "."
      );
    }, 500); 

    return () => clearInterval(loadingAnimation);
  }, []);

  return (
    <View style={styles.container}>
      {/* Loading Circle */}
      <ActivityIndicator size="large" color={'blue'} />

      {/* Loading Text */}
      <Text style={styles.loadingText}>{loadingText}</Text>
    </View>
  );
};

export default LoadScreen;
