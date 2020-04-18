import { dataProvider } from './dataProvider'

export const AdminService = {
  getAllUsers: (limit, skip, method) => {
    return dataProvider(`/admin/analytic/user/${method}`, {
      method: 'GET',
      params: { limit, skip },
    })
  },
}
