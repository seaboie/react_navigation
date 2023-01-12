import React from "react";
import { Image, Text ,View} from 'react-native';



const BannerSlider = ({data}) => {
  return (  
     <View style={[]} > 
      <Image 
        source={data.image}
        style={{height: 150, width: 300, borderRadius: 12}}
      />
    </View>
  );
}

export default BannerSlider;



