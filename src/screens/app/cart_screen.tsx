import React from "react";
import { Text ,View} from 'react-native';
import { gbs } from "../../utils/import/import_options";

const CartScreen = () => {
  return (  
     <View style={[gbs.center, {flex: 1}]} > 
       <Text style= {[{fontSize: 90}]}>Cart</Text>
    </View>
  );
}

export default CartScreen;



