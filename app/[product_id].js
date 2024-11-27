import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import Screen from "../components/Screen";
import { Image, Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { BORDERS, COLORS, FONT_SIZES, SHADOWS } from "../utils/Constants";
import { View } from "react-native";
import Cart from "../utils/svgs/Cart";
import Spinner from "../components/Spinner";
import { Colors } from "react-native/Libraries/NewAppScreen";
import HeaderProduct from "../components/SingleProduct/HeaderProduct";
import ProductsByCategorie from "../components/SingleProduct/ProductsByCategorie";
import AddToCart from "../components/AddToCart";
import { useLocaleContext } from "react-native-web";
import { NavigationContainer, useNavigationState } from '@react-navigation/native';

export default function DetailProduct() {
    const { product_id } = useLocalSearchParams();


    const [selectedProduct, setSelectedProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const [errorMessage, setErrorMessage] = useState("");

    const navigation = useNavigation();

    const currentRouteName = useNavigationState((state) => state.routes[state.index].name);


    useEffect(() => {

        try {
            const fetchRequest = async () => {

                const fetchResponse = await fetch(`https://fakestoreapi.com/products/${product_id}`);

                const data = await fetchResponse.json()

                if (fetchResponse.status === 200) {
                    setIsLoading(false);
                    setErrorMessage("");
                    setSelectedProduct(data)
                    return
                }
            }

            fetchRequest()


            navigation.setOptions({
                headerTitle: selectedProduct?.title || "Product Details",
                headerLeft: () => null,
                headerRight: () => null,
            });

        } catch (error) {
            setIsLoading(false);
            setErrorMessage("Error al obtener los productos");
            setSelectedProduct([]);
            return
        }

    }, [selectedProduct.id, currentRouteName])


    return (
        <Screen>
            {isLoading ? (
                <Spinner />
            )
                : (
                    <ScrollView
                        style={styles.container}
                    >


                        <HeaderProduct
                            title={selectedProduct?.title}
                            image={selectedProduct?.image}
                            description={selectedProduct?.description}
                        />



                        <View
                            style={styles.footer__container}

                        >

                            <Text
                                style={styles.price}
                            >
                                $USD {selectedProduct?.price}
                            </Text>


                            <AddToCart
                                product={selectedProduct}
                            />

                        </View>


                        <View>
                            <ProductsByCategorie
                                category={selectedProduct.category}
                                id={selectedProduct.id}
                            />
                        </View>



                    </ScrollView>
                )
            }
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: COLORS.bgWhite
    },

    price: {
        fontWeight: 600,
        fontSize: FONT_SIZES.medium,
    },

    footer__container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
        justifyContent: 'flex-end'
    },

    cart__button: {
        padding: 8,
        backgroundColor: COLORS.violet,
        width: "40%"
    },

    cart__button__text: {
        color: COLORS.whiteText,
        textAlign: 'center',
        fontSize: FONT_SIZES.medium
    }
})