import React from "react";
import { Text ,View} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/app/home_screen";
import CartScreen from "../screens/app/cart_screen";
import FavoriteScreen from "../screens/app/favorite_screen";
import { AppStackParamList, TabStackProps } from "../type/type_root_stack_param_list";
import { FavoriteIcon, HomeIcon, ShoppingBagIcon } from "../utils/import/import_example";
import HomeStack from "./home_stack";

const Tab = createBottomTabNavigator<AppStackParamList>();

const TabStack = ({navigation, route}: TabStackProps) => {
  return (  
     <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: "#AD40AF"},
        tabBarInactiveTintColor: "mistyrose",
        tabBarActiveTintColor: "navy"
     }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({color, size, focused}) => (
                <HomeIcon height={"55%"} width={"55%"} fill={color} />
            ),
        }} />
        <Tab.Screen name="Cart" component={CartScreen} options={{
            tabBarBadge: "tyre",
            tabBarBadgeStyle: {backgroundColor: 'gold', color: "navy"},
            tabBarIcon: ({color, size, focused}) => (
                <ShoppingBagIcon height={"60%"} width={"60%"} fill={color} />
            ),
        }} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
            tabBarIcon: ({color, size, focused}) => (
                <FavoriteIcon height={size} width={size} fill={color}/>
            ),
        }} />
     </Tab.Navigator>
  );
}

export default TabStack;



