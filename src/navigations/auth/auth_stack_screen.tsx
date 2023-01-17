import React from "react";
import { Text ,View} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../type/type_props";
import LoginScreen from "../../screens/auth/login_screen";
import SignupScreen from "../../screens/auth/signup_screen";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackScreen = () => {
  return (  
     <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Signup" component={SignupScreen} />
     </AuthStack.Navigator>
  );
}

export default AuthStackScreen;



