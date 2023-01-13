import React, { Fragment } from "react";
import {  StatusBar, Text ,TouchableHighlight,View} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { MainProps } from "../type/type_root_stack_param_list";
import { ChevronRightIcon, GamingImageIcon } from "../utils/import/import_example";
import { gbs, sc } from "../utils/import/import_options";

const MainScreen = ({navigation, route}: MainProps) => {

    const goToHomeScreen = () => {
        navigation.navigate("Login");
    };

    return (
        <Fragment>
          <SafeAreaView style={{ flex: 0, backgroundColor: '#fff' }} />
          <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
            <View style={[gbs.center, { flex: 1, backgroundColor: '#fff', paddingHorizontal: sc.padMax }]}>
              <Text style={[gbs.head5Tri, { color: '#20315f' }]}>GAMEON</Text>
    
              <View style={{width: "80%", alignItems: "center", justifyContent: 'center', transform: [{ rotate: "-10deg" }] }}>
                <GamingImageIcon width={"100%"} height={"60%"} />
              </View>
    
              <TouchableHighlight underlayColor={"lavender"} onPress={() => { goToHomeScreen()}} style={{ width: '100%', backgroundColor: '#AD40AF', borderRadius: sc.maxSpace }}>
                <View style={[{ height: sc.buttonBottomBarHeight, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: sc.padMid }]}>
    
                  <Text style={[{ color: '#fff', fontSize: sc.head1, fontFamily: 'Trirong-MediumItalic' }]}>Let's Begin</Text>
    
                  <ChevronRightIcon height={"65%"} width={"8%"} stroke={"white"} />
    
    
                </View>
              </TouchableHighlight>
            </View>
          </SafeAreaView>
        </Fragment>
      );
}

export default MainScreen;



