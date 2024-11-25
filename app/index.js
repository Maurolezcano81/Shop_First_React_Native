import { Link, Stack } from "expo-router";
import { ActivityIndicator, FlatList, Image, ScrollView, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import Screen from "../components/Screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import CardProducts from "../components/CardProducts";
import Spinner from "../components/Spinner";

export default function Index() {

    const [products, setProducts] = useState([]);
    const [numColumns, setNumColumns] = useState(2);

    const [isLoading, setIsLoading] = useState(true);

    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {

        try {
            const fetchRequest = async () => {

                const fetchResponse = await fetch('https://fakestoreapi.com/products');

                const data = await fetchResponse.json()

                if (fetchResponse.status === 200) {
                    setIsLoading(false);
                    setErrorMessage("");
                    setProducts(data)
                    return
                }
            }

            fetchRequest()

        } catch (error) {
            setIsLoading(false);
            setErrorMessage("Error al obtener los productos");
            setProducts([]);
            return
        }

    }, [])


    return (
        <Screen>

            {isLoading ? (
                <Spinner />
            )
                : (
                    <FlatList
                        contentContainerStyle={styles.products__container}
                        key={numColumns}
                        data={products}
                        renderItem={
                            ({ item }) => <CardProducts product={item} />

                        }
                        keyExtractor={product => product.id}
                        numColumns={numColumns}
                    />
                )
            }
        </Screen>
    )
}

const styles = StyleSheet.create({
    products__container: {
        width: "100%",
        display: "flex",
        justifyContent: 'space-between',
    },
})