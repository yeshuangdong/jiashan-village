<template>
    <div class="line-chart" :id="id" :style="{ height: size + 'rem' }"></div>
</template>

<script>
import chart from '@/mixins/chart'
import 'echarts/lib/chart/line'

export default {
    props: {
        id: {
            type: String,
            default: 'line-chart'
        },
        data: Object,
        size: {
            type: Number,
            default: 3
        }
    },
    data() {
        return {
            options: {
                legend: {
                    right: '20px',
                    top: 0,
                    icon: 'circle',
                    itemWidth: 8,
                    itemGap: 25
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: '#ddd'
                        }
                    }
                },
                grid: {
                    top: '50px',
                    bottom: 0,
                    left: 0,
                    right: '20px',
                    containLabel: true
                },
                xAxis: {
                    data: [],
                    // boundaryGap: false, // 从0开始
                    axisTick: {
                        show: false // 刻度
                    },
                    axisLabel: {
                        color: '#808090' // 标签字颜色
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#E0E0E0' // 刻度线颜色
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
                        color: '#808090' // 标签字颜色
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
                series: []
            }
        }
    },
    mixins: [chart]
}
</script>
