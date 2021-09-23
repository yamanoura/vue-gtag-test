import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//add start
import VueGtag from 'vue-gtag'
Vue.use(
  VueGtag,
  {
    config: { id: process.env.VUE_APP_GA_ID }
  }
);
//add end

new Vue({
  render: h => h(App),
}).$mount('#app')
