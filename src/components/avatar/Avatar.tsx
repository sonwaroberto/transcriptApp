import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../resources/theme';

const Avatar: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>NE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Avatar;
