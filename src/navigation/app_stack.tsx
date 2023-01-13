import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text ,View} from 'react-native';
import HomeScreen from "../screens/home_screen";
import { AppStackParamList } from "../type/type_root_stack_param_list";

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (  
     <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
     </Stack.Navigator>
  );
}

export default AppStack;



