import { dataProvider } from './dataProvider'

export const CategoryService = {
  getCategories: () => {
    return dataProvider(`/category`, {
      method: 'GET',
    })
  },
  deleteCategory: (id) => {
    return dataProvider(`/category/delete/${id}`, {
      method: 'GET',
    })
  },
}
