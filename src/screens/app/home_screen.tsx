import React, { Fragment, useState } from "react";
import { Dimensions, ImageBackground, ScrollView, StatusBar, Text, TextInput, Touchable, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeProps } from "../../type/type_root_stack_param_list";
import { SearchIcon } from "../../utils/import/import_example";
import { colors, gbs, sc } from "../../utils/import/import_options";
import Carousel from "react-native-snap-carousel";
import { freeGames, paidGames, sliderData } from "../../model/data";
import BannerSlider, { BannerSliderProp, DataProp } from "../components/banner_slider";
import CustomButtonSwitch from "../components/custom_button_switch";
import SpacerTitle from "../../components/spacer/spacer_title";
import ListItem from "../components/list_item";

const HomeScreen = ({ navigation, route }: HomeProps) => {

    const [gameTab, setGameTab] = useState(1);

    const renderBanner = ({ item, index }) => {
        return (
            <BannerSlider data={item} />
        );
    }
    const onSelectSwitch = (value: number) => {
        setGameTab(value);
    }
    return (
        <View style={[{ flex: 1 }]}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
                <View style={[{ flex: 1, backgroundColor: '#fff', paddingHorizontal: sc.padMid }]}>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1 }}>
                        <View style={[{ height: sc.breadcrumbHeight * 1.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
                            <Text style={[gbs.head2, { color: "black" }]}>Hello John Doe</Text>

                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <ImageBackground
                                    source={require("../assets/images/user-profile.jpg")}
                                    style={{ height: '80%', aspectRatio: 0.8 }}
                                    imageStyle={{ borderRadius: 200, alignSelf: 'center' }}
                                />
                            </TouchableOpacity>

                        </View>
                        <View style={[{ height: sc.buttonHeight, flexDirection: 'row', alignItems: "center", borderWidth: sc.midSpace, borderColor: "#C6C6C6", borderRadius: sc.padMin }]}>
                            <View style={[{ flex: 1 }]}>
                                <SearchIcon height={"50%"} stroke={"#C6C6C6"} />
                            </View>
                            <View style={[{ flex: 6 }]}>
                                <TextInput placeholder="Search" defaultValue="" style={[gbs.bodyTrirong, { color: colors.secondary }]} />

                            </View>
                        </View>
                        <SpacerTitle />
                        <View style={[{ height: sc.buttonHeight, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }]}>
                            <Text style={[gbs.body, { color: 'black' }]}>Upcoming Games</Text>
                            <TouchableHighlight onPress={() => { }}>
                                <Text style={[gbs.body, { color: "#0AADA8" }]}>See All...</Text>
                            </TouchableHighlight>
                        </View>

                        <Carousel
                            // ref={(c) => { this._carousel = c; }}
                            data={sliderData}
                            renderItem={renderBanner}
                            sliderWidth={Dimensions.get("window").width}
                            itemWidth={300}
                            loop={true}
                        />


                        <View style={[{ marginVertical: sc.head }]}>
                            <CustomButtonSwitch
                                selectionMode={1}
                                titleButtonLeft={"Free to play"}
                                titleButtonRight={"Paid Games"}
                                onSelectSwitch={(value) => { onSelectSwitch(value) }}
                            />
                        </View>

                        {gameTab === 1 &&
                            freeGames.map((game) => (
                                <ListItem
                                    key={game.id}
                                    isFree={game.isFree}
                                    poster={game.poster}
                                    subtitle={game.subtitle}
                                    title={game.title}
                                />
                            ))
                        }
                        {gameTab === 2 &&
                            paidGames.map((game) => (
                                <ListItem
                                    key={game.id}
                                    isFree={game.isFree}
                                    poster={game.poster}
                                    title={game.title}
                                    subtitle={game.subtitle}
                                    price={game.price}
                                />
                            ))
                        }

                    </ScrollView>

                </View>
            </SafeAreaView>
        </View>
    );
}

export default HomeScreen;



