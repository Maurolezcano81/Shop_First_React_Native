import { ActivityIndicator, StyleSheet, Text, View } from "react-native";


export default function Spinner() {

    return (
        <View
            style={styles.spinner__container}
        >
            <ActivityIndicator
            size={"large"}
            />
            <Text>
                Loading Products...
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    spinner__container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    }
})