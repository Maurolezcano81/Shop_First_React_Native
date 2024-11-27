import Screen from "../../components/Screen";
import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { useEffect, useState } from "react";
import { clearDataFunction, getData } from "../../utils/Storage";
import CartItem from "../../components/Cart/CartItem";
import Spinner from "../../components/Spinner";
import { BORDERS, COLORS, FONT_SIZES, SHADOWS } from "../../utils/Constants";
import CartEmpty from "../../utils/svgs/CartEmpty";
import { useRootNavigationState } from "expo-router";
import UseCart from "../../hooks/useCart";


export default function Cart() {

    const [cartList, setCartList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const currentRouteName = useRootNavigationState((state) => state.routes[state.index].name);
    const { handleUpdateContext } = UseCart()

    const [totalPrice, setTotalPrice] = useState(0);
    const [isPriceUpdated, setIsPriceUpdated] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");

    const handleSingleItemUpdatedForPrice = () => {
        setIsPriceUpdated((prevState) => {
            return !prevState
        })

    }



    useEffect(() => {

        const fetchRequest = async () => {

            try {
                const fetchResponse = await getData();


                setIsLoading(false);
                setIsPriceUpdated(true);
                setCartList(fetchResponse || [])
            } catch (error) {
                setIsLoading(false);
                setErrorMessage("Error al cargar los datos del carrito.")
            }
        }

        const sumAllProducts = () => {

            const price = cartList.reduce((totalPrice, actualPriceOnIteration) => {
                return totalPrice + (actualPriceOnIteration.quantity * Number(actualPriceOnIteration.price).toFixed(2))
            }, 0)

            setTotalPrice(price)
            return
        }

        handleUpdateContext()
        fetchRequest()
        sumAllProducts()
    }, [currentRouteName, isLoading, isPriceUpdated])


    const clearFullCart = async () => {
        try {
            const clearCart = await clearDataFunction()

            if (clearCart) {
                setIsLoading(true);
            }

            setIsLoading(true);
            return
        } catch (error) {
            setIsLoading(true);
        }
    }
    return (
        <Screen>

            {isLoading ? (
                <Spinner />
            )
                :
                cartList.length < 1 ?
                    (
                        <View
                            style={{
                                display: "flex",
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 10
                            }}
                        >
                            <CartEmpty />

                            <Text
                                style={{
                                    textAlign: 'center'
                                }}
                            >
                                No hay productos agregados al carrito.
                            </Text>
                        </View>
                    )
                    :
                    (
                        <>

                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",

                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight: 600,
                                        fontSize: FONT_SIZES.large,
                                        backgroundColor: COLORS.bgWhite,
                                        color: COLORS.violet,
                                        padding: 10,
                                        flex: 1
                                    }}
                                >
                                    Carrito de Compras
                                </Text>

                                <Pressable
                                    style={{
                                        padding: 10,
                                        backgroundColor: COLORS.bgWhite,

                                    }}
                                    onPress={() => clearFullCart()}
                                >
                                    <Text
                                        style={{
                                            flex: 1,
                                            textAlignVertical: 'center',
                                            color: COLORS.red
                                        }}
                                    >
                                        Limpiar
                                    </Text>
                                </Pressable>
                            </View>

                            <View
                                style={{
                                    flexDirection: "row",
                                    padding: 10,
                                    gap: 10,
                                    backgroundColor: COLORS.bgWhite,
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    ...BORDERS.borderBottom
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: FONT_SIZES.medium,
                                        color: COLORS.gray1
                                    }}
                                >
                                    Total:
                                </Text>

                                <Text
                                    style={{
                                        fontSize: FONT_SIZES.medium,
                                        fontWeight: 600
                                    }}
                                >
                                    $USD {Number(totalPrice).toFixed(2)}
                                </Text>
                            </View>

                            <FlatList
                                contentContainerStyle={styles.container__cart}
                                renderItem={({ item }) => <CartItem
                                    product={item}
                                    updatePrice={handleSingleItemUpdatedForPrice}
                                />}
                                keyExtractor={(item) => item?.id}
                                data={cartList}
                            />
                        </>

                    )
            }
        </Screen>
    )
}

const styles = StyleSheet.create({
    container__cart: {
        gap: 1,
        paddingBottom: 50
    }
})