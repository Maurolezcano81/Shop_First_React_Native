import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { COLORS, FONT_SIZES, PADDING, SHADOWS } from "../utils/Constants"
import { Link, router } from "expo-router"

export default function CardProducts({
    product
}) {



    return (
        <Link
            href={`/${product.id}`}
            asChild
            key={product.id}
            style={[styles.card__container, styles.shadowBox1]}
        >

            <Pressable>
                <View style={styles.card__image__container}>
                    <Image
                        source={{ uri: product.image }}
                        style={styles.card__image}
                    />
                </View>

                <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={styles.card__title}>
                    {product.title}
                </Text>



                <View
                    style={styles.card__footer}>
                    <Text
                        style={styles.card__price}
                    >
                        $USD {product.price}
                    </Text>

                </View>

            </Pressable>

        </Link>
    )
}


const styles = StyleSheet.create({
    card__container: {
        backgroundColor: COLORS.bgWhite,
        minHeight: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1,
        margin: 10,
        gap: 10,
        padding: PADDING.small
    },

    card__title: {
        fontSize: FONT_SIZES.small,
        marginBottom: 10,
        color: COLORS.gray0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },

    card__image__container: {
        width: "100%",
        display: "flex",

    },

    card__image: {
        height: 100,
        objectFit: "contain"
    },

    card__footer: {
        width: "100%"

    },

    card__price: {
        textAlign: "center",
    },

    shadowBox1: {
        ...SHADOWS.shadowBox1
    }



})