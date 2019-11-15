import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import  'lib-flexible';
import { Button, Cell, CellGroup } from "vant"
Vue.use(Button).use(Cell).use(CellGroup);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
