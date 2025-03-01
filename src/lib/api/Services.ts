import axios from "axios"

const getSelectedProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data
}

export const apiServices = {
getSelectedProduct
}