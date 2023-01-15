import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation/auth_stack";
import AppStack from "./src/navigation/app_stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList, RootStackParamList } from "./src/type/type_root_stack_param_list";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/app/home_screen";
import CartScreen from "./src/screens/app/cart_screen";
import FavoriteScreen from "./src/screens/app/favorite_screen";
import GameDetailScreen from "./src/screens/app/game_detail_screen";
import TabStack from "./src/navigation/tab_stack";

const Tab = createBottomTabNavigator<AppStackParamList>();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  )
}


const Stack = createNativeStackNavigator<AppStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <AppStack />
      
    </NavigationContainer>
  );
}

export default App;



