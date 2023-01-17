import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import RootScreen from "./src/root_screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {

  return (

    <NavigationContainer>
      <SafeAreaProvider>
        <RootScreen />
      </SafeAreaProvider>
    </NavigationContainer>
  );

}

export default App;



