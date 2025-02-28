import axios from "axios"

const getProvinceList = async () => {
  const response = await axios.get("https://iran-locations-api.ir/api/v1/fa/states")
  console.log(response.data)
  return response.data
}

export const LocationServices = {
getProvinceList
}