import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { BORDERS, COLORS, SHADOWS } from "../../utils/Constants";
import { useEffect, useState } from 'react'
import { clearDataFunction, getData, saveData } from "../../utils/Storage";
import UseCart from "../../hooks/useCart";

export default function CartItem({
    product,
    updatePrice
}) {

    const {handleUpdateContext} = UseCart();

    const [productToEdit, setProductToEdit] = useState({})

    const [isModified, setIsModified] = useState(false);

    useEffect(() => {

        const handleChangeOnProduct = () => {
            setProductToEdit(product)
        };

        handleChangeOnProduct();
        handleUpdateContext();
    }, [product])


    useEffect(() => {
        updatePrice()
        handleUpdateContext();
    }, [isModified])

    const AddOne = async (item) => {

        const productAdded = {
            ...item,
            quantity: item.quantity + 1
        }


        const dataInCart = await getData();

        const ArrayUpdated = dataInCart.map((productInCart) =>
            productInCart.id === item.id ?
                productInCart = {
                    ...item,
                    quantity: item.quantity + 1
                }
                :
                productInCart
        )

        setProductToEdit(productAdded)
        const saveCart = await saveData(ArrayUpdated);
        setIsModified((prev) => !prev)
    }

    const DeleteOne = async (item) => {
        const productModified = {
            ...item,
            quantity: item.quantity - 1 || 0
        }

        const dataInCart = await getData();

        const ArrayUpdated = dataInCart.map((productInCart) => {

            if (productInCart.id === item.id) {

                return {
                    ...item,
                    quantity: item && item.quantity <= 1 ? 0 : item.quantity - 1
                }

            }

            return productInCart
        })

        const arrayWithouQuantityZero = ArrayUpdated.filter((productToFilter) => !productToFilter.quantity <= 0)

        productModified && productModified.quantity === 0 ? setProductToEdit({}) : setProductToEdit({
            ...productToEdit,
            quantity: productModified.quantity
        })

        if (arrayWithouQuantityZero.length < 1) {
            const clearCart = await clearDataFunction()
            updatePrice()
            return
        }

        const save = await saveData(arrayWithouQuantityZero)
        setIsModified((prev) => !prev)
    }

    return (

        <>

            {Object.keys(productToEdit).length <= 0 ? (
                null
            )

                : (
                    <View
                        style={[styles.container__item__cart, styles.border]}
                    >
                        <View
                            style={styles.container__image}
                        >
                            <Image
                                style={styles.image}
                                source={{
                                    uri: `${productToEdit?.image}`,
                                    width: 60,
                                    height: 60
                                }}
                            />

                        </View>

                        <View
                            style={styles.container__title}

                        >
                            <Text
                                style={styles.title}
                            >
                                {productToEdit?.title} - $USD{productToEdit?.price}
                            </Text>
                        </View>

                        <View
                            style={styles.container__quantity}

                        >
                            <Pressable
                                style={[styles.quantity__button, styles.border]}
                                onPress={() => AddOne(productToEdit)}
                            >
                                <Text
                                    style={[styles.quantity__button__text]}

                                >
                                    +
                                </Text>
                            </Pressable>

                            <Text
                                style={styles.quantity}
                            >
                                {productToEdit?.quantity}
                            </Text>

                            <Pressable
                                style={[styles.quantity__button, styles.border]}
                                onPress={() => DeleteOne(productToEdit)}
                            >
                                <Text
                                    style={[styles.quantity__button__text]}

                                >
                                    -
                                </Text>
                            </Pressable>
                        </View>

                    </View>
                )
            }


        </>

    )
}

const styles = StyleSheet.create({
    container__item__cart: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        justifyContent: 'space-between',
        width: "100%",
        backgroundColor: COLORS.bgWhite
    },

    border: {
        ...SHADOWS.shadowBox2
    },

    container__image: {
        width: "20%"
    },
    image: {
        objectFit: "contain",
    },

    container__title: {
        width: "60%",
    },

    container__quantity: {
        justifyContent: "center",
        paddingHorizontal: 10
    },

    quantity__button: {
        padding: 10,
        width: 40,

    },

    quantity__button__text: {
        textAlign: "center",
    },

    quantity: {
        padding: 5,
        textAlign: "center"
    }
})