import axios from "axios"

const getUserInformation = async () => {
    const response = await axios.get("");
    console.log("API Response:", response.data)
    return response.data
}

export const apiServices = {
getUserInformation
}