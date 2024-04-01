import React, { FC, useEffect, useState } from 'react';
import { SafeAreaView, View, Text, ImageBackground } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import styles from './homeScreen.style';
import Button, { ButtonType } from '../../components/button/button';

type Props = {
  navigation?: any;
};

const HomeScreen: FC<Props> = ({ navigation }) => {
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    // Get current location when the component mounts
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      (error) => console.error(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    // Watch for changes in the user's location
    const watchId = Geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      (error) => console.error(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
    );

    // Clean up the watchId on component unmount
    return () => Geolocation.clearWatch(watchId);
  }, []);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <MapView style={styles.map} region={region}>
            <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
          </MapView>
        </View>
        <View style={styles.section2}>
          {/* Rest of your UI components */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
