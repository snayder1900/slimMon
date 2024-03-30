import axios from "axios";
import { getEnvVariables } from "../helpers";

const { VITE_API_URL } = getEnvVariables();

const caloriesApi = axios.create({
  // baseURL: 'http://localhost:4000/api'
  baseURL: VITE_API_URL
})

//* Interceptores 
caloriesApi.interceptors.request.use( config => {
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token')
  }

  return config;
})

export default caloriesApi;
