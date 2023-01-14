import React, { Fragment } from "react";
import { SafeAreaView, StatusBar, Text ,View} from 'react-native';
import { gbs } from "../../utils/import/import_options";

const MonentScreen = () => {
  return (  
     <Fragment>
       <SafeAreaView style={{ flex: 0, backgroundColor: '' }} />
       <SafeAreaView style={{ flex: 1, backgroundColor: '' }}>
         <StatusBar barStyle="dark-content" />
         <View style={[gbs.center, { flex: 1, backgroundColor: '' }]}>
            <Text style= {[{fontSize: 90}]}>Moment</Text>
         </View>
       </SafeAreaView>
     </Fragment>
  );
}

export default MonentScreen;



