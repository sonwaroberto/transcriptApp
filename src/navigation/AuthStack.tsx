import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';

import OnboardingScreen from '../screens/onboardingscreen/onboardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import SplashScreen from '../screens/splash/splashScreen';
import HomeScreen from '../screens/home/HomeScreen';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import OrderScreen from '../screens/orders/OrderScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Stack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();

const HomeTabs: FC = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      shifting={true}
      barStyle={{ backgroundColor: '#007AFF' }}
    >
      <BottomTab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarIcon: 'home',
          tabBarColor: 'black',
        }}
      />
      <BottomTab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarIcon: 'cart',
          tabBarColor: 'black',
        }}
      />
    </BottomTab.Navigator>
  );
};

const AuthStack: FC = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="AuthTabs" component={HomeTabs} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

