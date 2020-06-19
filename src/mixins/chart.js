/**
 * chart 共同方法混入
 * chartResize 图表自适应
 */
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import app from '@/common/app'

export default {
    methods: {
        chartResize() {
            window[this.id].resize()
        },
        init(data) {
            window[this.id].setOption(data)
        }
    },
    watch: {
        data(data) {
            this.init(app.mergeObj(this.options, data))
        }
    },
    mounted() {
        window[this.id] = echarts.init(document.getElementById(this.id))
        window.addEventListener('resize', this.chartResize)
        this.init(app.mergeObj(this.options, this.data))
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.chartResize)
    }
}