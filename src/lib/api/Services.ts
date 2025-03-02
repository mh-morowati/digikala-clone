import axios from "axios"

const getSelectedProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data
}

const getProduct = async (id:string) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data
}

const getAllProducts = async () => {
    const response = await axios.get("https://api.escuelajs.co/api/v1/products");
    return response.data
}

const getProductFromAll = async (id:string) => {
    const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
    return response.data
}

export const apiServices = {
    getSelectedProduct,
    getProduct,
    getAllProducts,
    getProductFromAll
}