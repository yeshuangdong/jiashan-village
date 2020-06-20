import Vue from 'vue'
import App from './App'
import store from '@/store'
import '@/common/filter'

//路由及拦截权限、指令权限
import router from '@/router'
import '@/permission'
import '@/permission/auth'

//element-ui
import '@/assets/theme/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

//公用样式
import './assets/less/common.less'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
