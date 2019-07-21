import Vue from 'vue'
import Axios from 'axios'

Axios.defaults.baseURL='http://127.0.0.1:8000'

Axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data)
    config.headers = {
      'Content-Type': 'application/json;charset=UTF-8'
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

Axios.interceptors.response.use(
  res => {
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

Vue.prototype.$axios = Axios

export default ({

})
