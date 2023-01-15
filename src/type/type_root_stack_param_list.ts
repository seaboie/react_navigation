import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AuthStackParamList = {
    Login: undefined
}

export type LoginProps = NativeStackScreenProps<AuthStackParamList, "Login">;

export type RootStackParamList = {
    Main: undefined,
    Onboarding: undefined,
    
};

export type MainProps = NativeStackScreenProps<RootStackParamList, "Main">;
export type OnboardingProps = NativeStackScreenProps<RootStackParamList, "Onboarding">;


export type AppStackParamList = {
    Home: undefined,
    HomeStack: undefined,
    Profile: undefined,
    Message: undefined,
    Moment: undefined,
    Setting: undefined,

    TabStack: undefined,

    Cart: undefined,
    Favorite: undefined,

    GameDetail: {title: string , id: string | undefined},

    HomeTabs: undefined

};

export type HomeProps = NativeStackScreenProps<AppStackParamList, "Home">;
export type HomeStackProps = NativeStackScreenProps<AppStackParamList, "HomeStack">;
export type ProfileProps = NativeStackScreenProps<AppStackParamList, "Profile">;
export type MessageProps = NativeStackScreenProps<AppStackParamList, "Message">;
export type MomentProps = NativeStackScreenProps<AppStackParamList, "Moment">;
export type SettingProps = NativeStackScreenProps<AppStackParamList, "Setting">;

export type TabStackProps = NativeStackScreenProps<AppStackParamList, "TabStack">;
export type CartProps = NativeStackScreenProps<AppStackParamList, "Cart">;
export type FavoriteProps = NativeStackScreenProps<AppStackParamList, "Favorite">;

export type GameDetailProps = NativeStackScreenProps<AppStackParamList, "GameDetail">;