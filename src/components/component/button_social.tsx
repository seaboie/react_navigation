import React from "react";
import { StyleProp, Text ,Touchable,TouchableOpacity,TouchableOpacityProps,TouchableWithoutFeedbackProps,View, ViewStyle} from 'react-native';
import { sc } from "../../utils/import/import_options";

type ButtonSocialProps = {
    title: string,
    color?: string,
    backgroundColor?: string | undefined,
} & TouchableOpacityProps;

const ButtonSocial = ({title, color, backgroundColor, ...rest}: ButtonSocialProps) => {
  return (  
     <TouchableOpacity style={{height: sc.buttonHeight, width: '100%', backgroundColor: backgroundColor ?? 'blue', marginTop: sc.body, alignItems: 'center', justifyContent: 'center'}} {...rest} >
         <Text style= {[{fontSize: sc.body, color: color ?? 'white'}]}>{title}</Text>
     </TouchableOpacity>
  );
}

export default ButtonSocial;



