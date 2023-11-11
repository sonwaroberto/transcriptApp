import React, {FC} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './dashboard.style';
import Button, {ButtonType} from '../../components/button/button';
import Avatar from '../../components/avatar/Avatar';

type Props = {
  navigation?: any;
};

const DashboardScreen: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.head}>
            <Avatar />
            <Image
              source={require('../../resources/icons/notification-bell.png')}
              style={styles.notification}
            />
          </View>
          <View style={{marginTop: 10, display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'black'}}>Hello, </Text>
            <Text style={{fontSize: 14, fontWeight: '800'}}>Neba Emmanuel</Text>
          </View>
          <Text style={{color: 'black'}}>keep Track of your Results!</Text>
        </View>
        <View style={styles.applyContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../resources/icons/summary.png')}
              style={styles.notification}
            />
            <Text
              style={{
                width: 100,
                fontSize: 16,
                fontStyle: 'italic',
                color: '#fff',
                fontWeight: '800',
                marginLeft: 10,
              }}>
              Transcript Request
            </Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                textDecorationLine: 'underline',
                marginTop: 20,
                fontSize: 16,
                color: '#fff',
              }}>
              Apply Now
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{color: '#000', marginVertical: 15}}>History</Text>
          <View style={styles.transContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image
                source={require('../../resources/icons/summary.png')}
                style={styles.notification}
              />
              <Text style={{color: '#000', fontSize: 17}}>
                Student Academic Record N-001
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 55,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    fontSize: 16,
                    color: '#2372E9',
                  }}>
                  View
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    fontSize: 16,
                    color: '#2372E9',
                  }}>
                  Download
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.transContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image
                source={require('../../resources/icons/summary.png')}
                style={styles.notification}
              />
              <Text style={{color: '#000', fontSize: 17}}>
                Student Academic Record N-002
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 55,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    fontSize: 16,
                    color: '#2372E9',
                  }}>
                  View
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    fontSize: 16,
                    color: '#2372E9',
                  }}>
                  Download
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.transContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image
                source={require('../../resources/icons/summary.png')}
                style={styles.notification}
              />
              <Text style={{color: '#000', fontSize: 17}}>
                Student Academic Record N-003
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 55,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    fontSize: 16,
                    color: '#2372E9',
                  }}>
                  View
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    fontSize: 16,
                    color: '#2372E9',
                  }}>
                  Download
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
