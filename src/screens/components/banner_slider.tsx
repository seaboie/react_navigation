import React from "react";
import { Image, Text ,View} from 'react-native';

export type DataProp = {
  title: string,
  image: any
};

export type BannerSliderProp = {
  data: DataProp
}


const BannerSlider = ({data}: BannerSliderProp) => {
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



