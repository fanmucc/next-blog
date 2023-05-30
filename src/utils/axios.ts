import axios, { AxiosRequestConfig } from "axios";

const request = (axiosConfig: AxiosRequestConfig<any>) => {
  console.log(axiosConfig)
  // 创建axios实例，并填入默认url
  const service = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000, // 超时时间
  })

  // 请求拦截
  service.interceptors.request.use(config => {
    return config
  }, error => {

    return Promise.reject(error)
  })

  // 相应拦截
  service.interceptors.response.use(response => {
    return Promise.resolve(response?.data)
  }, error => {
    return Promise.reject(error)
  })

  return service(axiosConfig)
}



export default request