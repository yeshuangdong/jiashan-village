<template>
  <div class="view-honor">
    <SearchPanel title="光荣榜（历史总积分）">
      <template v-slot:search_operation>
        <el-link icon="ali-icon-download" :underline="false">导出</el-link>
      </template>
      <template v-slot:search_form>
        <el-form ref="form" :model="form" label-width="100px" size="mini" :inline="true">
          <el-form-item label="请选择地区:">
            <el-select v-model="form.provience" clearable placeholder="请选择省份" style="width:120px;margin:0 10px 0 0;">
              <el-option v-for="item in provienceOptionArray" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="form.city" clearable placeholder="请选择城市" style="width:120px;margin:0 10px 0 0;">
              <el-option v-for="item in cityOptionArray" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="请选择日期:">
            <el-date-picker v-model="form.dateRange" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
              style="width:240px;margin:0 10px 0 0;">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="选附加信息:">
            <el-select v-model="form.additionType" clearable placeholder="请选择省份" style="width:120px;margin:0 10px 0 0;">
              <el-option v-for="item in provienceOptionArray" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-input v-model="form.additionTxt" style="width:120px;margin:0 10px 0 0;"></el-input>
          </el-form-item>
        </el-form>
      </template>
      <template v-slot:search_form_operation>
        <el-button type="primary" @click="search" size="mini">查询</el-button>
      </template>
    </SearchPanel>
    <div class="list-container">
      <div class="list-head">
        <el-checkbox v-model="checkAll" style="margin:0 20px 0 0 ;" size="mini">全选</el-checkbox>
        <el-link icon="el-icon-delete" :underline="false" style="margin:0 20px 0 0 ;">批量删除</el-link>
        <el-link icon="ali-icon-add-fill" :underline="false">添加</el-link>
      </div>
    </div>
  </div>
</template>

<script>
import SearchPanel from '~/base/searchPanel'
export default {
  data() {
    return {
      provienceOptionArray: (() => {
        return ['浙江省', '江苏省', '江西省', '福建省', '山东省'].map(
          (item, index) => ({ label: item, value: `10000${index}` })
        )
      })(),
      cityOptionArray: (() => {
        return ['南京市', '南昌市', '九江市', '武汉市', '上海市'].map(
          (item, index) => ({ label: item, value: `1000${index}` })
        )
      })(),
      // 搜索项
      form: {
        // 省份
        provience: '',
        // 城市
        city: '',
        // 日期
        dateRange: [],
        // 附加类型
        additionType: '',
        // 附加信息
        additionTxt: '',
      },
      pageIndex: 1,
      pageSize: 10,
      checkAll: false,
    }
  },
  components: { SearchPanel },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.search(true)
    },
    search(fromFirstPage = false) {
      if (fromFirstPage) {
        Object.assign(this, { pageIndex: 1 })
      }
    },
  },
}
</script>

<style lang="less" scoped>
.view-honor {
  .list-container {
    margin: 10px 0 0 0;
    background-color: #fff;
    border-radius: 4px;
    padding: 10px 20px 10px 20px;
    .list-head {
      border-bottom: 1px solid #e5e5e5;
      padding: 0 0 8px 0;
    }
  }
}
</style>
