import React, { useState } from "react";
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";


export default function CriaConta({navigation}) {
  const [isSelected, setSelection] = useState(false);
  const [text, onChangeText,] = useState('');
  const [text2, onChangeText2,] = useState('');
  const [text3, onChangeText3,] = useState('');
  const [text4, onChangeText4,] = useState('');
  const [text5, onChangeText5,] = useState('');
  const [text6, onChangeText6,] = useState('');
  const [text7, onChangeText7,] = useState('');
  const [text8, onChangeText8,] = useState('');
  

  return (
    <View style={styles.container}>
        <Text style={styles.innerText}>
        preencha com os dados para criar a conta
        </Text>
        <View style={styles.containerTex}>  

            <TextInput 
            onChangeText={onChangeText}
            value={text}
                style={styles.input}
            placeholder="Nome" 
            />
            <TextInput
             onChangeText={onChangeText2} 
             value={text2}
                style={styles.input}
            placeholder="Senha" 
            />
            <TextInput
            onChangeText={onChangeText3} 
            value={text3}
                style={styles.input}
                placeholder="Confirmar senha" 
            />
            <TextInput
            onChangeText={onChangeText4} 
            value={text4}
                style={styles.input}
                placeholder="Email" 
            />
            <TextInput
            onChangeText={onChangeText5} 
            value={text5}
                style={styles.input}
                placeholder="Cidade" 
            />
            <TextInput
            onChangeText={onChangeText6} 
            value={text6}
                style={styles.input}
                placeholder="Estado" 
            />
            <TextInput
            onChangeText={onChangeText7} 
            value={text7}
                style={styles.input}
                placeholder="Telefone" 
            />
            <TextInput
            onChangeText={onChangeText8} 
            value={text8}
                style={styles.input}
                placeholder="CPF" 
            />
            <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    />
                <Text style={styles.label} onPress={() => navigation.navigate("Termos")}>
                  clique aqui para ver o contrato e confirme com os termos de uso 
                </Text>
            </View>

            <TouchableOpacity disabled={!isSelected || !text || text2 != text3 || !text4 || !text5 || !text6 || !text7 || !text8 }  style={ !isSelected || !text || text2 != text3 || !text4 || !text5 || !text6 || !text7 || !text8  ? styles.buttonDisable : styles.buttonEnable }>
                <Text>criar</Text>
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
  containerBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop:15,
  },
  buttonEnable: {
    alignItems: "center",
    backgroundColor: "#5cc6ba",
    padding: 10,
    borderRadius:7,
    marginTop:50,
  },
  buttonDisable: {
    alignItems: "center",
    backgroundColor: "gray",
    padding: 10,
    borderRadius:7,
    marginTop:50,
  },
  logo: {
    height:110,
    width:130,
    marginTop:50,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    fontSize:13,
  },

 
});
