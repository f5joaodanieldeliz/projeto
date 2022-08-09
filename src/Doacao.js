
import React, { useState } from "react";
import { StyleSheet, Text, View,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";


export default function Doacao({navigation}) {
const [isSelected, setSelection] = useState(false);
const [text, onChangeText] = useState('');
const [text2, onChangeText2] = useState('');
const [text3, onChangeText3] = useState('');
const [text4, onChangeText4] = useState('');
const [text5, onChangeText5] = useState('');
const [text6, onChangeText6] = useState('');
const [text7, onChangeText7] = useState('');
const [text8, onChangeText8] = useState('');
  return (
  <ScrollView>
    <View style={styles.container}>
     
      <Text style={styles.innerText}>
      coloque as características dos animais que deseja botar para adoçao
      </Text>

      <View style={styles.containerTex}>      
      <TextInput
      onChangeText={onChangeText}
      value={text}
        style={styles.input}
       placeholder="foto do animal" 
      />

      <TextInput
      onChangeText={onChangeText2}
      value={text2}
        style={styles.input}
       placeholder="Animal" 
      />

      <TextInput
      onChangeText={onChangeText3}
      value={text3}
        style={styles.input}
       placeholder="Raca" 
      />

      <TextInput
      onChangeText={onChangeText4}
      value={text4}
        style={styles.input}
        placeholder="Idade (visivel)" 
      />

      <TextInput
       onChangeText={onChangeText5}
       value={text5}
        style={styles.input}
        placeholder="Sexo (F/M)" 
      />

       <TextInput
       onChangeText={onChangeText6}
       value={text6}
        style={styles.input}
        placeholder="porte" 
      />

      <TextInput
       onChangeText={onChangeText7}
       value={text7}
        style={styles.input}
        placeholder="Pelagem" 
      />

      <TextInput
      onChangeText={onChangeText8}
      value={text8}
        style={styles.input}
        placeholder="Caracteristica" 
      />

      <View style={styles.checkboxContainer}>
            <BouncyCheckbox
              value={isSelected}
              onValueChange={setSelection}
               style={styles.checkbox}/>
              <Text style={styles.label}>
              voce esta com o animal
              </Text>
       </View>



      <TouchableOpacity disabled={!text || !text2 || !text3 || !text4 || !text5 || !text6 || !text7 || !text8 } style={ !text || !text2 || !text3 || !text4 || !text5 || !text6 || !text7 || !text8  ? styles.buttonDisable : styles.buttonEnable}>
      <Text>Posta</Text>
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
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',


  },
  innerText: {
    color: 'black',
    fontSize:15,
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
    marginTop:25,
  },
  buttonEnable: {
    alignItems: "center",
    backgroundColor: "#5cc6ba",
    padding: 10,
    borderRadius:7,
    marginTop:50,
    width: 200,
  },
  buttonDisable: {
    alignItems: "center",
    backgroundColor: "gray",
    padding: 10,
    borderRadius:7,
    marginTop:50,
    width: 200,
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
  
 
});