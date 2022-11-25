import React, { useState, useEffect } from 'react';
import { StyleSheet, Text ,View, TextInput, TouchableOpacity, Image } from 'react-native';
import logo from '../assets/Logo.png'
import { getDatabase, ref, onValue } from 'firebase/database';
import * as SecureStore from 'expo-secure-store';



export default function Login({navigation}) {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [resultU, setResultD] = useState([]);
  
  const usuarios = () => { 
    const db = getDatabase();
    const reference = ref(db, 'usuario');
    onValue(reference, (snapshot) => { 
      const usuario = snapshot.val();
      console.log((usuario));
      setResultD((usuario));
    });
  };

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

   useEffect(() => {
    usuarios();
  }, []);



   function autenticacao (username, password) {
     if ( username in resultU) {
       let  usernameResult = resultU[username];
      if(password === usernameResult.usuario.senha){
        save('user', username);
        navigation.navigate('Home');
      }  
     };
   };
  
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
      onChangeText={setUsuario}
        style={styles.input}
       placeholder="usuario" 
       value={usuario}
      />

      <TextInput
      onChangeText={setSenha}
        style={styles.input}
        placeholder="senhar" 
        value={senha}
      />
      <Text style={styles.innerText} onPress={() => navigation.navigate('CriaConta')}>
        Nao possui conta? Cadastre-se
      </Text>

      <TouchableOpacity style={styles.button} 
      onPress={() => autenticacao(usuario,senha)}>
      <Text>Logar</Text>
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
