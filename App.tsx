import React, { } from "react";
import OnboardingScreen from "./src/screens/app/onboarding_screen";
import LoginScreen from "./src/screens/auth/login_screen";
import { gbs } from "./src/utils/import/import_options";
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"


const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <LoginScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;



