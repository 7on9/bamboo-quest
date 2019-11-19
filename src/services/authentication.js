import { dataProvider } from './dataProvider'

export const AuthenticationService = {
  login: (email, password) => {
    return dataProvider('/user/login', {
      method: 'POST',
      data: { email, password },
    })
  },
  register: (email, password, name) => {
    return dataProvider('/user/register', {
      method: 'POST',
      data: { email, password, name },
    })
  },
  logout: () => {
    return dataProvider('/user/logout', { method: 'POST' })
  },
  verify: () => {
    return dataProvider('/user/verify', { method: 'POST' })
  },
}
