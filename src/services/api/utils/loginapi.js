// Login API

import { ApiCore } from './core'

const url = 'login'

const apiLogin = new ApiCore({
  login: true,
  loginRefresh: true,
  logout: true,
  logoutAll: false,
  logoutOthers: false,
  url: url,
})

export { apiLogin }
