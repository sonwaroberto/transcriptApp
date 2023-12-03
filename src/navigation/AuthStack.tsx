import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from '../screens/onboardingscreen/onboardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import SplashScreen from '../screens/splash/splashScreen';
import HomeScreen from '../screens/home/HomeScreen';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import ApplyForm from '../screens/applyForm/applyForm';
import LoadScreen from '../screens/applyForm/loadScreen';
import SuccessScreen from '../screens/applyForm/successScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

import PaymentMethod from '../screens/payment/paymentScreen';

const Stack = createStackNavigator();

const AuthStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Apply" component={ApplyForm} />
      <Stack.Screen name="loadscreen" component={LoadScreen} />
      <Stack.Screen name="sucessscreen" component={SuccessScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="paymentmethod" component={PaymentMethod} />
    </Stack.Navigator>
  );
};

export default AuthStack;
