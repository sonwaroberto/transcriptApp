import React, {FC} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from './profile.style';
import Avatar from '../../components/avatar/Avatar';
import theme from '../../resources/theme';

type Props = {
  navigation?: any;
};

const ProfileScreen: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.head}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Avatar/>
            </TouchableOpacity>
            <Text style={styles.headerText}>Order</Text>
            <Image
              source={require('../../resources/icons/notification-bell.png')}
              style={styles.notification}
            />
          </View>          
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
