import { StyleSheet, Dimensions, View } from 'react-native';
import {useState,useEffect} from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';

export default function Procurar({navigation}) {

  const [region, setRegion] = useState(null);

  const animaisPerdidos = [
    {
      "latitude": -28.701556,
      "longitude": -49.405889,
      "nome": "joao",
      "raca": "xiuaua",
      "idade": 12,
      "sexo": "famimasc",
      "porte": "piquenes",
      "pelagem": "piquena",
      "posse": "sim",
      "caracteristica": "sem perna"
    },
    {
      "latitude": -28.699174,
      "longitude": -49.408318,
      "nome": "daniel" 
    },
    {
      "latitude": -28.6934174,
      "longitude": -49.408318,
      "nome": "daniek jesuis" 
    }

  ];

   const animaisDoaçao = [
    {
      "latitude": -28.699974,
      "longitude": -49.402053,
      "nome": "luciano",
      "raca": "pitbull",
      "idade": 2,
      "sexo": "masculino",
      "porte": "medio",
      "pelagem": "lisa",
      "posse": "nao",
      "caracteristica": "sem perna"
    },
    {
      "latitude": -28.696174,
      "longitude":-49.408318,
      "nome": "jose" 
    },
    {
      "latitude": -28.697139,
      "longitude": -49.406634,
      "nome": "daniek jesuis" 
    }
   
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
          <Marker key={index} title="Perdido" description='animais perdidos nessa regiao'
           coordinate={item} onPress={() => navigation.navigate('DetalheAnimal', animaisPerdidos[index])} />
        ))}

        {animaisDoaçao.map((item, index) => (
          <Marker key={index} title="Adoçao" description='animais para Adoçao nessa regiao' 
          coordinate={item} pinColor="blue" onPress={() => navigation.navigate('DetalheAnimal', animaisDoaçao[index])}/>
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