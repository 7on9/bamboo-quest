import { dataProvider } from './dataProvider'

export const AdminService = {
  getUsers: (method, skip, limit) => {
    return dataProvider(`/admin/analytic/user/${method}`, {
      method: 'GET',
      params: { limit, skip },
    })
  },
}
