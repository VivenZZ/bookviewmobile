import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import  'lib-flexible'
import './mock/mock'
import {Field, Sidebar, SidebarItem, List, PullRefresh, Rate, Tag, Image, Divider, Skeleton, Icon, Lazyload, Swipe, SwipeItem, Row, Col, Tab, Tabs, Search , TreeSelect, Tabbar, TabbarItem, Button, Cell, CellGroup } from "vant"
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
    .use(Col)
    .use(Swipe)
    .use(SwipeItem)
    .use(Lazyload)
    .use(Icon)
    .use(Skeleton)
    .use(Divider)
    .use(Image)
    .use(Tag)
    .use(Rate)
    .use(PullRefresh)
    .use(List)
    .use(Sidebar)
    .use(SidebarItem)
    .use(Field);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
