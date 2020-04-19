import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Hãy nhập đúng định dạng')
    .required('Hãy điền đầy đủ các trường'),
  password: Yup.string()
    .min(2, 'Quá ngắn!')
    .max(70, 'Quá dài!')
    .required('Hãy điền đầy đủ các trường'),
})
export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email('Hãy nhập đúng định dạng')
    .required('Bạn quên nhập email nè !'),
  name: Yup.string().required('Bạn quên nhập tên nè !'),
  password: Yup.string()
    .min(2, 'Quá ngắn rồi !')
    .max(50, 'Dài dòng quá !')
    .required('Thiếu password ở đây nè !'),
  reTypePassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Mật khẩu chưa khớp')
    .required('Thiếu password ở đây nè !'),
})
export const infoSchema = Yup.object().shape({
  email: Yup.string()
    .email('Hãy nhập đúng định dạng')
    .required('Bạn quên nhập email nè !'),
  name: Yup.string().required('Bạn quên nhập tên nè !'),
  password: Yup.string()
    .min(2, 'Quá ngắn rồi !')
    .max(50, 'Dài dòng quá !'),
  organization: Yup.string().required('Bạn quên nhập nơi công tác nè !'),
  phone: Yup.string()
    .required('Bạn quên nhập số điện thoại nè !')
    .length(10, 'Số điện thoại phải đủ 10 số'),
})
export const questSchema = Yup.object().shape({
  title: Yup.string()
    .required('Bạn quên nhập tên thử thách nè !')
    .min(2, 'Quá ngắn rồi !'),
  description: Yup.string()
    .required('Bạn quên nhập mô tả nè !')
    .min(2, 'Quá ngắn rồi !'),
})
