import React, {FC} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './order.style';
import Avatar from '../../components/avatar/Avatar';
import theme from '../../resources/theme';
import Icons, {IconType} from '../../components/icon/icons.component';

type Props = {
  navigation?: any;
};

const orders = [
  {
    id: 1,
    level: '450',
    mode: 'Fast Mode',
    date: '12/05,2023',
    status: 'pending',
  },
  {
    id: 2,
    level: '450',
    mode: 'Fast Mode',
    date: '12/05,2023',
    status: 'pending',
  },
  {
    id: 3,
    level: '400',
    mode: 'Fast Mode',
    date: '12/05,2023',
    status: 'closed',
  },
  {
    id: 4,
    level: '300',
    mode: 'Slow Mode',
    date: '12/05,2023',
    status: 'closed',
  },
  {
    id: 5,
    level: '450',
    mode: 'Fast Mode',
    date: '12/05,2023',
    status: 'pending',
  },
  {
    id: 6,
    level: '450',
    mode: 'Fast Mode',
    date: '12/05,2023',
    status: 'pending',
  },
  {
    id: 7,
    level: '400',
    mode: 'Fast Mode',
    date: '12/05,2023',
    status: 'closed',
  },
  {
    id: 8,
    level: '300',
    mode: 'Slow Mode',
    date: '12/05,2023',
    status: 'closed',
  },
  {
    id: 10,
    level: '400',
    mode: 'Fast Mode',
    date: '12/05,2025',
    status: 'closed',
  },
  {
    id: 11,
    level: '300',
    mode: 'Slow Mode',
    date: '12/05,2024',
    status: 'closed',
  },
];

const renderOrders = (
  <FlatList
    keyExtractor={order => order.id.toString()}
    data={orders}
    renderItem={({item}) => {
      return (
        <View style={styles.orders}>
          <View>
            <Icons
              size={40}
              icon={IconType.INFORMATION}
              color={theme.primary}
            />
          </View>
          <View style={{marginLeft: -theme.screenWidth * 0.08}}>
            <Text style={{color: theme.black, fontSize: 18, fontWeight: '600'}}>
              Level {item.level}
            </Text>
            <Text style={{color: theme.black, fontSize: 16}}>{item.mode}</Text>
            <Text style={{color: theme.grayLight}}>{item.date}</Text>
          </View>
          {item.status == 'pending' ? (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.grayLight,
                width: 100,
                minHeight: 50,
                borderRadius: 4,
              }}>
              <Text style={[styles.status, {color: theme.white}]}>
                {item.status}
              </Text>
            </View>
          ) : (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.primary,
                width: 100,
                minHeight: 50,
                borderRadius: 4,
              }}>
              <Text style={[styles.status, {color: theme.white}]}>
                {item.status}
              </Text>
            </View>
          )}
        </View>
      );
    }}
  />
);

const OrderScreen: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.head}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Avatar />
            </TouchableOpacity>
            <Text style={styles.headerText}>Order</Text>
            <Icons size={40} icon={IconType.NOTIFICATION} color={theme.black} />
          </View>
        </View>
        <View style={{paddingBottom: theme.screenHeight * 0.4}}>
          {renderOrders}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;
