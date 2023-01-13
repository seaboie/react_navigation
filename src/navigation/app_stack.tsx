import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from 'react-native';
import HomeScreen from "../screens/app/home_screen";
import { AppStackParamList } from "../type/type_root_stack_param_list";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Drawer = createDrawerNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default AppStack;



