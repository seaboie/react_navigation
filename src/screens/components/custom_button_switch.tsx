import React, { useState } from "react";
import { Text, Touchable, TouchableOpacity, View } from 'react-native';
import { gbs, sc } from "../../utils/import/import_options";

type CustomButtonSwitchProps = {
    selectionMode: number,
    titleButtonLeft: string,
    titleButtonRight: string,
    onSelectSwitch(value: number): void
}

const CustomButtonSwitch = ({ selectionMode, titleButtonLeft, titleButtonRight, onSelectSwitch }: CustomButtonSwitchProps) => {

    const [getSelectionMode, setGetSelectionMode] = useState(selectionMode);
    const updateSwitchButton = (value: number) => {
        setGetSelectionMode(value);
        onSelectSwitch(value);
    }

    return (
        <View style={[{ flexDirection: 'row', justifyContent: 'center', height: sc.buttonBottomBarHeight * 0.8, width: '70%', alignSelf: 'center', backgroundColor: '#E4E4E4', borderRadius: sc.padMin, borderColor: '#AD40AF' }]} >
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => { updateSwitchButton(1) }}
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: 'center',
                    borderRadius: sc.padMin,
                    backgroundColor: getSelectionMode === 1 ? '#AD40AF' : '#E4E4E4'
                }}
            >
                <Text style={[gbs.title, {
                    color: getSelectionMode === 1 ? '#fff' : '#AD40AF'
                }]}>{titleButtonLeft}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => { updateSwitchButton(2) }}
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: 'center',
                    borderRadius: sc.padMin,
                    backgroundColor: getSelectionMode === 2 ? '#AD40AF' : '#E4E4E4'
                }}
            >
                <Text style={[gbs.title, {
                    color: getSelectionMode === 2 ? '#fff' : '#AD40AF'
                }]}>{titleButtonRight}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CustomButtonSwitch;



