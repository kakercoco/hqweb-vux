import axios from 'axios'
localStorage.setItem('token', 'b2bbb7ff94289341db7bc0029cbfd1fb')
let token = localStorage.getItem('token')
let instance = axios.create({
  baseURL: 'http://api.hqwell.cn/',
  timeout: 10000,
  headers: { 'token': token }
})

export default instance
