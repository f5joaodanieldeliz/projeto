import React, { useState } from 'react';
import { StyleSheet, Text,View,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import {cadastrarUsuario} from './Database/AnimaisPerdidos'
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
  const [checkboxState, setCheckboxState] = React.useState(false);

  return (
  <ScrollView>
    <View style={styles.container}>
  
    <View style={styles.top}>
    <Text style={styles.innerText}>
        Prencha os dados para criar a sua conta
      </Text> 
    </View>

      <View style={styles.containerTex}>      
      <TextInput
      onChangeText={onChangeText}
      value={nome}
        style={styles.input}
       placeholder="Username" 
      />

      <TextInput
       onChangeText={onChangeText8}
       value={idade}
        style={styles.input}
        placeholder="Idade" 
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
       placeholder="Senha" 
      />

      <TextInput
      onChangeText={onChangeText4}
      value={condirmarSenha}
        style={styles.input}
        placeholder="Confirmar senha" 
      />

      <TextInput
       onChangeText={onChangeText5}
       value={cpf}
        style={styles.input}
        placeholder="CPF" 
      />

       <TextInput
       onChangeText={onChangeText6}
       value={estado}
        style={styles.input}
        placeholder="Estado" 
      />

      <TextInput
       onChangeText={onChangeText7}
       value={cidade}
        style={styles.input}
        placeholder="Cidade" 
      />
      <TextInput
       onChangeText={onChangeText9}
       value={Telefone}
        style={styles.input}
        placeholder="Telefone" 
      />

<View style={styles.checkboxContainer}>
                <BouncyCheckbox
                    isChecked={checkboxState}
                    onPress={() => setCheckboxState(!checkboxState)}
                    style={styles.checkbox}
                    />
                <Text style={styles.label} onPress={() => navigation.navigate("Termos")}>
                  Clique aqui para ver os termos de uso 
                </Text>
            </View>
      

      <View style={styles.contrape}>
      
      </View>
     

      <TouchableOpacity disabled={!nome || !idade ||  !Eamil || !senha || !condirmarSenha || !cpf || !estado || !cidade || !Telefone || !checkboxState   }
       style={ !nome || !idade ||  !Eamil || !senha || !condirmarSenha || !cpf || !estado || !cidade || !Telefone || !checkboxState  ? styles.buttonDisable : styles.buttonEnable}
      onPress={() =>{
        usuario = {
          "usuario": {
            "nome" : nome,
            "idade" : idade,
            "telefone" : Telefone,
            "Email": Eamil,
            "senha": senha,
            "cpf" : cpf,
            "estado" : estado,
            "cidade" : cidade,
          }
        }
        cadastrarUsuario('1667617200000',usuario, nome)
        navigation.navigate("Login")
      }}
       >
        

      <Text>Salvar</Text>
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
