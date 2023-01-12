import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Main: undefined,
    Home: undefined
};

export type MainProps = NativeStackScreenProps<RootStackParamList, "Main">;
export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;