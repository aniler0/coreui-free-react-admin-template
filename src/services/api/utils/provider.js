import axios from 'axios'
import { handleError, handleResponse } from './response'

const BASE_URL = 'http://chosenapp.co:7000/api/v1' //our base url of api endpoint

export const apiProvider = {
  //api provider object which provides Axios requests
  //Model get a data like {name:"anil",password:"asdafa221"}
  login: (resource, model) => {
    return axios.post(`${BASE_URL}/${resource}`, model).then(handleResponse).catch(handleError) //handleResponse and handleError come from other file which name is response.js
  },
  loginRefresh: (resource, model) => {
    return axios
      .post(`${BASE_URL}/${resource}/refresh`, model)
      .then(handleResponse)
      .catch(handleError)
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
//we can use all returns of them in another file
