import React from "react";
import { Text ,Touchable,TouchableHighlight,View} from 'react-native';
import { HomeProps } from "../type/type_root_stack_param_list";
import { gbs } from "../utils/import/import_options";

const HomeScreen = ({navigation, route}: HomeProps) => {
  return (  
     <View style={[gbs.center, {flex: 1}]} > 
         <Text style= {[gbs.head5Tri]}>Home Screen</Text>
         <TouchableHighlight onPress={() => {navigation.navigate("Main")}}>
             <Text style= {[]}>Send</Text>
         </TouchableHighlight>
    </View>
  );
}

export default HomeScreen;



