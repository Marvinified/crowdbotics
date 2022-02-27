import axios from 'axios'
import { API_BASE_URL } from '../configs/api'

let instance = axios.create({
    baseURL: API_BASE_URL,
    // withCredentials: true
});

axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Basic ${localStorage.getItem('token')}`
    return config
})
axios.interceptors.response.use((config) => {
    console.log(config)
    return config
})

export const request = instance