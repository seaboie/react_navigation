import React from "react";
import { Alert, Button, Text ,View} from 'react-native';
import { gbs } from "../../utils/import/import_options";

const LoginScreen = () => {
  return (  
     <View style={[gbs.center, {flex: 1}]} > 
       <Text style= {[]}>Login Screen</Text>
       <Button title="Show Alert" onPress={() => {Alert.alert("Button was Clickedddd")}} />
    </View>
  );
}

export default LoginScreen;



