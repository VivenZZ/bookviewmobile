import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import  'lib-flexible'
import {Row, Col, Tab, Tabs, Search , TreeSelect, Tabbar, TabbarItem, Button, Cell, CellGroup } from "vant"
Vue.use(Button)
    .use(Cell)
    .use(CellGroup)
    .use(Tabbar)
    .use(TabbarItem)
    .use(TreeSelect)
    .use(Search)
    .use(Tab)
    .use(Tabs)
    .use(Row)
    .use(Col);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
