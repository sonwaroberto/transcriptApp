import React, {FC, useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import styles from './applyForm.style';

type Props = {
  navigation: any;
};

const LoadScreen: FC<Props> = ({navigation}) => {
  const [loadingText, setLoadingText] = useState('Please Validate Payment');

  useEffect(() => {
    const loadingAnimation = setInterval(() => {
      setLoadingText(prevText =>
        prevText === 'Please Validate Payment...'
          ? 'Please Validate Payment'
          : prevText + '.',
      );
    }, 500);

    const timeout = setTimeout(() => {
      clearInterval(loadingAnimation);
      navigation.replace('sucessscreen');
    }, 10000);

    return () => {
      clearInterval(loadingAnimation);
      clearTimeout(timeout);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={100} color={'blue'} />

      <Text style={styles.loadingText}>{loadingText}</Text>
    </View>
  );
};

export default LoadScreen;
