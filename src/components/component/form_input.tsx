import React from "react";
import { Text ,TextInput,TextInputProps,View, ViewProps} from 'react-native';
import colors from "../../utils/colors/colors";
import { sc } from "../../utils/import/import_options";

type FormInputProps = {
   
} & TextInputProps

const FormInput = ({ ...rest}: FormInputProps) => {
  return (  
      <View style={{ height: sc.buttonHeight, width: '100%', marginTop: sc.body}}>
          <TextInput style={{flex: 1, borderRadius: sc.maxSpace, borderWidth: sc.minSpace, borderColor: colors.thirdBlue, paddingHorizontal: sc.padMid, backgroundColor: colors.white, fontSize: sc.title,}} {...rest}  />
      </View>
  );
}

export default FormInput;



