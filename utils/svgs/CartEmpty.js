import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../Constants"
const CartEmpty = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24" {...props}>
    <Path
      fill={`${COLORS.gray06}`}
      d="M14.1 8.5 12 6.4 9.9 8.5 8.5 7.1 10.6 5 8.5 2.9l1.4-1.4L12 3.6l2.1-2.1 1.4 1.4L13.4 5l2.1 2.1zM7 18c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m10 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m-9.8-3.2c0 .1.1.2.2.2H19v2H7c-1.1 0-2-.9-2-2 0-.4.1-.7.2-1l1.3-2.4L3 4H1V2h3.3l4.3 9h7l3.9-7 1.7 1-3.9 7c-.3.6-1 1-1.7 1H8.1l-.9 1.6z"
    />
  </Svg>
)
export default CartEmpty