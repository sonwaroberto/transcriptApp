import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from '../screens/onboardingscreen/onboardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import SplashScreen from '../screens/splash/splashScreen';
import HomeScreen from '../screens/home/HomeScreen';
// import DashboardScreen from '../screens/dashboard/dashboard/dashboard';

const Stack = createStackNavigator();
const AuthStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      {/* <Stack.Screen name="Dashboard" component={DashboardScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
