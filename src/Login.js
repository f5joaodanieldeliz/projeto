import React from 'react';
import { StyleSheet, Text ,View, TextInput, TouchableOpacity, Image } from 'react-native';
import logo from '../assets/Logo.png'

export default function Login({navigation}) {
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
      <TextInput
        style={styles.input}
       placeholder="Email" 
      />
      <TextInput
        style={styles.input}
        placeholder="senhar" 
      />
      <Text style={styles.innerText} onPress={() => navigation.navigate('CriaConta')}>
        nao tem conta ? cadastre-se
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
      <Text>logar</Text>
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
    fontSize:13,
    textAlign: 'center'
  },
  innerTitel: {
    color: 'black',
    fontSize:30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#5cc6ba",
    padding: 10,
    borderRadius:7,
    marginTop:10,
  },
  logo: {
    height:110,
    width:130,
    marginTop:30,
    
    
  },
 
});
