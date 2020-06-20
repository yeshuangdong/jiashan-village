import router from '@/router'
import store from '@/store/index'

router.beforeEach((to, from, next) => {
  //setTitle
  document.title = to.meta.title || '美丽乡村'
  if (to.name && to.name !== 'error' && to.name !== 'login')
    store.commit('setPageTab', to)
  next()
})
