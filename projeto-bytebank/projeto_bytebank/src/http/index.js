import axios from 'axios'
import store from '@/store'

const http = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Accept': 'applicaton/json',
        'Content': 'application/json'
    }
})

//enviando o token para o servidor para futuros logins
http.interceptors.request.use(function (config) {
    const token = store.state.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, function (erro) {
    return Promise.reject(erro)
})

export default http