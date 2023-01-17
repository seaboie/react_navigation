import React from "react";
import { Text ,View} from 'react-native';
import { gbs } from "../utils/import/import_options";

const ContactScreen = () => {
  return (  
     <View style={[gbs.center, {flex: 1}]} > 
       <Text style= {[{fontSize: 90}]}>Contact</Text>
    </View>
  );
}

export default ContactScreen;



