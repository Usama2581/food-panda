import { Platform, Text, View, StyleSheet, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';

export default function Checkout() {
  
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      await Location.watchPositionAsync({
        accuracy: Location.Accuracy.Lowest,
        timeInterval: 100,
        distanceInterval: 0.05
      }, (location) => {
        let { coords: { latitude, longitude } } = location
        setLocation({ latitude, longitude });
        console.log(location)
      })
    })();

  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          longitudeDelta: 0.00001,
          latitudeDelta: 0.000001
        }}
      >
        <Marker coordinate={{
          latitude: location.latitude || 24.8964165,
          longitude: location.longitude || 67.0817985
        }} />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})