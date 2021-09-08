import { apiProvider } from './provider'

export class ApiCore {
  constructor(options) {
    if (options.login) {
      this.login = (model) => {
        return apiProvider.login(options.url, model)
      }
    }
    if (options.loginRefresh) {
      this.loginRefresh = (model) => {
        return apiProvider.loginRefresh(options.url, model)
      }
    }
    if (options.logout) {
      this.logout = (model) => {
        return apiProvider.logout(options.url, model)
      }
    }
    if (options.logoutAll) {
      this.logoutAll = () => {
        return apiProvider.logoutAll(options.url)
      }
    }
    if (options.logoutOthers) {
      this.logoutOthers = (model) => {
        return apiProvider.logoutOthers(options.url, model)
      }
    }
  }
}
