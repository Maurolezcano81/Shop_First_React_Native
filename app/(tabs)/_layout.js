import { COLORS } from "../../utils/Constants.js";
import { Tabs } from "expo-router";

import Home from '../../utils/svgs/Home.js'
import Cart from "../../utils/svgs/Cart.js";
import { useEffect, useState } from "react";
import UseCart from "../../hooks/useCart.js";
import CartProvider from "../../contexts/CartContext.js";
import Toast from "react-native-toast-message";

export default function TabsLayout() {

    return (

        <CartProvider >

            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: COLORS.violet,
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Inicio",
                        tabBarIcon: () => <Home />
                    }}
                ></Tabs.Screen>

                <Tabs.Screen
                    name="cardlist"
                    options={{
                        title: "Carrito",
                        tabBarIcon: () => (
                            <Cart
                            />
                        )

                    }}
                >
                </Tabs.Screen >
            </Tabs >
        </CartProvider>

    )
}
