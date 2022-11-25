import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native';
import FundoPerfil from '../assets/FundoPerfil.png';
import * as SecureStore from 'expo-secure-store';
import { getDatabase, ref, onValue } from 'firebase/database';

export default function Perfil({navigation}) {

  const [user, setUser] = useState(null);
  const [usuarioLogado, setUsuarioLogado] = useState([]);
 
  async function getUser() {
    let result = await SecureStore.getItemAsync('user');
    setUser(result);
  }

  const Logout = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  }

  const usuarios = () => { 
    const db = getDatabase();
    const reference = ref(db, 'usuario');
    onValue(reference, (snapshot) => { 
      const usuario = snapshot.val();
      console.log((usuario[user]));
      setUsuarioLogado((usuario[user]));
    });
  };

  useEffect(() => {
      getUser();
      usuarios();
  }, [user]);


  return (
<ScrollView>
<View style={styles.container}>

  <Image 
    style={styles.logo}
    source={FundoPerfil}
  />

  <View style={styles.containerTex}>
    <Text style={styles.innerTitle}>
        Nome: {usuarioLogado && usuarioLogado.usuario && usuarioLogado.usuario.nome}
      </Text>
    <Text style={styles.innerTitle}>
        Idade: {usuarioLogado && usuarioLogado.usuario && usuarioLogado.usuario.idade}
      </Text>
    <Text style={styles.innerTitle}>
        Cidade: {usuarioLogado && usuarioLogado.usuario && usuarioLogado.usuario.cidade}
      </Text>
      <Text style={styles.innerTitle}>
        Estado: {usuarioLogado && usuarioLogado.usuario && usuarioLogado.usuario.estado}
      </Text>
      <Text style={styles.innerTitle}>
        Telefone: {usuarioLogado && usuarioLogado.usuario && usuarioLogado.usuario.telefone}
      </Text>
      <Text style={styles.innerTitle}>
        Email: {usuarioLogado && usuarioLogado.usuario && usuarioLogado.usuario.Email}
      </Text>
  </View>

  <View style={styles.editar}>
  <Text style={styles.innerTitleEdit}>
    Perdidos:
  </Text>
  <Image 
    style={styles.logoEdit}
    source={FundoPerfil}
  />
  <Text style={styles.innerTitleEdit}>
    Descrição:
  </Text>
  <TouchableOpacity style={styles.button}>
    <Text>editar</Text>
  </TouchableOpacity>
  </View>

  <View style={styles.editar}>
  <Text style={styles.innerTitleEdit}>
    Doação:
  </Text>

  <Image 
    style={styles.logoEdit}
    source={FundoPerfil}
  />
  <Text style={styles.innerTitleEdit}>
    Descrição:
  </Text>
  <TouchableOpacity style={styles.button} onPress={() => Logout()}>
    <Text>editar</Text>
  </TouchableOpacity>
  </View>
</View> 
</ScrollView>
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
  marginTop: 15,
  width: '90%',
  height: '30%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  },

innerTitle: {
  color: 'black',
  fontSize:15,
  fontWeight: 'bold',
  marginTop: 30,
},
innerTitleEdit: {
  color: 'black',
  fontSize:15,
  fontWeight: 'bold',
},

input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
},
logo: {
  height:100,
  width:100, 
  borderRadius:100,
  marginTop: 30,
},
logoEdit: {
  height:60,
  width:60, 
  borderRadius:100,
},
editar:{
  borderWidth:1,
  marginTop: 30,
  width:350,
},
button: {
  alignItems: "center",
  backgroundColor: "#5cc6ba",
  padding: 10,
  borderRadius:7,
  marginTop:10,
},

});