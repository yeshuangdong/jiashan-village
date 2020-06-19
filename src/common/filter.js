import Vue from 'vue'
import dayjs from 'dayjs'

const filters = {
    price(val) {
        return val ? Number(val).toFixed(2) : '0.00';
    },
    num(val) {
        return val ? val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : ''
    },
    date(val) {
        return val ? dayjs(val).format('YYYY-MM-DD') : ''
    }
}

//注册过滤器
for (let key in filters) {
    Vue.filter(key, filters[key])
}

export default filters