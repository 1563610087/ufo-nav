import axios from 'axios'

export const checkDetail = (data) => axios.get('http://localhost:3000/check/detail', { params: data })
