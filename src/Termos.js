import React, { useState } from "react";
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Termos({navigation}) {
        const [isSelected, setSelection] = useState(false);


  return (
    <View style={styles.container}>
        <Text style={styles.innerText}>Leia os termos de uso do nosso aplicativo e no final preencha a caixinha </Text>
        <View style={styles.containerTex}>      
          <Text>termos de uso</Text>
            <View style={styles.checkboxContainer}>
                <BouncyCheckbox
                    value={isSelected}
                    onPress={() => setSelection(!isSelected)}
                    isChecked={isSelected}
                    style={styles.checkbox}
                    />
                <Text style={styles.label}>aceito </Text>
            </View>

            <TouchableOpacity style={ !isSelected ? styles.buttonDisable : styles.buttonEnable } disabled={!isSelected}
            onPress= {() => navigation.navigate("CriaConta")}
            >
                <Text>Lido</Text>
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
    marginTop:30,

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
    marginTop:30,
    
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    fontSize:13,
  },

 
});
