import React, { Fragment } from "react";
import { SafeAreaView, StatusBar, Text, TouchableHighlight, View } from 'react-native';
import { ChevronLeftIcon, ChevronRightIcon } from "./src/utils/import/import_example";
import { gbs, sc } from "./src/utils/import/import_options";

const App = () => {
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '' }}>
        <StatusBar barStyle="dark-content" backgroundColor={"white"} />
        <View style={[gbs.center, { flex: 1, backgroundColor: '', paddingHorizontal: sc.padMid }]}>
          <Text style={[gbs.head5Tri, {color: '#20315f'}]}>GAMEON</Text>
          <TouchableHighlight underlayColor={"lavender"} onPress={() => { }} style={{width: '100%', backgroundColor: '#AD40AF'}}>
            <View style={[{ height: sc.buttonBottomBarHeight, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: sc.padMid }]}>
              
              <Text style={[{color: '#fff', fontSize: sc.head1, fontFamily: 'Trirong-MediumItalic'}]}>Let's Begin</Text>
              <ChevronRightIcon height={"65%"} width={"8%"} stroke={"white"} />
            </View>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}

export default App;



