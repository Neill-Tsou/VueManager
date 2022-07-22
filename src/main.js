import Vue from 'vue'
import App from './App.vue'
import {
  Button, Container, Main, Header, Aside, Menu, Submenu, MenuItem, MenuItemGroup, Dropdown, DropdownMenu, DropdownItem,
  Row, Col, Card, Table, TableColumn, Breadcrumb, BreadcrumbItem, Tag, Form, FormItem, Input, Select, Switch, Option, DatePicker,
  Dialog
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router/index.js'
import store from '@/store/index'
import '@/assets/less/index.less'
import http from 'axios'
import '@/api/mock.js'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Switch)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Dialog)

Vue.prototype.$http = http

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
