<template>
    <div :id="id" class="bar-chart" :style="{ height: size + 'rem' }"></div>
</template>

<script>
import chart from '@/mixins/chart'
import 'echarts/lib/chart/bar'

export default {
    props: {
        id: {
            type: String,
            default: 'bar-chart'
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
                grid: {
                    top: '10px',
                    bottom: 0,
                    left: 0,
                    right: '0px',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: '{b}: {c}%'
                },
                xAxis: {
                    data: [],
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: '#808090'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#E0E0E0'
                        }
                    }
                },
                yAxis: {
                    show: false,
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: '#808090', // 标签字颜色
                        formatter: '{value}%'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#E0E0E0' // 刻度线颜色
                        }
                    },
                    // 分割线
                    splitLine: {
                        lineStyle: {
                            type: 'dotted'
                        }
                    }
                },
                color: ['#41B9F1'],
                series: []
            }
        }
    },
    mixins: [chart]
}
</script>
