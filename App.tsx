import React, { Fragment } from "react";
import { SafeAreaView, StatusBar, Text ,View} from 'react-native';
import OnboardingScreen from "./src/screens/app/onboarding_screen";
import { gbs } from "./src/utils/import/import_options";

const App = () => {
  return (  
     <Fragment>
       <SafeAreaView style={{ flex: 0, backgroundColor: '' }} />
       <SafeAreaView style={{ flex: 1, backgroundColor: '' }}>
         <StatusBar barStyle="dark-content" backgroundColor={"white"}/>
         <OnboardingScreen />
       </SafeAreaView>
     </Fragment>
  );
}

export default App;



