// import 'vuetify/dist/vuetify.min.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vuetify from 'vuetify'
// Vue.use(Vuetify)

Vue.config.productionTip = false
// @import '~vuetify/src/stylus/main'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
