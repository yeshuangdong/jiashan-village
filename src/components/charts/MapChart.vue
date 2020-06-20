<template>
  <div :id="id" class="map-chart" :style="{ height: size + 'rem' }"></div>
</template>

<script>
import chart from '@/mixins/chart'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/geo'
import 'echarts/map/js/china'

export default {
  props: {
    id: {
      type: String,
      default: 'map-chart',
    },
    data: {
      type: Object,
      default: () => {},
    },
    size: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      options: {
        tooltip: {
          show: true,
          formatter: function(params) {
            if (params.data)
              return params.name + '：' + params.data['value'] + '%'
          },
        },
        visualMap: {
          type: 'continuous',
          orient: 'horizontal',
          itemWidth: 8,
          itemHeight: 80,
          text: ['高', '低'],
          showLabel: true,
          seriesIndex: [0],
          min: 0,
          max: 2,
          inRange: {
            color: [
              'rgba(217,244,254, 1)',
              'rgba(129,219,249, 1)',
              'rgba(62,199,245, 1)',
            ],
          },
          textStyle: {
            color: '#7B93A7',
          },
          bottom: 0,
          left: 'left',
        },
        grid: {
          right: 10,
          top: 20,
          bottom: 10,
          width: '20%',
        },
        xAxis: {
          show: false,
        },
        yAxis: {
          type: 'category',
          inverse: true,
          nameGap: 16,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#ddd',
            },
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: '#ddd',
            },
          },
          axisLabel: {
            interval: 0,
            margin: 70,
            textStyle: {
              color: '#455A74',
              align: 'left',
              fontSize: 14,
            },
            rich: {
              a: {},
              b: {},
            },
            formatter: function(params) {
              if (parseInt(params.slice(0, 1)) < 3) {
                return [
                  '{a|' +
                    (parseInt(params.slice(0, 1)) + 1) +
                    '}' +
                    '  ' +
                    params.slice(1),
                ].join('\n')
              } else {
                return [
                  '{b|' +
                    (parseInt(params.slice(0, 1)) + 1) +
                    '}' +
                    '  ' +
                    params.slice(1),
                ].join('\n')
              }
            },
          },
          data: [],
        },
        geo: {
          map: 'china',
          left: 'left',
          right: '50%',
          label: {
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            emphasis: {
              areaColor: '#41BAF2',
            },
            areaColor: '#ffffff',
          },
        },
        series: [
          // {
          //     type: 'map',
          //     roam: false,
          //     geoIndex: 0,
          //     label: {
          //         show: false
          //     },
          //     data: data
          // },
          // {
          //     type: 'bar',
          //     roam: false,
          //     visualMap: false,
          //     zlevel: 2,
          //     barMaxWidth: 5,
          //     barGap: 0,
          //     showBackground: true,
          //     backgroundStyle: {
          //         color: '#E0E0E0',
          //         barBorderRadius: 10
          //     },
          //     itemStyle: {
          //         color: '#41BAF2',
          //         barBorderRadius: 10
          //     },
          //     data: barData
          // }
        ],
      },
    }
  },
  mixins: [chart],
}
</script>
