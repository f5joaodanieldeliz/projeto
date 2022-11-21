import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView } from 'react-native';
import FundoPerfil from '../assets/FundoPerfil.png'

export default function Perfil({navigation}) {
  return (
<ScrollView>
<View style={styles.container}>

  <Image 
    style={styles.logo}
    source={FundoPerfil}
  />

  <View style={styles.containerTex}>
    <Text style={styles.innerTitle}>
        Nome:
      </Text>
    <Text style={styles.innerTitle}>
        Idade:
      </Text>
    <Text style={styles.innerTitle}>
        Cidade:
      </Text>
      <Text style={styles.innerTitle}>
        Estado:
      </Text>
      <Text style={styles.innerTitle}>
        Telefone:
      </Text>
      <Text style={styles.innerTitle}>
        Email:
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
  <TouchableOpacity style={styles.button}>
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