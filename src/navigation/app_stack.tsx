import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from 'react-native';
import HomeScreen from "../screens/app/home_screen";
import { AppStackParamList } from "../type/type_root_stack_param_list";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../screens/app/profile_screen";
import MessageScreen from "../screens/app/message_screen";
import MonentScreen from "../screens/app/monent_screen";
import SettingScreen from "../screens/app/setting_screen";


const Drawer = createDrawerNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Message" component={MessageScreen} />
      <Drawer.Screen name="Moment" component={MonentScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
}

export default AppStack;



