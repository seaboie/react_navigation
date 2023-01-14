import React, { ReactNode } from "react";
import { Image, ImageBackground, StatusBar, Text, View } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, useDrawerStatus } from "@react-navigation/drawer";
import { colors, gbs, sc } from "../../utils/import/import_options";
import { CoinIcon, CoinsIcon } from "../../utils/import/import_example";

const CustomDrawer = (props: DrawerContentComponentProps) => {

    const isDrawerOpen = useDrawerStatus() === "open";
    return (

        <View style={[{ flex: 1 }]}>
            
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: "#8200D6" }} >
                <ImageBackground source={require("../../assets/images/menu-bg.jpeg")} style={{ padding: sc.padMid}} >
                    <Image source={require("../../assets/images/user-profile.jpg")} style={{ height: sc.buttonHeight * 1.8, aspectRatio: 1, borderRadius: 500 }} />

                    <View style={[{ flex: 1 }]}>
                        <Text style={[gbs.bodyTrirong, { marginTop: sc.caption, color: colors.white }]}>John Doe</Text>
                        <View style={[{ flexDirection: "row" }]}>
                            <Text style={[gbs.title, { color: colors.thirdBlue }]}>280 Coins</Text>
                            <View style={[{ marginLeft: sc.caption }]}>
                                <CoinIcon height={sc.head} width={sc.head} fill={"gold"} />

                            </View>
                            <View style={[{ marginLeft: sc.caption}]}>
                                <CoinsIcon height={sc.head} width={sc.head} fill={"gold"} />

                            </View>
                        </View>
                    </View>



                </ImageBackground>

                <View style={[{ flex: 1, backgroundColor: "#fff", paddingTop: sc.subtitle }]}>
                    <DrawerItemList {...props} />
                </View>

            </DrawerContentScrollView>
            <View style={[]}>
                <Text style={[]}>Our Custom Text</Text>
            </View>

        </View>
    );
}

export default CustomDrawer;



