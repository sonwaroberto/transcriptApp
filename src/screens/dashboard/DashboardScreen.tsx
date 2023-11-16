import React, {FC} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import styles from './dashboard.style';
import Avatar from '../../components/avatar/Avatar';
import theme from '../../resources/theme';
import Icons, { IconType } from '../../components/icon/icons.component';

type Props = {
  navigation?: any;
};

const appliedTranscript = [
  {id: 1, number: 0o1},
  {id: 2, number: 0o2},
  {id: 3, number: 0o3},
  {id: 4, number: 0o4},
  {id: 5, number: 0o5}
]

const renderApplication = <FlatList
  keyExtractor={transcript => transcript.id}
  data={appliedTranscript}
  renderItem={({item}) =>{
    return (
      <View style={styles.transContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', top: theme.screenHeight * 0.025, left: theme.screenWidth * 0.01}}>
          <Image
            source={require('../../resources/icons/summary.png')}
            style={styles.transcript}
          />
          <Text style={{color: '#000', fontSize: 17, left: theme.screenWidth * 0.07}}>
            Student Academic Record N-{item.number}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 55,
            top: theme.screenHeight * 0.035,
            left: theme.screenWidth * 0.01
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
    );
  }}
/>

const DashboardScreen: FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.head}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Avatar/>
            </TouchableOpacity>
            <Icons size={40} icon={IconType.NOTIFICATION} color={theme.black} />
          </View>
          <View style={{marginTop: 10, display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: 'black', fontSize: theme.fontSizeNormal}}>Hello, </Text>
            <Text style={{fontSize: theme.fontSizeNormal, fontWeight: '800', color: 'black'}}>Neba Emmanuel</Text>
          </View>
          <Text style={{color: 'black', fontSize: theme.fontSizeSmall}}>keep Track of your Results!</Text>
        </View>
        <View style={styles.applyContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/images/apply.png')}
              style={styles.apply}
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
          <>{renderApplication}</>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
