import axios from 'axios'

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/',
    params:{
        api_key: '',
        language: 'pt-BR',
        page: 1
    }
})

export default api
