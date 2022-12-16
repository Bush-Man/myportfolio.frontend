import axios from "axios";
//const baseURL = "http://localhost:6001/api/v1";
const baseURL = "https://server-ujbx.onrender.com/api/v1";


const user = JSON.parse(localStorage.getItem("user"));

const TOKEN = user?.token
export const userRequest = axios.create({
    BASE_URL: baseURL,
    headers: { authorization: `Bearer ${TOKEN}` }

})