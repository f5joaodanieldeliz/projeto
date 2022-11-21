import React, { useState } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { StyleSheet, Text,View,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import {cadastrarAnimalPerdido} from './Database/AnimaisPerdidos'


export default function PostarAnimal({navigation}) {
  const [posse, setSelection] = useState(false);
  const [apelido, onChangeText] = useState('');
  const [animal, onChangeText2] = useState('');
  const [raca, onChangeText3] = useState('');
  const [idade, onChangeText4] = useState('');
  const [sexo, onChangeText5] = useState('');
  const [porte, onChangeText6] = useState('');
  const [Pelagem, onChangeText7] = useState('');
  const [Caracteristica, onChangeText8] = useState('');
  const [status, setSelection2] = useState(false);
  const [latitude, onChangeText10] = useState('');
  const [longitude, onChangeText11] = useState('');

  return (
  <ScrollView>
    <View style={styles.container}>

      <View style={styles.top}>
      <Text style={styles.innerText}>
        preencha com os dados do animal que esteja procurando
      </Text> 
      </View>

      <View style={styles.containerTex}> 
           
      <TextInput
      onChangeText={onChangeText}
      value={apelido}
        style={styles.input}
       placeholder="apelido" 
      />

      <TextInput
      onChangeText={onChangeText2}
      value={animal}
        style={styles.input}
       placeholder="Animal" 
      />

      <TextInput
      onChangeText={onChangeText3}
      value={raca}
        style={styles.input}
       placeholder="Raça" 
      />

      <TextInput
      onChangeText={onChangeText4}
      value={idade}
        style={styles.input}
        placeholder="Idade (visivel)" 
      />

      <TextInput
       onChangeText={onChangeText5}
       value={sexo}
        style={styles.input}
        placeholder="Sexo (F/M)" 
      />

       <TextInput
       onChangeText={onChangeText6}
       value={porte}
        style={styles.input}
        placeholder="porte" 
      />

      <TextInput
       onChangeText={onChangeText7}
       value={Pelagem}
        style={styles.input}
        placeholder="Pelagem" 
      />

      <TextInput
      onChangeText={onChangeText8}
      value={Caracteristica}
        style={styles.input}
        placeholder="Caracteristica" 
      />

      <TextInput
      onChangeText={onChangeText10}
      value={latitude}
        style={styles.input}
       placeholder="latitude da localização" 
      />

      <TextInput
      onChangeText={onChangeText11}
      value={longitude}
        style={styles.input}
       placeholder="longitude da localização" 
      />
      
      <View style={styles.checkboxContainer}>
            <BouncyCheckbox
                value={posse}
                onPress={() => setSelection(!posse)}
                isChecked={posse}
                style={styles.checkbox}
                />
              <Text style={styles.label}>
                voce esta com o animal
              </Text>
        </View>
       <View style={styles.checkboxContainer}>
             <BouncyCheckbox
                value={status}
                onPress={() => setSelection2(!status)}
                isChecked={status}
                style={styles.checkbox}
                />
              <Text style={styles.label}>
                ja foi encontrado
              </Text>
          </View>

      <View style={styles.botao}>
      <TouchableOpacity 
        disabled={!apelido || !animal || !raca || !idade || !sexo || !porte || !Pelagem || !Caracteristica } 
        style={ !apelido || !animal || !raca || !idade || !sexo || !porte || !Pelagem || !Caracteristica ? styles.buttonDisable : styles.buttonEnable}
        onPress={() => {
          animalPerdido = { 
            "user": {
              "nome": "luciano",
            },
            "animal":
            {
              "apelido": apelido,
              "raca": raca,
              "idade": idade,
              "sexo": sexo,
              "porte": porte,
              "pelagem": Pelagem,
              "caracteristica": Caracteristica
            },
            "localizacao": {
              "latitude": parseFloat(latitude),
              "longitude": parseFloat(longitude),
            },
            "posse": posse,
            "status": !status ? "perdido" : "encontrado",
          }
          cadastrarAnimalPerdido('1667617200000', animalPerdido)}
        }
        >
      <Text>Postar</Text>
      </TouchableOpacity>
      
      <View style={styles.contrape}>
      
      </View>
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
    marginTop:15,
  },
  buttonDisable: {
    alignItems: "center",
    backgroundColor: "gray",
    padding: 10,
    borderRadius:7,
    marginTop:15,
  },
  logo: {
    height:110,
    width:130,
    marginTop:5,
  },
  label: {
    margin: 8,
    fontSize:13,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 17,
  },
  checkbox: {
    alignSelf: "center",
  },
  top: {
    height: '7%',
  },
  botao:{
    marginTop: -20,
    height: '7%',
  },
  contrape:{
    height: 30,}
 
});
