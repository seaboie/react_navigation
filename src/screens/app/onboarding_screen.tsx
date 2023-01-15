import React from "react";
import { Button, Text ,View} from 'react-native';
import { gbs } from "../../utils/import/import_options";

const OnboardingScreen = () => {
  return (  
     <View style={[gbs.center, {flex: 1}]} > 
       <Text style= {[]}>Onboarding Screen</Text>
       <Button title="Click Me" onPress={() => {}} />
    </View>
  );
}

export default OnboardingScreen;



