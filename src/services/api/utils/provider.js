import axios from 'axios'
import { handleError, handleResponse } from './response'

const BASE_URL = 'http://chosenapp.co:7000/api/v1'

export const apiProvider = {
  login: (resource, model) => {
    return axios.post(`${BASE_URL}/${resource}`, model).then(handleResponse).catch(handleError)
  },
  loginRefresh: (resource, model) => {
    return axios.post(`${BASE_URL}/${resource}`, model).then(handleResponse).catch(handleError)
  },
  logout: (resource, model) => {
    return axios.put(`${BASE_URL}/${resource}`, model).then(handleResponse).catch(handleError)
  },
  logoutAll: (resource) => {
    return axios.put(`${BASE_URL}/${resource}`).then(handleResponse).catch(handleError)
  },
  logoutOthers: (resource, model) => {
    return axios.put(`${BASE_URL}/${resource}`, model).then(handleResponse).catch(handleError)
  },
}
