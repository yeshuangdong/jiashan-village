<template>
  <div class="resident-add">
    <div class="head-title">
      <span class="title-txt">添加居民信息</span>
    </div>
    <el-form ref="form" :model="form" label-width="200px" size="mini" style="margin:10px 0 0 0;">
      <el-form-item label="手机号:">
        <el-input v-model="form.phone" placeholder="用作登录账户" style="width:412px;"></el-input>
      </el-form-item>
      <el-form-item label="垃圾卡号码:">
        <el-input v-model="form.phone" placeholder="请填写垃圾卡号" style="width:412px;"></el-input>
      </el-form-item>
      <el-form-item label="积分卡号码:">
        <el-input v-model="form.phone" placeholder="请填写积分卡号" style="width:412px;"></el-input>
      </el-form-item>
      <el-form-item label="其他垃圾卡号码:">
        <el-input v-model="form.phone" placeholder="请填写其他垃圾卡号" style="width:412px;"></el-input>
      </el-form-item>
      <el-form-item label="单位/企业名称:">
        <el-input v-model="form.phone" placeholder="请填写单位名称" type="password" style="width:412px;"></el-input>
      </el-form-item>
      <el-form-item label="联系人:">
        <el-input v-model="form.phone" placeholder="请填写联系人姓名" type="password" style="width:412px;"></el-input>
      </el-form-item>
      <el-form-item label="身份证:">
        <el-input v-model="form.phone" placeholder="请填写你的身份证号码（选填）" style="width:412px;"></el-input>
      </el-form-item>
      <el-form-item label="是否保洁员:">
        <el-switch v-model="form.isCleaner" active-text="是" inactive-text="否">
        </el-switch>
      </el-form-item>
      <el-form-item label="所在省市区:">
        <el-select v-model="form.provience" clearable placeholder="选择省份" style="width:130px;margin:0 10px 0 0;">
          <el-option v-for="item in provienceOptionArray" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="form.city" clearable placeholder="选择市区" style="width:130px;margin:0 10px 0 0;">
          <el-option v-for="item in cityOptionArray" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="form.region" clearable placeholder="选择区域" style="width:130px;margin:0 10px 0 0;">
          <el-option v-for="item in regionOptionArray" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="门牌具体地址（村庄地址）:">
        <el-input v-model="form.phone" placeholder="请填写详细地址" style="width:412px;"></el-input>
      </el-form-item>
      <el-form-item label="身份类型:">
        <el-select v-model="form.phone" clearable placeholder="选择身份类型" style="width:130px;margin:0 10px 0 0;">
          <el-option key="identity_type_crowd" label="群众" :value="1"></el-option>
          <el-option key="identity_type_leader" label="干部" :value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="单位名称:">
        <el-input v-model="form.phone" placeholder="请填写单位名称" style="width:412px;"></el-input>
      </el-form-item>
      <el-form-item label="单位负责人:">
        <el-input v-model="form.phone" placeholder="请填写单位负责人" style="width:412px;"></el-input>
      </el-form-item>
      <el-form-item label="单位类型:">
        <el-select v-model="form.phone" clearable placeholder="选择单位类型" style="width:130px;margin:0 10px 0 0;">
          <el-option key="institution_type_public" label="事业单位" :value="1"></el-option>
          <el-option key="institution_type_private" label="名营企业" :value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="个人照片:">
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :file-list="fileList">
          <el-button type="primary" size="mini">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确认提交</el-button>
        <el-button plain>返回</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  name: 'resident_add',
  data() {
    return {
      provienceOptionArray: (() => {
        return ['浙江省', '江苏省', '江西省', '福建省', '山东省'].map(
          (item, index) => ({ label: item, value: `10000${index}` })
        )
      })(),
      cityOptionArray: (() => {
        return ['南京市', '南昌市', '九江市', '武汉市', '上海市'].map(
          (item, index) => ({ label: item, value: `20000${index}` })
        )
      })(),
      regionOptionArray: (() => {
        return ['浦东新区', '闵行区', '岳麓区', '青山区', '武昌区'].map(
          (item, index) => ({ label: item, value: `30000${index}` })
        )
      })(),
      form: {
        // 电话号码
        phone: '',
        // 是否保洁员
        isCleaner: false,
        // 省份
        provience: '',
        // 城市
        city: '',
        // 区
        region: '',
      },
      fileList: [],
    }
  },
  created() {},
}
</script>

<style lang="less" scoped>
.resident-add {
  background-color: #fff;
  border-radius: 4px;
  padding: 2px 10px 10px 10px;
  .head-title {
    padding: 8px;
    color: #333333;
    font-size: 18px;
    border-bottom: 1px solid #e5e5e5;
  }
}
</style>
