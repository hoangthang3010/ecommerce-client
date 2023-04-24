// import Vue from 'vue'
// import moment from 'moment'

// const dateByJapan = ['月', '火', '水', '木', '金', '土', '日']

// const price = Vue.filter('price', function (value) {
//   if (!value && value !== 0) return 0
//   return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
// })

// const searchAmount = Vue.filter('searchAmount', function (value) {
//   if (!value && value !== 0) return ''
//   return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
// })

// const formatPrice = Vue.filter('formatPrice', function (value) {
//   if (!value && value !== 0) return 0
//   return $nuxt
//     .$t('returnGifs.price')
//     .replace('xxx,xxx', $nuxt.$store.getters['location/getLocale'] === 'en' ? value.toFixed(2) : Math.floor(value))
//     .toString()
//     .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
//     .replace('.00', '')
// })

// const formatDate = Vue.filter('formatDate', function (date) {
//   const lang = $nuxt.$store.getters['location/getLocale'] || 'en'
//   if (date) {
//     if (lang === 'en') {
//       return moment(date).format('MMM DD, YYYY')
//     } else {
//       return moment(date).format('YYYY/MM/DD')
//     }
//   }
//   return ''
// })

// const formatDateTime = Vue.filter('formatDateTime', function (date) {
//   const lang = $nuxt.$store.getters['location/getLocale'] || 'en'
//   if (date) {
//     if (lang === 'en') {
//       return moment(date).format('MMM DD, YYYY HH:mm')
//     } else {
//       return moment(date).format('YYYY/MM/DD HH:mm')
//     }
//   }
//   return ''
// })

// const formatDay = Vue.filter('formatDay', function (date) {
//   const lang = $nuxt.$store.getters['location/getLocale'] || 'en'
//   if (date) {
//     if (lang === 'en') {
//       return moment(date).format('MMM DD, YYYY HH:mm (ddd)')
//     } else {
//       const dateIndex = moment(date)
//       return `${moment(date).format('YYYY/MM/DD HH:mm')} (${dateByJapan[dateIndex.day() - 1]})`
//     }
//   }
//   return ''
// })

// const formatDayFull = Vue.filter('formatDayFull', function (date) {
//   const lang = $nuxt.$store.getters['location/getLocale'] || 'en'
//   if (date) {
//     if (lang === 'en') {
//       return moment(date).format('MMM DD, YYYY HH:mm (dddd)')
//     } else {
//       const dateIndex = moment(date)
//       return `${moment(date).format('YYYY/MM/DD HH:mm')} (${dateByJapan[dateIndex.day() - 1]})`
//     }
//   }
//   return ''
// })

// const formatYYYYMMDD = Vue.filter('formatYYYYMMDD', function (date) {
//   if (date) {
//     return moment(date).format('YYYY/MM/DD')
//   }
//   return ''
// })

// const formatNumber = Vue.filter('formatNumber', function (value) {
//   if (value) {
//     const price = value.toString()
//     return new Intl.NumberFormat('en-US', {
//       currency: 'USD',
//     }).format(price.replaceAll(',', ''))
//   }
//   return 0
// })
// const strippedContent = Vue.filter('strippedContent', function (value) {
//   return (
//     value
//       ?.replace(/<\/?[^>]+>/gi, ' ')
//       ?.replace(/\s\s+/g, ' ')
//       ?.replace(/<br>/gi, '\n')
//       ?.replace(/<br\s\/>/gi, '\n')
//       ?.replace(/<br\/>/gi, '\n')
//       ?.replace(/<p.*>/gi, '\n')
//       ?.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, ' $2 ($1)')
//       ?.replace(/<script.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/script>/gi, '')
//       ?.replace(/<style.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/style>/gi, '')
//       ?.replace(/<(?:.|\s)*?>/g, '')
//       ?.replace(/(?:(?:\r\n|\r|\n)\s*){2,}/gim, '\n\n')
//       ?.replace(/ +(?= )/g, '')
//       ?.replace(/&nbsp;/gi, ' ')
//       ?.replace(/&amp;/gi, '&')
//       ?.replace(/&quot;/gi, '"')
//       ?.replace(/&lt;/gi, '<')
//       ?.replace(/&gt;/gi, '>')
//       ?.trim() ?? value
//   )
// })

// export default {
//   price,
//   formatPrice,
//   formatDate,
//   formatDay,
//   formatDayFull,
//   formatNumber,
//   formatDateTime,
//   formatYYYYMMDD,
//   strippedContent,
// }
