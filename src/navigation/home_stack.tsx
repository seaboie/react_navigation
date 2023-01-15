import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import GameDetailScreen from "../screens/app/game_detail_screen";
import HomeScreen from "../screens/app/home_screen";
import { AppStackParamList, HomeStackProps } from "../type/type_root_stack_param_list";
import TabStack from "./tab_stack";

const Stack = createNativeStackNavigator<AppStackParamList>();

const HomeStack = ({navigation, route}: HomeStackProps) => {
  return (  
     <Stack.Navigator >
        <Stack.Screen name="TabStack" component={TabStack} options={{headerShown: false}} />
        <Stack.Screen name="GameDetail" component={GameDetailScreen} options={({route}) => ({
            title: route.params.title,
        })} />
     </Stack.Navigator>
  );
}

export default HomeStack;



