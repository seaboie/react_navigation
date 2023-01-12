import React from "react";
import { Text ,View} from 'react-native';
import { gbs } from "../utils/import/import_options";

const HomeScreen = () => {
  return (  
     <View style={[gbs.center]} > 
         <Text style= {[gbs.head5Tri]}>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;



