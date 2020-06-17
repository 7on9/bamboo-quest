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

  getCount: (collection) => {
    return dataProvider(`/admin/analytic/${collection}/count`, {
      method: 'GET',
      params: {},
    })
  },
  getRole: () => {
    return dataProvider(`/admin/role`, {
      method: 'GET',
      params: {},
    })
  },
  createUser: (email, password, name, role) => {
    return dataProvider('/user/register', {
      method: 'POST',
      data: { email, password, name, role },
    })
  },
  deleteUser: (id) => {
    return dataProvider(`/user/delete/${id}`, {
      method: 'GET',
    })
  },
}
