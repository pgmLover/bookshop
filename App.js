import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/Home';
import Cart from './src/Cart';


const Stack =createStackNavigator()

function MyStack(){
  return(
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{headerShown:false}}/>

    <Stack.Screen
    name="Cart"
    component={Cart}
    options={{headerShown:false}}
    />
  </Stack.Navigator>
  )}

export default function App(){
  return(
<NavigationContainer>
  <MyStack/>
</NavigationContainer>
  )
}