/**
 * auth module request
 */
import axios from "@/axios";

/**
 * login 登录
 * @param userName
 * @param password
 */
export const login = data => {
    return axios.post('/login', data)
}

/**
 * register 注册
 */
export const register = data => {
    return axios.post('/register', data)
}