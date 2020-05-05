var dateFormat = require('dateformat')

export const objectIdToDate = (objectId, format) => {
  return dateFormat(
    new Date(parseInt(objectId.substring(0, 8), 16) * 1000),
    format ? format : 'dd/mm/yyyy'
  )
}

export const timestampConverter = (dateConvert) => {
  const date = new Date(dateConvert * 1000)
  return dateFormat(date, 'd/m/yyyy')
}
