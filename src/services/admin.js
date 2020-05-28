import { dataProvider } from './dataProvider'

export const AdminService = {
  getUsers: (method, skip, limit) => {
    return dataProvider(`/admin/analytic/user/${method}`, {
      method: 'GET',
      params: { limit, skip },
    })
  },
  getQuests: (method, skip, limit) => {
    return dataProvider(`/admin/analytic/quest/${method}`, {
      method: 'GET',
      params: { limit, skip },
    })
  },
  createCollection: (newCategory) => {
    return dataProvider(`/category`, {
      method: 'POST',
      data: newCategory,
    })
  },
  getAllCollections: () => {
    return dataProvider(`/category`, {
      method: 'GET',
    })
  },
}
