import { Link, Slot, Stack } from "expo-router";
import { Image, StyleSheet, Text } from "react-native";
import Screen from '../components/Screen.js'
import { View } from "react-native";
import Cart from '../utils/svgs/Cart.js';
import { COLORS } from "../utils/Constants.js";
import CartProvider from "../contexts/CartContext.js";
import Toast from "react-native-toast-message";

export default function Layout() {
    return (
        <CartProvider>
            <Screen>
                <Stack
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: COLORS.violet,
                            marginTop: 0,
                            paddingTop: 0,
                        },
                        headerTitleStyle: {
                            color: COLORS.whiteText
                        },
                        headerTintColor: COLORS.whiteText,
                        headerTitle: "",
                        headerLeft: () => (
                            <View
                                style={{
                                    padding: 2
                                }}
                            >
                                <Image
                                    source={require('../assets/devshop.png')}
                                    style={{
                                        width: 100,
                                        height: 30
                                    }}
                                    resizeMode="contain"
                                >

                                </Image>
                            </View>

                        ),
                        headerRight: () => { }
                    }}

                />
            </Screen>

            <Toast />

        </CartProvider>
    )
}
