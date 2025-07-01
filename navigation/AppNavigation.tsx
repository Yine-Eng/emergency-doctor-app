import Home from "@/app/Home";
import SignIn from "@/app/SignIn";
import SignUp from "@/app/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Landing from "../App";
import { useAuth } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
    Landing: undefined;
    SignUp: undefined;
    SignIn: undefined;
};

export default function AppNavigation() {
    const { user } = useAuth(); // use your auth state/token logic here

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!user ? (
                    <>
                        <Stack.Screen name="Landing" component={Landing} />
                        <Stack.Screen name="SignIn" component={SignIn} />
                        <Stack.Screen name="SignUp" component={SignUp} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Home" component={Home} />
                        {/* Add secured screens here */}
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
