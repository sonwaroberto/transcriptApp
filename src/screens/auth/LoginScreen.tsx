import React, {FC} from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import styles from './LoginScreen.style';

type Props = {
  navigation: any;
};

const LoginScreen: FC<Props> = ({navigation}) => {
  console.log('mein navigation', navigation);
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={[styles.text, styles.textBold]}>Welcome Back !</Text>
            <Text style={styles.text}>Log in to your account</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  // }
};

export default LoginScreen;
