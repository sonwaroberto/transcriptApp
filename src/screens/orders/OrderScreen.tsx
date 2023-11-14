import React, {FC} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from './order.style';
import Avatar from '../../components/avatar/Avatar';

type Props = {
  navigation?: any;
};

const orders = [
  {id: 1, level: '450', mode: 'Fast Mode', date: '12/05,2023', status: 'PENDING'},
  {id: 2, level: '450', mode: 'Fast Mode', date: '12/05,2023', status: 'PENDING'},
  {id: 3, level: '400', mode: 'Fast Mode', date: '12/05,2023', status: 'CLOSED'},
  {id: 4, level: '300', mode: 'Slow Mode', date: '12/05,2023', status: 'CLOSED'},
]

const renderOrders = () => {
  <FlatList
        keyExtractor={order => order.id}
        data={orders}
        renderItem={({item}) => {
        return (
            <View style={{flex: 1, alignItems: 'center', marginVertical: 5}}>
                <Text>{item.level}</Text>
            </View>
        )
        }}
    />
}

const OrderScreen: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.head}>
            <Avatar />
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

export default OrderScreen;
