import { FlatList, FlatListComponent, StyleSheet } from "react-native";
import CardProducts from "../CardProducts";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import CardProductsForHorizontal from "../CardProductsForHorizontal";
import { COLORS, SHADOWS } from "../../utils/Constants";
import { Text } from "react-native";
import { View } from "react-native";


export default function ProductsByCategorie({
    category,
    id
}) {

    const [products, setProducts] = useState([]);
    const [numColumns, setNumColumns] = useState(2);

    const [isLoading, setIsLoading] = useState(true);

    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {

        try {
            const fetchRequest = async () => {

                const fetchResponse = await fetch(`https://fakestoreapi.com/products/category/${category}`);

                const data = await fetchResponse.json()

                if (fetchResponse.status === 200) {
                    setIsLoading(false);
                    setErrorMessage("");

                    const newData = data.filter((product) => product.id != id)
                    setProducts(newData)
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
        <>
            {isLoading ? (
                <Spinner />
            )
                : (
                    <View
                        style={[styles.container]}

                    >
                        <Text
                            style={[styles.title__section]}

                        >
                            Related
                        </Text>

                        <FlatList
                            contentContainerStyle={{ paddingVertical: 10 }}
                            data={products}
                            horizontal={true}
                            renderItem={
                                ({ item }) => <CardProductsForHorizontal product={item} />
                            }
                            keyExtractor={product => product.id}
                        />
                    </View>

                )
            }
        </>
    )
}


const styles = StyleSheet.create({

    container: {
        marginTop: 10,
        backgroundColor: COLORS.background
    },

    title__section: {
        color: COLORS.violet,
        padding: 10,
    }



})