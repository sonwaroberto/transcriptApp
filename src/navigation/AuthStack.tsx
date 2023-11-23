import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon, {IconType} from '../components/icon/icons.component';

import OnboardingScreen from '../screens/onboardingscreen/onboardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import SplashScreen from '../screens/splash/splashScreen';
import HomeScreen from '../screens/home/HomeScreen';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import ApplyForm from '../screens/applyForm/applyForm';
import LoadScreen from '../screens/applyForm/loadScreen';
import SuccessScreen from '../screens/applyForm/successScreen';
import OrderScreen from '../screens/orders/OrderScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import theme from '../resources/theme';
import PaymentMethod from '../screens/payment/paymentScreen';
import ViewTranscript from '../screens/dashboard/viewTranscript';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const HomeTabs: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.black,
        tabBarStyle: {backgroundColor: theme.primary},
      }}>
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              icon={IconType.HOME}
              color={focused ? theme.white : theme.black}
              size={26}
            />
          ),
          tabBarActiveTintColor: theme.white,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              icon={IconType.ORDER_HISTORY}
              color={focused ? theme.white : theme.black}
              size={26}
            />
          ),
          tabBarActiveTintColor: theme.white,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const AuthStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="AuthTabs" component={HomeTabs} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Apply" component={ApplyForm} />
      <Stack.Screen name="loadscreen" component={LoadScreen} />
      <Stack.Screen name="sucessscreen" component={SuccessScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="paymentmethod" component={PaymentMethod} />
      <Stack.Screen name='viewtranscript' component={ViewTranscript} />
    </Stack.Navigator>
  );
};

export default AuthStack;
