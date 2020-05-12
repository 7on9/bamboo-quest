import { dataProvider } from './dataProvider'

export const CategoryService = {
  getCategories: () => {
    return dataProvider(`/category`, {
      method: 'GET',
    })
  },
}
