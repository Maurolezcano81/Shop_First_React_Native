import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../Constants"
const Cart = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" {...props}>
    <Path
      fill={COLORS.whiteText}
      d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2M1 2v2h2l3.6 7.59-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2"
    />
  </Svg>
)
export default Cart