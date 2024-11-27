import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (value) => {
  try {

    const load = await AsyncStorage.setItem('Cart', JSON.stringify(value))

    return load;

  } catch (error) {
    console.error(error)
  }
}

export const getData = async () => {
  try {
    const data = await AsyncStorage.getItem('Cart')
    return data != null ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error al leer el carrito:', e);
    return [];
  }
}

export const clearDataFunction = async () => {
  try {
    const data = await AsyncStorage.removeItem("Cart")
    return data
  } catch (error) {
    console.error('Error al leer el carrito:', e);
    return [];
  }
}