export const initFormikEdit = (user) => {
  const email = user.info ? user.info.email : 'Loading...'
  const name = user.info ? user.info.name : 'Loading...'
  const organization = user.info ? user.info.organization : ''
  const phone = user.info ? user.info.phone : ''
  const gender = user.info ? user.info.gender : false
  return ({
      email,
      name,
      organization,
      phone,
      gender,
      password: ''
  })
}
