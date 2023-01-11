import React, { Fragment } from "react";
import { SafeAreaView, StatusBar, Text ,TouchableHighlight,View} from 'react-native';
import { gbs } from "./src/utils/import/import_options";

const App = () => {
  return (  
     <Fragment>
       <SafeAreaView style={{ flex: 0, backgroundColor: '' }} />
       <SafeAreaView style={{ flex: 1, backgroundColor: '' }}>
         <StatusBar barStyle="dark-content" backgroundColor={"white"}/>
         <View style={[gbs.center, { flex: 1, backgroundColor: '' }]}>
            <Text style= {[gbs.head5Tri]}>GAMEON</Text>
            <TouchableHighlight>
               <View style={[{height: 90}]}>
                 <Text style= {[]}>Let's Begin</Text>
               </View>
            </TouchableHighlight>
         </View>
       </SafeAreaView>
     </Fragment>
  );
}

export default App;



