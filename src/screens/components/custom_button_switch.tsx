import React, { useState } from "react";
import { Text, Touchable, TouchableOpacity, View } from 'react-native';
import { gbs, sc } from "../../utils/import/import_options";

type CustomButtonSwitchProps = {
    selectionMode: number,
    option1: string,
    option2: string,
    onSelectSwitch(): void
}

const CustomButtonSwitch = ({ selectionMode, option1, option2, onSelectSwitch }: CustomButtonSwitchProps) => {

    const [getSelectionMode, setGetSelectionMode] = useState(selectionMode);
    const updateSwitchButton = (value: number) => {
        setGetSelectionMode(value);
        onSelectSwitch();
    }

    return (
        <View style={[{flexDirection: 'row', justifyContent: 'center', height: sc.buttonHeight, backgroundColor: '#E4E4E4', borderRadius: sc.padMin, borderColor: '#AD40AF'}]} >
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {updateSwitchButton(1)}}
                style={{
                    flex: 1,
                    backgroundColor: getSelectionMode === 1 ? '#AD40AF' : '#E4E4E4'
                }}
            >
                 <Text style= {[gbs.body, {
                    color: getSelectionMode === 1 ? '#fff' : '#AD40AF'
                 }]}>{option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {updateSwitchButton(2)}}
                style={{
                    flex: 1,
                    backgroundColor: getSelectionMode === 2 ? '#AD40AF' : '#E4E4E4'
                }}
            >
                 <Text style= {[gbs.body, {
                    color: getSelectionMode === 2 ? '#fff' : '#AD40AF'
                 }]}>{option2}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CustomButtonSwitch;



