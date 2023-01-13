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
    Home: undefined
};

export type HomeProps = NativeStackScreenProps<AppStackParamList, "Home">;