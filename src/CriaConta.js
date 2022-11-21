import React, { useState } from 'react';
import { StyleSheet, Text,View,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import {cadastrarUsuario} from './Database/AnimaisPerdidos'


export default function CriaConta({navigation}) {
  const [nome, onChangeText] = useState('');
  const [idade, onChangeText8] = useState('');
  const [Telefone, onChangeText9] = useState('');
  const [Eamil, onChangeText2] = useState('');
  const [senha, onChangeText3] = useState('');
  const [condirmarSenha, onChangeText4] = useState('');
  const [cpf, onChangeText5] = useState('');
  const [estado, onChangeText6] = useState('');
  const [cidade, onChangeText7] = useState('');
 

  return (
  <ScrollView>
    <View style={styles.container}>
  
    <View style={styles.top}>
    <Text style={styles.innerText}>
        prencha os dados para criar a sua conta
      </Text> 
    </View>

      <View style={styles.containerTex}>      
      <TextInput
      onChangeText={onChangeText}
      value={nome}
        style={styles.input}
       placeholder="user name" 
      />

      <TextInput
       onChangeText={onChangeText8}
       value={idade}
        style={styles.input}
        placeholder="idade" 
      />

      <TextInput
      onChangeText={onChangeText2}
      value={Eamil}
        style={styles.input}
       placeholder="Eamil" 
      />

      <TextInput
      onChangeText={onChangeText3}
      value={senha}
        style={styles.input}
       placeholder="senha" 
      />

      <TextInput
      onChangeText={onChangeText4}
      value={condirmarSenha}
        style={styles.input}
        placeholder="condirmar senha" 
      />

      <TextInput
       onChangeText={onChangeText5}
       value={cpf}
        style={styles.input}
        placeholder="cpf" 
      />

       <TextInput
       onChangeText={onChangeText6}
       value={estado}
        style={styles.input}
        placeholder="estado" 
      />

      <TextInput
       onChangeText={onChangeText7}
       value={cidade}
        style={styles.input}
        placeholder="cidade" 
      />
      <TextInput
       onChangeText={onChangeText9}
       value={Telefone}
        style={styles.input}
        placeholder="telefone" 
      />
      

      <View style={styles.contrape}>
      
      </View>
     

      <TouchableOpacity disabled={!nome || !idade ||  !Eamil || !senha || !condirmarSenha || !cpf || !estado || !cidade || !Telefone   }
       style={ !nome || !idade ||  !Eamil || !senha || !condirmarSenha || !cpf || !estado || !cidade || !Telefone  ? styles.buttonDisable : styles.buttonEnable}
      onPress={() =>{
        usuario = {
          "usuario": {
            "nome" : nome,
            "idade" : idade,
            "telefone" : Telefone,
            "Email": Eamil,
            "senha": senha,
            "condirmar senha": condirmarSenha,
            "cpf" : cpf,
            "estado" : estado,
            "cidade" : cidade,
          }
        }
        cadastrarUsuario('1667617200000',usuario, nome)}} 
      
       >
        

      <Text>Posta</Text>
      </TouchableOpacity>

      <View style={styles.contrape}>
      
      </View>

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
    flex: 1,
    backgroundColor: 'white',
  },
  innerText: {
    color: 'black',
    fontSize:20,
  },
  innerTitel: {
    color: 'black',
    fontSize:30,
  },
  input: {
    height: 40,
    width: 250,
    borderWidth: 1,
    padding: 10,
    marginTop:25,
  },
  buttonEnable: {
    alignItems: "center",
    backgroundColor: "#5cc6ba",
    padding: 10,
    borderRadius:7,
    marginTop:5,
  },
  buttonDisable: {
    alignItems: "center",
    backgroundColor: "gray",
    padding: 10,
    borderRadius:7,
    marginTop:0,
  },
  logo: {
    height:110,
    width:130,
    marginTop:50,
  },
  label: {
    margin: 8,
    fontSize:13,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  top: {
    height: '7%',
  },

  contrape:{
    height: 30,}

});
