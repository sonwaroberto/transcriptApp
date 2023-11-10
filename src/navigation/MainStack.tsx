/* eslint-disable react/no-unstable-nested-components */
import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import {Text, View} from 'react-native';
import {Icons} from '../components';
import {IconType} from '../components/icon/icons.component';
import styles from './mainstack.style';

const Tab = createBottomTabNavigator();

const MainStack: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 90,
          paddingBottom: 22,
          paddingTop: 6,
          backgroundColor: 'white',
        },
        headerTitleAlign: 'center',
        header: undefined,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          tabBarIcon: ({focused}) => (
            <>
              <View style={styles.bottomIcons}>
                {focused ? (
                  <Icons size={22} icon={IconType.HOME_FILLED} />
                ) : (
                  <Icons size={22} icon={IconType.HOME} />
                )}
              </View>
              <Text style={[styles.bottomTabTitle, focused && styles.focused]}>
                Home
              </Text>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStack;
