import axios from 'axios'
import router from '../router/index.js'

const http = axios.create({
    timeout: 3000,
    // 在利用http对象请求的路径前都会加上baseURL
    baseURL: "http://localhost:5003/api"
})

http.interceptors.request.use((req) => {
    // 这里代表请求前的操作
    let token = sessionStorage.getItem('token')
    token && (req.headers.Authorization = `Bearer ${token}`)
    return req
})
http.interceptors.response.use((resp) => {
    // 这里代表响应前的操作

    if (resp.data.Authorization != undefined) {

        sessionStorage.setItem('token', resp.data.Authorization)
    }
    return resp
}, err => {
    let _resp = err.response
    console.log(_resp.status)
    switch (_resp.status) {
        case 401:
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('user')
            alert('密码错误')
            router.push('/login')
        case 500:
            alert('服务器错误')
    }
    return Promise.reject(err)
})

export default http