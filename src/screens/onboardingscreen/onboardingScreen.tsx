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
          title: 'title',
          subtitle: 'body.',
        },
        {
          backgroundColor: theme.secondary,
          image: (
            <Image
              source={require('../../assets/images/onboarding-img2.png')}
            />
          ),
          title: 'title',
          subtitle: 'body.',
        },
        {
          backgroundColor: theme.tertiary,
          image: (
            <Image
              source={require('../../assets/images/onboarding-img3.png')}
            />
          ),
          title: 'title',
          subtitle: 'body',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
