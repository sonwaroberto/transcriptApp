import React, {FC} from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import styles from './LoginScreen.style';

type Props = {
  navigation: any;
};

const RegisterScreen: FC<Props> = ({navigation}) => {
  console.log('user name: ', navigation);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'always'}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={[styles.text, styles.textBold]}>
              Join E-Transcript
            </Text>
            <Text style={styles.text}>Please provide the following</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
