var dateFormat = require('dateformat');

export const objectIdToDate = objectId => {
  return new Date(parseInt(objectId.substring(0, 8), 16) * 1000)
}


export const timestampConverter = (dateConvert) => {
  const date = new Date(dateConvert * 1000)
  return dateFormat(date, "d/m/yyyy");
}