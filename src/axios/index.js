import Axios from 'axios'
import {
	Loading
} from 'element-ui'

const axios = Axios.create({
	baseURL: process.env.VUE_APP_BASE_URL,
	timeout: 20000,
	headers: {
		'Content-Type': 'application/json;charset=UTF-8'
	}
})

//请求拦截
axios.interceptors.request.use(config => {

	window.loading = Loading.service({
		fullscreen: true
	})
	return config

}, error => {

	if (window.loading) window.loading.close()

	return Promise.reject(error)

})

//响应拦截
axios.interceptors.response.use(res => {

	if (window.loading) window.loading.close()
	return res.data

}, error => {

	if (window.loading) window.loading.close()
	return Promise.reject(error)

})

export default axios