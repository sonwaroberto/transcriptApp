// SuccessScreen.js
import React, {FC} from 'react';
import {View, Text} from 'react-native';

import LottieView from 'lottie-react-native';
import styles from './applyForm.style';
import Button from '../../components/button/button';

type Props = {
  navigation: any;
};

const SuccessScreen: FC<Props> = ({navigation}) => {
  return (
    <View style={styles.successContainer}>
      <LottieView
        source={require('../../components/animation/fireworks.json')}
        autoPlay
        loop={true}
        style={styles.fireworksAnimation}
      />

      <Text style={styles.successText}>SuccessFuly Apply!!</Text>
      <Text style={styles.text}>
        We will notice you when your transcript is available
      </Text>
      <View style={styles.buttonWrapper}>
        <Button
          btnText="Go back"
          onPress={() => navigation.navigate('Dashboard')}
          loading={false}
          disabled={false}
        />
      </View>
    </View>
  );
};

export default SuccessScreen;
