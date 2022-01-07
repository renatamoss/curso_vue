import axios from 'axios'
import store from '@/store'

//criando uma instância do axios variável http
const http = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Accept': 'application/json',
        'Content': 'application/json'
    }
})

//interceptors: servidor identificar a permissão
//store.state.token: enviando o token para o servidor para futuros logins
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