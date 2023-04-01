import axios from 'axios'
import type { Method } from 'axios'

// 1. 新axios实例，基础配置
/* let BASE_URL: string
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'dev'
} else {
  BASE_URL = 'prod'
} */
const baseURL = 'http://codercba.com:9002'
const instance = axios.create({
  baseURL,
  timeout: 10000
})

// 2. 请求拦截器，携带token
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => Promise.reject(error)
)

// 3. 响应拦截器，剥离无效数据，401拦截
instance.interceptors.response.use(
  (res) => {
    // status 是200响应成功 res.data.code 是10000业务成功
    // 如果不是 10000 使用 vant 的轻提示 报错阻断程序
    // 剥离无效数据
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 4. 请求工具函数
type Data<T> = {
  code: string
  data: T
}
const request = <T>(url: string, method: Method = 'get', submitData?: object) => {
  return instance.request<T, Data<T>>({
    url,
    method,
    // get 提交数据 选项：params
    // post 提交数据 选项：data
    [method.toUpperCase() === 'GET' ? 'params' : 'data']: submitData
  })
}
export { baseURL, instance, request }
