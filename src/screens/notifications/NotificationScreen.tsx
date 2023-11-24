import React, {FC} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './notification.style';
import theme from '../../resources/theme';
import Icons, {IconType} from '../../components/icon/icons.component';

type Props = {
  navigation?: any;
};

const notifications = [
  {
    id: 1,
    msg: `Your transcript is Ready! Download it now to access your records`,
    date: '12/05/2023',
  },
  {
    id: 2,
    msg: `Your transcript request has been received and is in progress!`,
    date: '12/05/2023',
  },
  {
    id: 3,
    msg: 'Payment Successfully Received! Stay tuned for updates ',
    date: '12/05/2023',
  },
  {
    id: 4,
    msg: `Your transcript is Ready! Download it now to access your records`,
    date: '12/10/2023',
  },
  {
    id: 5,
    msg: `Your transcript request has been received and is in progress!`,
    date: '12/10/2023',
  },
  {
    id: 6,
    msg: 'Payment Successfully Received! Stay tuned for updates ',
    date: '12/10/2023',
  },
];

const renderNotifications = (
  <FlatList
    keyExtractor={notification => notification.id.toString()}
    data={notifications}
    renderItem={({item}) => {
      return (
        <View style={styles.notifications}>
          <View>
            <Icons
              size={30}
              icon={IconType.CUSTOMER_SUPPORT}
              color={theme.primary}
            />
          </View>
          <View style={{marginLeft: -theme.screenWidth * 0.08}}>
            <Text style={styles.message}>{item.msg}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>
      );
    }}
  />
);

const NotificationScreen: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.head}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons size={20} icon={IconType.ARROW_LEFT} color={theme.black} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Notifications</Text>
          </View>
        </View>
        <View style={{marginBottom: theme.screenHeight * 0.3}}>
          {renderNotifications}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationScreen;
