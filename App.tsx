import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/home_screen";
import MainScreen from "./src/screens/main_screen";
import { RootStackParamList } from "./src/type/type_root_stack_param_list";

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (  
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Main">
        <RootStack.Screen name="Main" component={MainScreen} options={{headerShown: false}} />
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;



