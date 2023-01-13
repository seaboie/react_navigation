import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation/auth_stack";
import AppStack from "./src/navigation/app_stack";


const App = () => {
  return (  
    <NavigationContainer>
      {/* <AuthStack /> */}
      <AppStack />
    </NavigationContainer>
  );
}

export default App;



