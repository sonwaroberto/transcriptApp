import React, {FC, useEffect} from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import theme from '../../resources/theme';
import styles from './splash.style';
type Props = {
  navigation: any;
};

const SplashScreen: FC<Props> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 1000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <ActivityIndicator size={100} color={theme.darkPrimary} />
    </View>
  );
};

export default SplashScreen;
