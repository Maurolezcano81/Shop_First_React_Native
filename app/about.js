import { Link, Stack } from "expo-router";
import { Text } from "react-native";
import { View } from "react-native";


export default function About() {
    return (
        <View>

            <Stack.Screen
                options={{
                    headerTitle: "Pagina de Inicio",
                    headerLeft: () => { }
                }}
            />

            <Text>Hola About</Text>
            <Link href={"/"}>
                To home
            </Link>
        </View>
    )
}