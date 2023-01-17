import React, { useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage"
import OnboardingScreen from "./screens/app/onboarding_screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./type/type_props";
import AuthStackScreen from "./navigations/auth/auth_stack_screen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootScreen = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(true);

  const { getItem } = useAsyncStorage("firstLaunch");

  const readItem = async () => {
    const item = await getItem();
    if (item === null) {
      setIsFirstLaunch(true);
    } else {
      setIsFirstLaunch(false);
    }
  }

  useEffect(() => {
    readItem();

  }, [])

  return (
    isFirstLaunch
      ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Auth" component={AuthStackScreen} />
          </Stack.Navigator>
      )
      : (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Auth" component={AuthStackScreen} />
          </Stack.Navigator>
      )
  );
}

export default RootScreen;



