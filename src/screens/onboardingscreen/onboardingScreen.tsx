import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from './onBoardingScreen.style';
import theme from '../../resources/theme';
type Props = {
  navigation: any;
};

const Dots = ({selected}: {selected: boolean}) => {
  let backgroundColor = selected ? theme.white : theme.grayDark;

  return <View style={[styles.dot, {backgroundColor}]} />;
};

const Skip = ({...props}: any) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.buttonText}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}: any) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.buttonText}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}: any) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.buttonText}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen: FC<Props> = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('Home')}
      onDone={() => navigation.navigate('Home')}
      pages={[
        {
          backgroundColor: theme.primary,
          image: (
            <Image
              source={require('../../assets/images/onboarding-img1.png')}
            />
          ),
          title: 'Seamless Transcript Requests',
          subtitle:
            'Log in, request transcripts with a click, and enjoy a streamlined experience from request to download.',
        },
        {
          backgroundColor: theme.secondary,
          image: (
            <Image
              source={require('../../assets/images/onboarding-img2.png')}
            />
          ),
          title: 'Speedy and Secure',
          subtitle:
            'Choose processing speed, make secure payments, and track progress in real-time for a hassle-free experience.',
        },
        {
          backgroundColor: theme.tertiary,
          image: (
            <Image
              source={require('../../assets/images/onboarding-img3.png')}
            />
          ),
          title: 'User-Centric Features',
          subtitle:
            'Manage your profile, recover passwords, and enjoy a user-friendly experience. Welcome to simplicity with the E-Transcript App!',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
