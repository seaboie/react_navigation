import React from "react";
import { Text ,View} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList, AuthStackProps } from "../../type/type_props";
import LoginScreen from "../../screens/auth/login_screen";
import SignupScreen from "../../screens/auth/signup_screen";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackScreen = ({navigation, route}: AuthStackProps) => {
  return (  
     <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <AuthStack.Screen name="Signup" component={SignupScreen} options={({navigation}) => ({
            title: "",
            headerStyle: {
                backgroundColor: '#f2f2f2',

            },
            headerShadowVisible: false,
        })} />
     </AuthStack.Navigator>
  );
}

export default AuthStackScreen;



