import { dataProvider } from './dataProvider'

export const CategoryService = {
  getCategories: () => {
    return dataProvider(`/category`, {
      method: 'GET',
    })
  },
  update: (data) => {
    return dataProvider(`/category/${data.category._id}`, {
      method: 'POST',
      data: { category: data.category },
    })
  },
  deleteCategory: (id) => {
    return dataProvider(`/category/delete/${id}`, {
      method: 'GET',
    })
  },
}
