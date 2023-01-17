import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../colors/colors";
import sc from "../size_configs/size_config";

const globalStyles = StyleSheet.create({
    font: {
        fontFamily: 'Lato-Bold'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1
    },
    head5: {
        fontSize: sc.head5,
        fontFamily: 'Lato-Bold',
    },
    head4: {
        fontSize: sc.head4,
        fontFamily: 'Lato-Bold',
    },
    head3: {
        fontSize: sc.head3,
        fontFamily: 'Lato-Bold',
    },
    head2: {
        fontSize: sc.head2,
        fontFamily: 'Lato-Bold',
    },
    head1: {
        fontSize: sc.head1,
        fontFamily: 'Lato-Bold',
    },
    head: {
        fontSize: sc.head,
        fontFamily: 'Lato-Bold',
    },
    body: {
        fontSize: sc.body,
        fontFamily: 'Lato-Bold',
    },
    title: {
        fontSize: sc.title,
        fontFamily: 'Lato-Bold',
    },
    subtitle: {
        fontSize: sc.subtitle,
        fontFamily: 'Lato-Bold',
    },
    caption: {
        fontSize: sc.caption,
        fontFamily: 'Lato-Bold',
    },
    head5Tri: {
        fontSize: sc.head5,
        fontFamily: 'Lato-Bold',
    },
    head4Trirong: {
        fontSize: sc.head4,
        fontFamily: 'Lato-Bold',
    },
    head3Trirong: {
        fontSize: sc.head3,
        fontFamily: 'Lato-Bold',
    },
    head2Trirong: {
        fontSize: sc.head2,
        fontFamily: 'Lato-Bold',
    },
    head1Trirong: {
        fontSize: sc.head1,
        fontFamily: 'Lato-Bold',
    },
    headTrirong: {
        fontSize: sc.head,
        fontFamily: 'Lato-Bold',
    },
    bodyTrirong: {
        fontSize: sc.body,
        fontFamily: 'Lato-Bold',
    },
    titleTrirong: {
        fontSize: sc.title,
        fontFamily: 'Lato-Bold',
    },
    subtitleTrirong: {
        fontSize: sc.subtitle,
        fontFamily: 'Lato-Bold',
    },
    captionTrirong: {
        fontSize: sc.caption,
        fontFamily: 'Lato-Bold',
    },
    textfieldBorder: {
        borderRadius: sc.midSpace,
        borderWidth: sc.minSpace * 0.5,
        borderColor: colors.thirdBlue,
        paddingVertical: sc.midSpace,
        paddingHorizontal: sc.padMid,
        backgroundColor: colors.primaryBackground
    }
    
});

export default globalStyles;