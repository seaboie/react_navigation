import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AuthStackParamList = {

}

export type RootStackParamList = {
    Main: undefined,
    Login: undefined,
    Onboarding: undefined,
    
};

export type MainProps = NativeStackScreenProps<RootStackParamList, "Main">;
export type OnboardingProps = NativeStackScreenProps<RootStackParamList, "Onboarding">;
export type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;


export type AppStackParamList = {
    Home: undefined,
    Profile: undefined,
    Message: undefined,
    Moment: undefined,
    Setting: undefined
};

export type HomeProps = NativeStackScreenProps<AppStackParamList, "Home">;
export type ProfileProps = NativeStackScreenProps<AppStackParamList, "Profile">;
export type MessageProps = NativeStackScreenProps<AppStackParamList, "Message">;
export type MomentProps = NativeStackScreenProps<AppStackParamList, "Moment">;
export type SettingProps = NativeStackScreenProps<AppStackParamList, "Setting">;