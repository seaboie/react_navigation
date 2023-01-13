import React from "react";
import { Image, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { PlanGame } from "../../model/data";
import { colors, gbs, sc } from "../../utils/import/import_options";



const ListItem = (plan: PlanGame) => {
    return (
        <View style={[{ height: sc.buttonHeight, flexDirection: 'row', alignItems: 'center', marginBottom: sc.body }]}>
            <View style={[{ flex: 3 }]}>
                <Image
                    source={plan.poster}
                    style={{ height: "100%", aspectRatio: 1, resizeMode: "cover", borderRadius: sc.padMin }}

                />
            </View>
             <View style={[{flex: 10, marginRight: sc.padMin}]}>
                 <Text numberOfLines={1} adjustsFontSizeToFit style= {[gbs.titleTrirong, {color: colors.secondary}]}>{plan.title}</Text>
                  <Text numberOfLines={1} adjustsFontSizeToFit style= {[gbs.title, {color: colors.secondary, textTransform: 'uppercase'}]}>{plan.subtitle}</Text>
             </View>
              <View style={[{flex: 4, borderRadius: sc.padMin, overflow: 'hidden'}]}>
                 <TouchableOpacity style={{height: "80%", backgroundColor: '#0AADA8', alignItems: 'center', justifyContent: 'center'}}>
                     <Text style= {[gbs.title, {color: "#fff"}]}>{plan.isFree === "Yes" ? "Play" : plan.price}</Text>
                 </TouchableOpacity>
              </View>
        </View>
    );
}

export default ListItem;



