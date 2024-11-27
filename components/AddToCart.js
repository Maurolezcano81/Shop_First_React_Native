import { Pressable, StyleSheet, Text } from "react-native";
import { BUTTONS, COLORS, FONT_SIZES } from "../utils/Constants";
import { useState } from "react";
import { clearCart, getData, saveData } from '../utils/Storage.js'
import UseCart from "../hooks/useCart.js";
import Toast from 'react-native-toast-message';

export default function AddToCart({
    product,
    full = false

}) {

    const { handleUpdateContext } = UseCart()

    const [storageData, setStorageData] = useState([])


    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Added to cart.',
            text2: 'Your product is added to cart.',
            position: 'top',
            visibilityTime: 4000,
            autoHide: true,
            style: { backgroundColor: COLORS.gray0 }, 
        });

    };

    const AddProductToCart = async (product) => {

        const getListsOnCart = await getData();

        setStorageData(getListsOnCart);


        const formattedProduct = {
            id: product.id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: 1
        }

        const updateCard = getListsOnCart.map((item) =>
            item.id === formattedProduct.id
                ? {
                    ...item,
                    quantity: item.quantity + 1
                }
                : item
        )

        const existsProductInCard = updateCard.some((item) =>
            item.id === formattedProduct.id
        );

        if (!existsProductInCard) {
            updateCard.push(formattedProduct)
        }

        const save = await saveData(updateCard)
        setStorageData(updateCard)
        handleUpdateContext()
        showToast()

        if (save) {
            console.log("Agregado exitosamente")
        };

        return "Add To Card Finish"
    }

    return (
        <Pressable
            style={({ pressed }) => [
                full === true ? styles.full : styles.cart__button,
                pressed && { ...BUTTONS.pressedViolet },
            ]}
            onPress={() => AddProductToCart(product)}
        >
            {({ pressed }) => (
                <Text
                    style={[
                        !pressed && styles.cart__button__text,
                        pressed && { ...BUTTONS.pressedTextViolet }
                    ]}
                >
                    + Agregar al carrito
                </Text>
            )}
        </Pressable>
    )
}


const styles = StyleSheet.create({
    cart__button: {
        padding: 8,
        backgroundColor: COLORS.violet,
        width: "40%"
    },

    full: {
        width: "100%",
        padding: 8,
        backgroundColor: COLORS.violet,
    },

    cart__button__text: {
        color: COLORS.whiteText,
        textAlign: 'center',
        fontSize: FONT_SIZES.medium
    }


})