//Logout API

import { ApiCore } from './core'

const url = 'logout'

const apiLogout = new ApiCore({
  login: false,
  loginRefresh: false,
  logout: true,
  logoutAll: true,
  logoutOthers: true,
  url: url,
})

export { apiLogout }
