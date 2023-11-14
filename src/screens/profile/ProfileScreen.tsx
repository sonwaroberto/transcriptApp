import React, {FC} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from './profile.style';
import Avatar from '../../components/avatar/Avatar';
import theme from '../../resources/theme';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
  navigation?: any;
};

const ProfileScreen: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../resources/icons/arrow-left.png')}
                style={styles.notification}
              />
            </TouchableOpacity>           
        </View>
        <View style={styles.avatar}>
          <Text style={styles.username}>NE</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
