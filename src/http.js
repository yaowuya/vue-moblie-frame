import axios from 'axios'
import { Notify } from 'vant'

let VueEnv = process.env.NODE_ENV
let ApiUrl = VueEnv === 'production' ? window.siteUrl : 'http://127.0.0.1:8089/'

const http = axios.create({
  baseURL: ApiUrl,
  timeout: 200000,
  crossDomain: true,
  withCredentials: true
})

http.interceptors.request.use(function (config) {
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

http.interceptors.response.use(res => {
  if (res.status !== 200) {
    return {
      code: res.status,
      message: '请求异常，请刷新重试',
      result: false
    }
  }
  return res.data
}, err => {
  if (err.response.data.message) {
    Notify({ type: 'danger', message: '请求失败' })

    // if (err.response.status === 401) {
    //     router.push('/login')
    // }
  }
  return {
    code: 500,
    message: '未知错误，请刷新重试',
    error: err,
    result: false
  }
})

export default http
