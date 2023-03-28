import Vue from 'vue'

const scrollPage = {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  },
}
Vue.directive('scroll', scrollPage)
export default scrollPage

// main app
// new Vue({
//   el: '#app',
//   methods: {
//     handleScroll: function (evt, el) {
//       if (window.scrollY > 50) {
//         el.setAttribute('style', 'opacity: 1; transform: translate3d(0, -10px, 0)')
//       }
//       return window.scrollY > 100
//     },
//   },
// })
