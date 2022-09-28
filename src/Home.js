import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import logo from '../assets/Logo.png'

export default function Home({ navigation }) {
  const animaisPerdidos = [
    {
      "latitude": -28.701556,
      "longitude": -49.405889,
      "nome": "joao"
    },
    {
      "latitude": -28.699174,
      "longitude": -49.408318,
      "nome": "daniel" 
    }
  ];
  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={logo}
      />
      <Text style={styles.innerTitel}>
        Petsiu
      </Text>

      <View style={styles.containerTex}>   

        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('PostarAnimal')}>
          <Text>Postar animal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DetalheAnimal', animaisPerdidos)}>
          <Text>Adotar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress = {() => navigation.navigate('Doacao')}>
          <Text>para adoção</Text>
        </TouchableOpacity>
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
    flex: 1,
    backgroundColor: 'white',
  },

  innerText: {
    color: 'black',
    fontSize:15,
  },

  innerTitel: {
    color: 'black',
    fontSize:30,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#f1f5f4",
    padding: 10,
    marginTop: 30,
    borderRadius: 7,
  },

  logo: {
    height: 110,
    width: 130,
    marginTop: 30,   
  },
 
});
