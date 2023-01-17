import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Onboarding: undefined,
    Auth: undefined
};

export type OnboardingProps = NativeStackScreenProps<RootStackParamList, "Onboarding">;
export type AuthStackProps = NativeStackScreenProps<RootStackParamList, "Auth">;


export type AuthStackParamList = {
    Login: undefined,
    Signup: undefined,
}

export type LoginProps = NativeStackScreenProps<AuthStackParamList, "Login">;
export type SignupProps = NativeStackScreenProps<AuthStackParamList, "Signup">;
