import { StyleSheet, Dimensions, View } from 'react-native';
import {useState,useEffect} from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export default function Procurar() {

  const [region, setRegion] = useState(null);
  const animaisperdidos = {
    animalperdido1: {latitude: '1ooij23', longitude: '123'},
    animalperdido2: {latitude: '123', longitude: '12323223'},
    animalperdido3: {latitude: '12xcx3', longitude: '123'}
  }
  const animaisdoacao = {
    animaldoacao1: {latitude: '1ooij23', longitude: '123'},
    animaldoacao2: {latitude: '123', longitude: '123'},
    animaldoacao3: {latitude: '123', longitude: '123'}
  }

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
        mapType={"standard"}  />
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