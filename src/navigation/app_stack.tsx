import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from 'react-native';
import HomeScreen from "../screens/app/home_screen";
import { AppStackParamList } from "../type/type_root_stack_param_list";
import { createDrawerNavigator, useDrawerStatus } from "@react-navigation/drawer";
import ProfileScreen from "../screens/app/profile_screen";
import MessageScreen from "../screens/app/message_screen";
import MonentScreen from "../screens/app/monent_screen";
import SettingScreen from "../screens/app/setting_screen";
import CustomDrawer from "../screens/components/custom_drawer";
import { ChatBoxIcon, HomeIcon, MomentIcon, PersonIcon, SettingIcon } from "../utils/import/import_example";
import { sc } from "../utils/import/import_options";


const Drawer = createDrawerNavigator<AppStackParamList>();

const AppStack = () => {

  return (
    <Drawer.Navigator 
      drawerContent={(props) => <CustomDrawer {...props} />} 
      screenOptions={{ 
          headerShown: false, 
          drawerLabelStyle: {marginLeft: -sc.body, fontSize: sc.body, fontFamily: "Trirong-MediumItalic"},
          drawerActiveBackgroundColor: "#AA18EA",
          drawerHideStatusBarOnOpen: true,
          drawerActiveTintColor: "#fff",
        }} >
      <Drawer.Screen name="Home" component={HomeScreen} options={{
        drawerIcon: ({color}) => (
          <HomeIcon height={"100%"} width={"10%"} fill={color}/>
        ),
      }} />
      <Drawer.Screen name="Profile" component={ProfileScreen} options={{
        drawerIcon: ({color}) => (
            <PersonIcon height={"100%"} width={"10%"} fill={color}/> 
        ),
      }} />
      <Drawer.Screen name="Message" component={MessageScreen} options={{
        drawerIcon: ({color}) => (
          <ChatBoxIcon height={"100%"} width={"10%"} fill={color} />
        ),
      }} />
      <Drawer.Screen name="Moment" component={MonentScreen} options={{
        drawerIcon: ({color}) => (
          <MomentIcon height={"100%"} width={"10%"} fill={color} />
        ),
      }} />
      <Drawer.Screen name="Setting" component={SettingScreen} options={{
        drawerIcon: ({color}) => (
          <SettingIcon height={"100%"} width={"10%"} fill={color} />
        )
      }} />
    </Drawer.Navigator>
  );
}

export default AppStack;



