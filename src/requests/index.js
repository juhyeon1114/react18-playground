import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000',
})

export const getPosts = (params) => api.get('/posts', { params })
