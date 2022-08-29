import { StyleSheet, Dimensions, View } from 'react-native';
import {useState,useEffect} from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';

export default function Procurar() {

  const [region, setRegion] = useState(null);
  
  const animaisPerdidos = [
    { coordinates: { latitude: -28.701556, longitude: -49.405889 } },
    { coordinates: { latitude: -28.699174, longitude: -49.408318 } },
    { coordinates: { latitude: -28.698139, longitude: -49.406634 } },
  ];

   const animaisDoaçao = [
    { coordinates: { latitude: -28.699974, longitude:  -49.402053 } },
    { coordinates: { latitude: -28.696174, longitude: -49.408318 } },
    { coordinates: { latitude: -28.697139, longitude: -49.406634 } },
  ];

  useEffect(() => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.05,
      })
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        showsUserLocation={true} 
        initialRegion={region} 
        moveOnMarkerPress={true} 
        loadingEnabled={true} 
        followsUserLocation={true} 
        mapType={"standard"}  
        >
        
        {animaisPerdidos.map((item, index) => (
          <Marker key={index} title="Test" coordinate={item.coordinates} />
        ))}

        {animaisDoaçao.map((item, index) => (
          <Marker key={index} title="Test" coordinate={item.coordinates} pinColor="blue" />
        ))}

      </MapView>
    </View>
  );
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
    height: Dimensions.get('window').height,
  },

});