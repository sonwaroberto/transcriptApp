import React, {FC} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './dashboard.style';
import Avatar from '../../components/avatar/Avatar';
import theme from '../../resources/theme';
import Icons, {IconType} from '../../components/icon/icons.component';
import { screenHeight } from '../../utils/dimensions';

type Props = {
  navigation?: any;
};

const appliedTranscript = [
  {id: 1, number: 0o1},
  {id: 2, number: 0o2},
  {id: 3, number: 0o3},
  {id: 4, number: 0o4},
  {id: 5, number: 0o5},
];

const DashboardScreen: FC<Props> = ({navigation}) => {
  const renderApplication = (
    <FlatList
      keyExtractor={transcript => transcript.id.toString()}
      data={appliedTranscript}
      renderItem={({item}) => {
        return (
          <View style={styles.transContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                top: theme.screenHeight * 0.025,
                left: theme.screenWidth * 0.01,
              }}>
              <Image
                source={require('../../resources/icons/summary.png')}
                style={styles.transcript}
              />
              <Text
                style={{
                  color: '#000',
                  fontSize: 17,
                  left: theme.screenWidth * 0.07,
                }}>
                Student Academic Record N-{item.number}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 55,
                top: theme.screenHeight * 0.035,
                left: theme.screenWidth * 0.01,
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
              <TouchableOpacity onPress={() => navigation.navigate('Transcript')}>
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
  );
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Avatar />
            </TouchableOpacity>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: theme.screenHeight * 0.2,
                alignItems: 'center',
                justifyContent: 'center',
                left: theme.screenWidth * 0.03,
              }}>
              <Text
                style={{
                  fontSize: theme.fontSizeLarge,
                  fontWeight: '800',
                  color: 'black',
                }}>
                Neba Emmanuel
              </Text>
              <Text style={{color: 'black', fontSize: theme.fontSizeNormal}}>
                CT22A287
              </Text>
              <Text style={{color: 'black', fontSize: theme.fontSizeNormal}}>
                Computer Engineering
              </Text>
            </View>
            <View style={{left: theme.screenWidth * 0.08}}>
              <Icons size={30} icon={IconType.NOTIFICATION} color={theme.black}/>
            </View>
          </View>
          {/* <Icons size={30} icon={IconType.NOTIFICATION} color={theme.black} /> */}
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
          <TouchableOpacity onPress={() => navigation.navigate('Apply')}>
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
          <View style={{paddingBottom: theme.screenHeight * 1, marginBottom: theme.screenHeight * 0.2 }}>
            {renderApplication}
          </View>
        </View>
        </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
