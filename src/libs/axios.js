import axios from 'axios'
localStorage.setItem('token', 'b02212598f769925e42e086a902a0950')
let token = localStorage.getItem('token')
let instance = axios.create({
  baseURL: 'http://api.hqwell.cn/',
  timeout: 10000,
  headers: { 'token': token }
})

export default instance
