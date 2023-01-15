import React from "react";
import { Image, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { PlanGame } from "../../model/data";
import { colors, gbs, sc } from "../../utils/import/import_options";

type ListItemProps = {
    poster: any,
    title: string,
    subtitle: string,
    price?: string,
    isFree: string,
    onPress(): void
}


const ListItem = ({poster, title, subtitle, price, isFree, onPress}: ListItemProps) => {
    return (
        <View style={[{ height: sc.buttonHeight, flexDirection: 'row', alignItems: 'center', marginBottom: sc.head5 }]}>
            <View style={[{ flex: 3 }]}>
                <Image
                    source={poster}
                    style={{ height: "100%", aspectRatio: 1, resizeMode: "cover", borderRadius: sc.padMin }}

                />
            </View>
             <View style={[{flex: 10, marginRight: sc.padMin}]}>
                 <Text numberOfLines={1} adjustsFontSizeToFit style= {[gbs.titleTrirong, {color: colors.secondary}]}>{title}</Text>
                  <Text numberOfLines={1} adjustsFontSizeToFit style= {[gbs.title, {color: colors.secondary, textTransform: 'uppercase'}]}>{subtitle}</Text>
             </View>
              <View style={[{flex: 4, borderRadius: sc.padMin, overflow: 'hidden'}]}>
                 <TouchableOpacity onPress={() => onPress()} style={{height: "80%", backgroundColor: '#0AADA8', alignItems: 'center', justifyContent: 'center'}}>
                     <Text style= {[gbs.title, {color: "#fff"}]}>{isFree === "Yes" ? "Play" : price}</Text>
                 </TouchableOpacity>
              </View>
        </View>
    );
}

export default ListItem;



