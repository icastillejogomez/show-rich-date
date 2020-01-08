const moment = require('moment')

function showRichDate (date) {
  const now = Date.now()
  if (now - date < 1000 * 60) return `Hace ${moment(now).diff(date, 'seconds')} ${moment(now).diff(date, 'seconds') === 1 ? 'segundo' : 'segundos'}`
  if (now - date < 1000 * 60 * 60) return `Hace ${moment(now).diff(date, 'minutes')} ${moment(now).diff(date, 'minutes') === 1 ? 'minuto' : 'minutos'}`
  if (now - date < 1000 * 60 * 60 * 24) return `Hace ${moment(now).diff(date, 'hours')} ${moment(now).diff(date, 'hours') === 1 ? 'hora' : 'horas'}`
  if (now - date < 1000 * 60 * 60 * 24 * 30) return `Hace ${moment(now).diff(date, 'days')} ${moment(now).diff(date, 'days') === 1 ? 'día' : 'días'}`
  if (now - date < 1000 * 60 * 60 * 24 * 365) return `Hace ${moment(now).diff(date, 'months')} ${moment(now).diff(date, 'months') === 1 ? 'mes' : 'meses'}`
  if (now - date > 1000 * 60 * 60 * 24 * 365) return `Hace ${moment(now).diff(date, 'years')} ${moment(now).diff(date, 'years') === 1 ? 'año' : 'años'}`
  return moment(date).format('DD/MM/YYYY HH:mm')
}

module.exports = showRichDate
