import axios from "axios"

const getSelectedProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data
}

const getProduct = async (id:string) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data
}

export const apiServices = {
    getSelectedProduct,
    getProduct
}