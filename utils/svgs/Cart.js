import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS, FONT_SIZES } from "../Constants"
import { StyleSheet, Text, View } from "react-native";
import UseCart from "../../hooks/useCart";


export default function Cart({
  quantity = 1,
  isActive
}) {


  const { quantityOnCart } = UseCart();  // Aquí usamos el hook para obtener datos del carrito

  const floatNumber = quantityOnCart;


  return (
    <View
      style={styles.container}
    >
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      >

        <Path
          fill={`${COLORS.violet}`}
          d="M16 18a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2 2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85"
        />
      </Svg>

      {
        floatNumber > 0 && (
          <View
            style={styles.float}

          >
            <Text
              style={styles.float__text}
            >
              {floatNumber}

            </Text>
          </View>
        )
      }

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 30,
    height: 30
  },

  float: {
    position: "absolute",
    right: -5,
    top: 0,
    backgroundColor: COLORS.orange,
    borderRadius: 10,
  },

  float__text: {
    color: COLORS.whiteText,
    fontSize: FONT_SIZES.small,
    paddingHorizontal: 5,
  }
})