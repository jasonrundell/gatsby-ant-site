const capitalizeAll = str => {
  if (typeof str !== 'string') return ''
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

export default capitalizeAll
