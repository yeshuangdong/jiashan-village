import Vue from 'vue'
import store from '@/store'

const hasPermission = (userPermission) => {
    const userPermissionList = Array.isArray(userPermission) ? userPermission : [userPermission]
    const permissionList = store.state.userRole
    return userPermissionList.some(item => permissionList.includes(item))
}

Vue.directive('auth', {
    inserted: (el, bind) => {
        if (!hasPermission(bind.value)) {
            el.parentNode.removeChild(el)
        }
    }
})