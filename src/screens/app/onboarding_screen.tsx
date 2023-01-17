import React from "react";
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {  sc } from "../../utils/import/import_options";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Onboarding from 'react-native-onboarding-swiper';
import { OnboardingProps } from "../../type/type_props";
import { useAsyncStorage } from "@react-native-async-storage/async-storage"

const OnboardingScreen = ({ navigation, route }: OnboardingProps) => {
    const insets = useSafeAreaInsets();

    const { setItem } = useAsyncStorage("firstLaunch");

    const writeDataToStorage = async(newValue: string) => {
        await setItem(newValue);
        console.log(newValue);
    }

    const Skip = ({ ...props }) => (
        <TouchableOpacity
            style={{ paddingHorizontal: sc.caption }}
            {...props}
        >
            <Text style={[]}>ข้าม</Text>
        </TouchableOpacity>
    );
    
    const Next = ({ ...props }) => (
    
        <TouchableOpacity
            style={{ paddingHorizontal: sc.caption }}
            {...props}
        >
            <Text style={[]}>ถัดไป</Text>
        </TouchableOpacity>
    );
    const Done = ({ ...props }) => (
        <TouchableOpacity
            
            style={{ paddingHorizontal: sc.caption }}
            {...props}
            onPress={() => {
                writeDataToStorage("firstLaunch");
                navigation.navigate("Auth");
            }}
        >
            <Text style={[]}>ตกลง</Text>
        </TouchableOpacity>
    );
    const Dot = ({selected}: {selected: boolean}) => (
        <View style={[{ marginHorizontal: sc.maxSpace, width: sc.caption, height: sc.caption, backgroundColor: selected ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.3)' }]}></View>
    );


    return (
            <Onboarding
                SkipButtonComponent={Skip}
                NextButtonComponent={Next}
                DoneButtonComponent={Done}
                DotComponent={Dot}

                onDone={() => navigation.navigate("Auth")}
                onSkip={() => navigation.replace("Auth")}
                controlStatusBar
                pages={[
                    {
                        backgroundColor: '#A6E4D0',
                        image: <Image source={require('../../assets/onboarding-img1.png')} />,
                        title: 'Onboarding1',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fdeb93',
                        image: <Image source={require('../../assets/onboarding-img2.png')} />,
                        title: 'Onboarding2',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: 'forestgreen',
                        image: <Image source={require('../../assets/onboarding-img3.png')} />,
                        title: 'Onboarding3',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },

                ]}
            />
    );
}

export default OnboardingScreen;



