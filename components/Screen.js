

import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { COLORS } from "../utils/Constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Screen({ children }) {
    const insets = useSafeAreaInsets();

    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.background,
            paddingBottom: insets.bottom,
        }}>

            <StatusBar
                style="light"
                backgroundColor={COLORS.violet}
            />

            {children}
        </View>
    )
}
