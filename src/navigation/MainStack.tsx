/* eslint-disable react/no-unstable-nested-components */
import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import {Icons} from '../components';
import {IconType} from '../components/icon/icons.component';
import styles from './mainstack.style';
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import OrderScreen from '../screens/orders/OrderScreen';
import Wallet from '../screens/wallet/wallet';
import theme from '../resources/theme';
import ApplyForm from '../screens/applyForm/applyForm';
import LoadScreen from '../screens/applyForm/loadScreen';
import SuccessScreen from '../screens/applyForm/successScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import PaymentMethod from '../screens/payment/paymentScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ViewTranscript from '../screens/dashboard/viewTranscript';
import LoginScreen from '../screens/auth/LoginScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTabs: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 90,
          paddingBottom: 22,
          paddingTop: 6,
          backgroundColor: theme.primary,
        },
        headerTitleAlign: 'center',
        header: undefined,
        // tabBarActiveTintColor: theme.black,
        // tabBarStyle: {backgroundColor: theme.primary, padding: 16},
      }}>
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <>
              <View style={styles.bottomIcons}>
                <Icons
                  size={22}
                  icon={IconType.HOME_FILLED}
                  color={!focused ? theme.white : theme.black}
                />
              </View>
              <Text style={[styles.bottomTabTitle, focused && styles.focused]}>
                Home
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <>
              <View style={styles.bottomIcons}>
                <Icons
                  size={22}
                  icon={IconType.ORDER_HISTORY}
                  color={!focused ? theme.white : theme.black}
                />
              </View>
              <Text style={[styles.bottomTabTitle, focused && styles.focused]}>
                Orders
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <>
              <View style={styles.bottomIcons}>
                <Icons
                  size={22}
                  icon={IconType.CREDIT_CARD}
                  color={!focused ? theme.white : theme.black}
                />
              </View>
              <Text style={[styles.bottomTabTitle, focused && styles.focused]}>
                Wallet
              </Text>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MainStack: FC = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthTabs" component={HomeTabs} />
        <Stack.Screen name="Apply" component={ApplyForm} />
        <Stack.Screen name="loadscreen" component={LoadScreen} />
        <Stack.Screen name="sucessscreen" component={SuccessScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="paymentmethod" component={PaymentMethod} />
        <Stack.Screen name="viewtranscript" component={ViewTranscript} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </>
  );
};

export default MainStack;
