import { request } from "../utils/request"

export const loginUser = async ({ email, password }) => {
    const res = await request.post('/rest-auth/login/', {
        email,
        password,
    })
    console.log(res.data)
    return res.data
}

export const registerUser = async ({ name, email, password }) => {
    const res = await request.post('/rest-auth/registration/', {
        name,
        email,
        password,
    })
    console.log(res)
    return res.data
}