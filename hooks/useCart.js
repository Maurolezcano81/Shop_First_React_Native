import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";  // Asegúrate de importar correctamente el contexto

const UseCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("Error al obtener los datos del carrito");
    }

    return context;  // Retorna el contexto para que los componentes lo usen
};

export default UseCart;
