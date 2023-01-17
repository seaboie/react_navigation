import React from "react";
import { Text ,TouchableOpacity,View} from 'react-native';
import { gbs, sc } from "../utils/import/import_options";

const DetailScreen = () => {
  return (  
     <View style={[gbs.center, {flex: 1}]} > 
       <Text style= {[{fontSize: 90}]}>Detail</Text>
       
    </View>
  );
}

export default DetailScreen;



