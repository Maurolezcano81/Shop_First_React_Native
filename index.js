import { registerRootComponent } from 'expo';
import App from './App';  // Importa tu componente App
import CartProvider from './contexts/CartContext';  // Importa tu proveedor de contexto

// Aquí envolvemos la app con el proveedor del contexto
registerRootComponent(() => (
    <App />
));
