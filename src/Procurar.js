import { StyleSheet, Dimensions, View, RefreshControlBase } from 'react-native';
import {useState,useEffect} from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';
import { getDatabase, ref, onValue } from 'firebase/database';

export default function Procurar({navigation}) {

  const [region, setRegion] = useState(null);
  const [resultP, setResultA] = useState([]);
  const [resultD, setResultD] = useState([]);
 

  const animaisPerdidos = () => { 
    const db = getDatabase();
    const reference = ref(db, 'animaisPerdidos');
    onValue(reference, (snapshot) => { 
      const animaisPerdidos = snapshot.val();
      console.log(Object.values(animaisPerdidos));
      setResultA(Object.values(animaisPerdidos));
    });
  };

  const animaisDoacao = () => { 
    const db = getDatabase();
    const reference = ref(db, 'animaisDoacao');
    onValue(reference, (snapshot) => { 
      const animaisDoacao = snapshot.val();
      console.log(Object.values(animaisDoacao));
      setResultD(Object.values(animaisDoacao));
    });
  };

  /*[
    {
      "user": {
        "nome": "luciano",
      },
      "animal":
      {
        "apelido": "apelido",
        "raca": "pitbull",
        "idade": 2,
        "sexo": "masculino",
        "porte": "medio",
        "pelagem": "lisa",
        "caracteristica": "sem perna"
      },
      "localizacao": {
        "latitude": -28.701556,
        "longitude": -49.405889,
      },
      "posse": "nao",
      "status": "perdido",
    },
    {
      "localizacao": {
        "latitude": -28.699174,
        "longitude": -49.408318,
      },
      "user": {
        "nome": "daniel" 
      }
    },
    {
      "localizacao": {
        "latitude": -28.6934174,
        "longitude": -49.408318,
      },
      "user": {
        "nome": "daniek jesuis" 
      }
    }
    
  ];
    */

   /*const animaisDoaçao = [
    {
      "user": {
        "nome": "luciano",
      },
      "animal":
      {
        "apelido": "BOB",
        "raca": "pitbull",
        "idade": 2,
        "sexo": "masculino",
        "porte": "medio",
        "pelagem": "lisa",
        "caracteristica": "sem perna"
      },
      "localizacao": {
        "latitude": -28.699974,
        "longitude": -49.402053,
      },
      "posse": "nao",
      "status": "disponivel",
    },

    {
      "user": {
        "nome": "luciano",
      },

      "animal":
      {
        "apelido": "BOB",
        "raca": "pitbull",
        "idade": 2,
        "sexo": "masculino",
        "porte": "medio",
        "pelagem": "lisa",
        "caracteristica": "sem perna"
      },

      "localizacao": {
        "latitude": -28.696174,
        "longitude":-49.408318,
      },

      "posse": "nao",
      "status": "disponivel",

    },

    {
      "localizacao": {
        "latitude": -28.697139,
        "longitude": -49.406634,
      },
      "user": {
        "nome": "daniek jesuis" 
      }
    }
   
  ];*/

  useEffect(() => {
    animaisPerdidos();
    animaisDoacao();
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
        
        

        {
          resultP?.map((item, index) => (
            <Marker key={index} title="Perdido" description='DanimaisDoacao perdidos nessa regiao'
            coordinate={item.localizacao} onPress={() => {
              navigation.navigate('DetalheAnimal', resultP[index])
            } } />
          ))
        }

        {
          resultD?.map((item, index) => (
            <Marker key={index} title="Adoçao" description='animais para Adoçao nessa regiao' 
            coordinate={item.localizacao} 
            pinColor="blue" 
            onPress={() => navigation.navigate('DetalheAnimal', resultD[index]
            )}/>
          ))
        }

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