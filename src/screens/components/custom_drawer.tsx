import React, { ReactNode } from "react";
import { Image, ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, useDrawerStatus } from "@react-navigation/drawer";
import { colors, gbs, sc } from "../../utils/import/import_options";
import { CoinIcon, CoinsIcon, SignOutIcon, SocialShareIcon } from "../../utils/import/import_example";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomDrawer = (props: DrawerContentComponentProps) => {

    const isDrawerOpen = useDrawerStatus() === "open";
    return (

        <SafeAreaView edges={['bottom', 'left', 'right']} style={{flex: 1}}>
            <View style={[{ flex: 1 }]}>

                <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: "#8200D6" }} >
                    <ImageBackground source={require("../../assets/images/menu-bg.jpeg")} style={{ padding: sc.padMid }} >
                        <Image source={require("../../assets/images/user-profile.jpg")} style={{ height: sc.buttonHeight * 1.8, aspectRatio: 1, borderRadius: 500 }} />

                        <View style={[{ flex: 1 }]}>
                            <Text style={[gbs.bodyTrirong, { marginTop: sc.caption, color: colors.white }]}>John Doe</Text>
                            <View style={[{ flexDirection: "row" }]}>
                                <Text style={[gbs.title, { color: colors.thirdBlue }]}>280 Coins</Text>
                                <View style={[{ marginLeft: sc.caption }]}>
                                    <CoinIcon height={sc.head} width={sc.head} fill={"gold"} />

                                </View>
                                <View style={[{ marginLeft: sc.caption }]}>
                                    <CoinsIcon height={sc.head} width={sc.head} fill={"gold"} />

                                </View>
                            </View>
                        </View>



                    </ImageBackground>

                    <View style={[{ flex: 1, backgroundColor: "#fff", paddingTop: sc.subtitle }]}>
                        <DrawerItemList {...props} />
                    </View>

                </DrawerContentScrollView>
                <View style={[{ padding: sc.padMid, borderTopWidth: sc.minSpace, borderColor: "#CCD" }]}>
                    <TouchableOpacity onPress={() => { }} style={{ flexDirection: "row" }}>
                        <SocialShareIcon height={"100%"} width={"20%"} stroke={colors.secondary} fill={colors.secondary} />
                        <Text style={[gbs.body, { color: colors.secondary }]}>Tell your friends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} style={{ flexDirection: "row", marginTop: sc.head, justifyContent: "flex-end" }}>
                        <SignOutIcon height={"100%"} width={"20%"} fill={"blue"} />
                        <Text style={[gbs.body, {color: "blue"}]}>Sign Out</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </SafeAreaView>
    );
}

export default CustomDrawer;



