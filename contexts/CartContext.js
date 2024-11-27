import { createContext, useState, useEffect } from "react";
import { getData } from "../utils/Storage";  // Asegúrate de que esta función esté correctamente implementada.
import { useRootNavigationState } from "expo-router";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [dataToCart, setDataToCart] = useState([]);
  const [quantityOnCart, setQuantityOnCart] = useState(0);
  const [updateContextCart, setUpdateContextCart] = useState(false);
  const currentRouteName = useRootNavigationState((state) => state.routes[state.index].name);

  const handleUpdateContext = () => {
    setUpdateContextCart(prevState => !prevState);
  };

  useEffect(() => {
    const handleQuantities = async () => {
      const data = await getData();  
      setDataToCart(data);
      setQuantityOnCart(data.length);
    };

    handleQuantities();
  }, [updateContextCart, currentRouteName]);

  return (
    <CartContext.Provider value={{ dataToCart, quantityOnCart, setQuantityOnCart, handleUpdateContext }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext };
