<template>
    <div :id="id" class="pie-chart" :style="{ height: size + 'rem' }"></div>
</template>

<script>
import chart from '@/mixins/chart'
import 'echarts/lib/chart/pie'

export default {
    props: {
        id: {
            type: String,
            default: 'pie-chart'
        },
        data: {
            type: Object,
            default: () => {}
        },
        size: {
            type: Number,
            default: 3
        }
    },
    data() {
        return {
            options: {
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}: {c}%'
                },
                legend: {
                    orient: 'vertical',
                    icon: 'circle',
                    left: '72%',
                    top: '38%',
                    pageIconSize: 1,
                    itemWidth: 10
                },
                color: ['#F29B76', '#89C997'],
                series: []
            }
        }
    },
    mixins: [chart]
}
</script>
