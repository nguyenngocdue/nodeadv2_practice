import axios from "axios"

const BE_DOMAIN = 'http://localhost:8080'

// yarn add axios
export const searchProductAPI = async (name: string) => {
    let { data } = await axios.get(`${BE_DOMAIN}/product/search?name=${name}`)

    return data
}