import React from "react";
import { Alert, Button, Text ,View} from 'react-native';
import { gbs } from "../../utils/import/import_options";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context"

const LoginScreen = () => {

    const insets = useSafeAreaInsets();
  return (  
     <View style={[ {flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, backgroundColor: 'red'}]} > 
       <Text style= {[]}>Login Screen</Text>
       <Button title="Show Alert" onPress={() => {Alert.alert("Button was Clickedddd")}} />
    </View>
  );
}

export default LoginScreen;



