import React, {FC} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from './order.style';
import Avatar from '../../components/avatar/Avatar';
import theme from '../../resources/theme';

type Props = {
  navigation?: any;
};

const orders = [
  {id: 1, level: '450', mode: 'Fast Mode', date: '12/05,2023', status: 'pending'},
  {id: 2, level: '450', mode: 'Fast Mode', date: '12/05,2023', status: 'pending'},
  {id: 3, level: '400', mode: 'Fast Mode', date: '12/05,2023', status: 'closed'},
  {id: 4, level: '300', mode: 'Slow Mode', date: '12/05,2023', status: 'closed'},
  {id: 5, level: '450', mode: 'Fast Mode', date: '12/05,2023', status: 'pending'},
  {id: 6, level: '450', mode: 'Fast Mode', date: '12/05,2023', status: 'pending'},
  {id: 7, level: '400', mode: 'Fast Mode', date: '12/05,2023', status: 'closed'},
  {id: 8, level: '300', mode: 'Slow Mode', date: '12/05,2023', status: 'closed'},
  {id: 10, level: '400', mode: 'Fast Mode', date: '12/05,2025', status: 'closed'},
  {id: 11, level: '300', mode: 'Slow Mode', date: '12/05,2024', status: 'closed'},
]

const renderOrders = <FlatList
        keyExtractor={order => order.id}
        data={orders}
        renderItem={({item}) => {
        return (
            <View style={styles.orders}>
                <View>
                  <Image
                    source={require('../../assets/images/orders.png')}
                    style={styles.orderIcon}
                  />
                </View>
                <View style={{marginLeft: -theme.screenWidth * 0.08}}>
                  <Text style={{color: theme.black, fontSize: 18, fontWeight: '600'}}>Level {item.level}</Text>
                  <Text style={{color: theme.black, fontSize: 16}}>{item.mode}</Text>
                  <Text style={{color: theme.grayLight}}>{item.date}</Text>
                </View>
                {item.status == 'pending' ? 
                <View>
                  <Text style={[styles.status,{backgroundColor: theme.grayLight, color: theme.white}]}>{item.status}</Text>
                </View> :
                <View>
                  <Text style={[styles.status,{backgroundColor: theme.primary, color: theme.white}]}>{item.status}</Text>
                </View>
                }
            </View>
        )
        }}
    />

const OrderScreen: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.head}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Avatar/>
            </TouchableOpacity>
            <Text style={styles.headerText}>Order</Text>
            <Image
              source={require('../../resources/icons/notification-bell.png')}
              style={styles.notification}
            />
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
