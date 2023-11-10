import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import theme from '../resources/theme';
import styles from './loader.style';

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator color={theme.primary} size={100} />
    </View>
  );
};

export default Loader;
