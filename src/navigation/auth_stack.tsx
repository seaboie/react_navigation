import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../screens/login_screen";
import OnboardingScreen from "../screens/onboarding_screen";
import { RootStackParamList } from "../type/type_root_stack_param_list";

const Stack = createNativeStackNavigator<RootStackParamList>()

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
}

export default AuthStack;



