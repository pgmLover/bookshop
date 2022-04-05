import React  from "react";
import { View, Text, Button, TouchableHighlight } from "react-native";

export default function Home  (){
  return(
      <View>
          <TouchableHighlight  onPress={()=>this.props.navigation.navigate("Cart")}>
              <Text style={{fontSize:24}}>TOUCH ME</Text>
          </TouchableHighlight>
          <Text >Home Page</Text>
      </View>
  )
}
