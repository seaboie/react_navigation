import React from "react";
import { Text ,View} from 'react-native';
import TodoForm from "../text_input/todo_form";

const FormButton = () => {
  return (  
     <View style={[]} > 

     <TodoForm 
        placeholder="Hey"
        onChangeText={(value) => {}}
     />
      
    </View>
  );
}

export default FormButton;



