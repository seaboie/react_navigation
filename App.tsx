import React, { Fragment } from "react";
import { SafeAreaView, StatusBar, Text ,View} from 'react-native';
import { gbs } from "./src/utils/import/import_options";

const App = () => {
  return (  
     <Fragment>
       <SafeAreaView style={{ flex: 0, backgroundColor: '' }} />
       <SafeAreaView style={{ flex: 1, backgroundColor: '' }}>
         <StatusBar barStyle="dark-content" backgroundColor={"white"}/>
         <View style={[gbs.center, { flex: 1, backgroundColor: '' }]}>
           
         </View>
       </SafeAreaView>
     </Fragment>
  );
}

export default App;



