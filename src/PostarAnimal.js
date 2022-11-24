import React, { useState,useEffect } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { StyleSheet, Text,View,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import {cadastrarAnimalPerdido} from './Database/AnimaisPerdidos';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';


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
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);
  


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const minhaLocalizacao = () => {
      if(location.coords.latitude != null && location.coords.longitude != null){
        onChangeText10(location.coords.latitude);
        onChangeText11(location.coords.longitude);
        console.log(latitude);
        console.log(longitude);
      };
  };

  return (
  <ScrollView>
    <View style={styles.container}>

      <View style={styles.top}>
      <Text style={styles.innerText}>
        preencha com os dados do animal que esteja procurando
      </Text> 
      </View>

      <View style={styles.containerTex}> 
           
    <TouchableOpacity style={styles.buttonEnable} onPress={minhaLocalizacao} >
    
      <Text>escolher imagem </Text>

    </TouchableOpacity>


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

      <TouchableOpacity style={styles.buttonlocal} onPress={minhaLocalizacao}>
      <Text>pegar a sua localização </Text>
      </TouchableOpacity>

      

      <Text style={styles.containerTex}>caso nao esteja na localização, digite </Text>
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
              "caracteristica": Caracteristica,
            },
            "localizacao": {
              "latitude": parseFloat(latitude),
              "longitude": parseFloat(longitude),
            },
            "posse": !posse ? "nao" : "sim",
            "status": !status ? "perdido" : "encontrado",
          }
          cadastrarAnimalPerdido('1667617200000', animalPerdido)
          navigation.navigate("Procurar")
        }
        }
        >
      <Text>Postar</Text>
      </TouchableOpacity>
      
      <View style={styles.contrape}></View>
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
    marginTop: 10,
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
    height: 30,
  },
  buttonlocal: {
    alignItems: "center",
    backgroundColor: "#5cc6ba",
    padding: 10,
    borderRadius:7,
    marginTop:25,
  },

 
});
