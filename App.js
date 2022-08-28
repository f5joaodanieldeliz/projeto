import {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';

import Login from './src/Login';
import Home from './src/Home';
import Perfil from './src/Perfil';
import Procurar from './src/Procurar';
import PostarAnimal from './src/PostarAnimal';
import CriaConta from './src/CriaConta';
import Doacao from './src/Doacao';
import Termos from './src/Termos';
import DetalheAnimal from './src/DetalheAnimal';

//import { Header } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs({navigation}){
  return (
    <Tab.Navigator
      tabBarOptions={{
      labelStyle: {fontSize: 14},
      style: {backgroundColor: '#3a3f44'},
      activeBackgroundColor: '#272b30',
      activeTintColor:'#fff',
    }}
  
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home';
        } else if (route.name === 'Perfil') {
          iconName = focused ? 'person-circle-sharp' : 'person-circle-sharp';
        }else if (route.name ==='Procurar'){
          iconName = focused ? 'search' : 'search';
        }
        return <Ionicons name={iconName} size={20} color={'black'} />
      }
    })}>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Procurar" component={Procurar}/>
      <Tab.Screen name="Perfil" component={Perfil}/>
    </Tab.Navigator>
  );
}
   

export default function App() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

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

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }}/>
        <Stack.Screen name="PostarAnimal" component={PostarAnimal}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="CriaConta" component={CriaConta}/>
        <Stack.Screen name="Doacao" component={Doacao}/>
        <Stack.Screen name="Termos" component={Termos}/>
        <Stack.Screen name='DetalheAnimal' component={DetalheAnimal}/>
      </Stack.Navigator> 
    </NavigationContainer> 
  );
}