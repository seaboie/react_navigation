import React, { useState } from "react";
import { Alert, Image, Text ,TouchableOpacity,View} from 'react-native';
import ButtonSocial from "../../components/component/button_social";
import FormInput from "../../components/component/form_input";
import { SignupProps } from "../../type/type_props";
import { gbs, sc } from "../../utils/import/import_options";

const SignupScreen = ({navigation, route}: SignupProps) => {
  


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    return (
      <View style={[{ flex: 1,  justifyContent: 'center', alignItems: 'center', paddingHorizontal: sc.padMid }]} >
        
        <Text style={[{ fontSize: 32, fontStyle: 'italic', color: 'black', marginBottom: sc.body }]}>Create New Account</Text>
        <FormInput
          placeholder="Email address"
          onChangeText={(value) => { setEmail(value) }}
          keyboardType="email-address"
        />
        <FormInput
          placeholder="Password"
          onChangeText={(value) => { setPassword(value) }}
          keyboardType="number-pad"
          secureTextEntry
        />
        <FormInput
          placeholder="Confirm Password"
          onChangeText={(value) => { setPassword(value) }}
          keyboardType="number-pad"
          secureTextEntry
        />
        <ButtonSocial
          title="Sign Up"
          onPress={() => { Alert.alert('Sign UP') }}
        />
       
         <View style={[{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: sc.body, paddingHorizontal: sc.body}]}>
             <Text style= {[{fontSize: sc.subtitle}]}>By registering, you confirm that you accept our</Text>
             <TouchableOpacity onPress={() => {}}>
                 <Text style= {[{color: '#e88832', fontSize: sc.subtitle}]}>Terms of Services</Text>
             </TouchableOpacity>
              <Text style= {[{fontSize: sc.subtitle}]}> and </Text>
               <Text style= {[{color: '#e88832', fontSize: sc.subtitle}]}> Privacy Policy</Text>
         </View>

        <ButtonSocial
          title="Sign up with Facebook"
          color="#4867aa"
          backgroundColor='#e6eaf4'
          onPress={() => {}}
        />
        <ButtonSocial
          title="Sign up with Google"
          color="#de4d41"
          backgroundColor='#f5e7ea'
          onPress={() => {}}
        />
  
  
        <TouchableOpacity style={{marginTop: sc.head2}} onPress={() => {navigation.navigate("Login")}}>
           <Text style= {[{color: 'blue', fontWeight: 'bold'}]}>Have an account ? Sign In</Text>
        </TouchableOpacity>
  
      </View>
    );
  
}

export default SignupScreen;



function useSafeAreaInsets() {
    throw new Error("Function not implemented.");
}

