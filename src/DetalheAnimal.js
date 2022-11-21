import React, {useEffect} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import FundoPerfil from '../assets/FundoPerfil.png'

export default function DetalheAnimal({navigation,route}) {
  return (
<View style={styles.container}>
  <Image 
    style={styles.logo}
    source={FundoPerfil}
  />

  <View style={styles.containerTex}>
    <Text style={styles.innerTitle}>

        Animal:{route.params?.user.nome} 
      </Text>

    <Text style={styles.innerTitle}>
        Raca:{route.params?.animal.raca} 
      </Text>

      <Text style={styles.innerTitle}>
        Idade:{route.params?.animal.idade} 
      </Text>

      <Text style={styles.innerTitle}>
        Sexo:{route.params?.animal.sexo} 
      </Text>

    <Text style={styles.innerTitle}>
        Porte:{route.params?.animal.porte} 
      </Text>

      <Text style={styles.innerTitle}>
        Pelagem:{route.params?.animal.pelagem} 
      </Text>

    <Text style={styles.innerTitle}>
        Posse do animal:{route.params?.posse} 
      </Text>
      
    <Text style={styles.innerTitle}>
         Caracteristica:{route.params?.animal.caracteristica} 
      </Text>
  </View>
</View> 
);
}

const styles = StyleSheet.create({

container: {
flex: 1,
backgroundColor: 'white',
alignItems: 'center',

},

containerTex: {
backgroundColor: 'white',
marginTop: 30,
borderWidth: 3,
width:350,
},

innerTitle: {
  color: 'black',
  fontSize:15,
  fontWeight: 'bold',
  marginTop: 30,
},

input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
},
logo: {
  height:130,
  width:350, 
  borderRadius:30,
  marginTop: 30,
},

});