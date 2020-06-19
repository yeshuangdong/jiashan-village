import Vue from 'vue'
import App from './App'
import store from '@/store'
import filter from '@/common/filter'

//路由及拦截权限、指令权限
import router from '@/router'
import permission from '@/permission'
import auth from '@/permission/auth'

//element-ui
import 'element-ui/lib/theme-chalk/index.css'
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