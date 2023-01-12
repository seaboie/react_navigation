import React, { Fragment } from "react";
import { ImageBackground, ScrollView, StatusBar, Text, TextInput, Touchable, TouchableHighlight, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeProps } from "../type/type_root_stack_param_list";
import { SearchIcon } from "../utils/import/import_example";
import { colors, gbs, sc } from "../utils/import/import_options";

const HomeScreen = ({ navigation, route }: HomeProps) => {
    return (
        <Fragment>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
                <View style={[{ flex: 1, backgroundColor: '#fff', paddingHorizontal: sc.padMid }]}>

                    <ScrollView>
                        <View style={[{ height: sc.breadcrumbHeight * 1.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                            <Text style={[gbs.headTrirong, {}]}>Hello John Doe</Text>
                            <View style={[{ padding: sc.maxSpace }]}>
                                <ImageBackground
                                    source={require("../assets/images/user-profile.jpg")}
                                    style={{ height: '80%', aspectRatio: 0.8     }}
                                    imageStyle={{ borderRadius: 200, alignSelf: 'center' }}
                                />
                            </View>

                        </View>
                        <View style={[{ height: sc.buttonHeight, flexDirection: 'row', alignItems: "center", borderWidth: sc.midSpace, borderColor: "#C6C6C6", borderRadius: sc.padMin }]}>
                            <View style={[{ flex: 1 }]}>
                                <SearchIcon height={"50%"} stroke={"#C6C6C6"} />
                            </View>
                            <View style={[{ flex: 6 }]}>
                                <TextInput placeholder="Search" defaultValue="" style={[gbs.bodyTrirong, { color: colors.secondary}]} />

                            </View>
                        </View>
                         <View style={[{height: sc.buttonHeight, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center"}]}>
                             <Text style= {[gbs.body]}>Upcoming Games</Text>
                             <TouchableHighlight onPress={() => {}}>
                                 <Text style= {[gbs.body, {color: "#0AADA8"}]}>See All...</Text>
                             </TouchableHighlight>
                         </View>

                    </ScrollView>

                </View>
            </SafeAreaView>
        </Fragment>
    );
}

export default HomeScreen;



