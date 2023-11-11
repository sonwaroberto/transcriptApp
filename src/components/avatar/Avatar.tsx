import React, {FC} from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../resources/theme';

const Avatar: FC= () => {
  return (    
        <View style={styles.container}>
            <Text style={styles.username}>NE</Text>
        </View>
=======
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../resources/theme';

const Avatar: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>NE</Text>
    </View>
>>>>>>> 02c2af5da8c5e32aa0aef56e71f1d22c2e926def
  );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
    container:{
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        backgroundColor: theme.primary,
        borderColor: theme.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    username:{
        fontSize: 14,
        fontWeight: '800',
        color: theme.white
    }
})
=======
  container: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: theme.primary,
    borderColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    fontSize: 14,
    fontWeight: '800',
    color: theme.white,
  },
});
>>>>>>> 02c2af5da8c5e32aa0aef56e71f1d22c2e926def

export default Avatar;
