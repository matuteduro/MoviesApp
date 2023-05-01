import axios from 'axios';
import { BASE_URL, API_KEY } from '@env' 


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: 'de493ddb72d0064f63ac88d74d0b9d7d',
        lenguage: 'es-ES'
    }
})

export default movieDB;