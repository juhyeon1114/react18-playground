import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000',
})

export const getPosts = (params) => api.get('/posts', { params })
export const getGames = (params) => api.get('/games', { params })
export const getSports = (params) => api.get('/sports', { params })
export const createSport = (data) => api.post('/sports', data)
