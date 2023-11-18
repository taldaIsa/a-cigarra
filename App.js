import  React,{Component} from "react" ;
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import Login from "./telas/login"
import Novaconta from "./telas/novaconta"
import Compras from "./telas/compras"
import Dados from "./telas/dados"
import Pagamento from "./telas/pagamento"
import Conclusao from "./telas/conclusao"
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions = {{headerShown:false}}>
    <Stack.Screen name = "login" component = {Login}
    ></Stack.Screen>
    <Stack.Screen name = "novaconta" component = {Novaconta}
    ></Stack.Screen>
    <Stack.Screen name = "compras" component = {Compras}
    ></Stack.Screen>
    <Stack.Screen name = "dados" component = {Dados}
    ></Stack.Screen>
    <Stack.Screen name = "pagamento" component = {Pagamento}
    ></Stack.Screen>
    <Stack.Screen name = "conclusao" component = {Conclusao}
    ></Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
