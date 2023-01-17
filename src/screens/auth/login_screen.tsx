import React, { useState } from "react";
import { Alert, Button, Image, StatusBar, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { gbs, sc } from "../../utils/import/import_options";
import { useSafeAreaInsets } from "react-native-safe-area-context"
import ButtonSocial from "../../components/component/button_social";
import FormInput from "../../components/component/form_input";
import { LoginProps } from "../../type/type_props";

const LoginScreen = ({navigation, route}: LoginProps) => {

  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={[{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, justifyContent: 'center', alignItems: 'center', paddingHorizontal: sc.padMid }]} >
      <Image
        source={require('../../assets/rn-social-logo.png')}
        style={{ height: '20%', aspectRatio: 1 / 1 }}
      />
      <Text style={[{ fontSize: 32, fontStyle: 'italic', color: 'black' }]}>RN Social App</Text>
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
      <ButtonSocial
        title="Sign In"
        onPress={() => { Alert.alert('Hey') }}
      />
      <TouchableOpacity style={{marginTop: sc.caption}} onPress={() => {}}>
         <Text style= {[{color: 'blue', fontWeight: 'bold'}]}>Forgot Password ?</Text>
      </TouchableOpacity>

      <ButtonSocial
        title="Sign in with Facebook"
        color="#4867aa"
        backgroundColor='#e6eaf4'
        onPress={() => {}}
      />
      <ButtonSocial
        title="Sign in with Google"
        color="#de4d41"
        backgroundColor='#f5e7ea'
        onPress={() => {}}
      />


      <TouchableOpacity style={{marginTop: sc.head2}} onPress={() => {navigation.navigate("Signup")}}>
         <Text style= {[{color: 'blue', fontWeight: 'bold'}]}>Don't have an account ? Create new here</Text>
      </TouchableOpacity>

    </View>
  );
}

export default LoginScreen;



