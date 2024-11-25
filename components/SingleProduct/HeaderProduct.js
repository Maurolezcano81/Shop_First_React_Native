import { Image, StyleSheet, View } from "react-native"
import { COLORS, FONT_SIZES, SHADOWS } from "../../utils/Constants"
import { Text } from "react-native"

export default function HeaderProduct({
    image,
    title,
    description
}) {


    return (
        <>
            <View
                style={[styles.image__container, styles.border]}
            >
                <Image
                    source={{
                        uri: `${image}`,
                        width: "100%",
                        height: "240",
                    }}
                    style={styles.image}
                />
            </View>

            <View
                style={styles.title__container}

            >
                <Text
                    style={styles.title}

                >
                    {title}
                </Text>

            </View>

            <View
                style={styles.description__container}

            >
                <Text
                    style={styles.description}
                >
                    {description}
                </Text>
            </View>

        </>

    )

}


const styles = StyleSheet.create({

    image__container: {
        padding: 10,
    },


    border: {
        ...SHADOWS.shadowBox2
    },

    image: {
        objectFit: "contain",
    },

    title__container: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        marginTop: 10,
        marginBottom: 20
    },

    title: {
        color: COLORS.violet,
        fontWeight: 600,
        fontSize: FONT_SIZES.large
    },

    description__container: {
    },

    description: {
        fontSize: FONT_SIZES.small,
        color: COLORS.gray0,
    },
})
