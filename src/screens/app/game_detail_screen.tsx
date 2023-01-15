import React from "react";
import { Text, View } from 'react-native';
import { GameDetailProps } from "../../type/type_root_stack_param_list";

const GameDetailScreen = ({ navigation, route }: GameDetailProps) => {
    return (
        <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }]} >
            <Text style={[{ fontSize: 40 }]}>Game Detail</Text>
            <Text style={[{ fontSize: 40 }]}>{ route.params.title} </Text>
        </View>
    );
}

export default GameDetailScreen;



