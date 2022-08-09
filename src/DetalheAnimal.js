import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import FundoPerfil from '../assets/FundoPerfil.png'

export default function DetalheAnimal({navigation}) {
  return (
<View style={styles.container}>

  <Image 
    style={styles.logo}
    source={FundoPerfil}
  />

  <View style={styles.containerTex}>
    <Text style={styles.innerTitle}>
        Animal:
      </Text>
    <Text style={styles.innerTitle}>
        Raca:
      </Text>
      <Text style={styles.innerTitle}>
        Idade:
      </Text>
      <Text style={styles.innerTitle}>
        Sexo:
      </Text>
    <Text style={styles.innerTitle}>
        Porte:
      </Text>
      <Text style={styles.innerTitle}>
        Pelagem:
      </Text>
    <Text style={styles.innerTitle}>
        Posse do animal:
      </Text>
    <Text style={styles.innerTitle}>
         Caracteristica:
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
//alignItems: 'left',
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