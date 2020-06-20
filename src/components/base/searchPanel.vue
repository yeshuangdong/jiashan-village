<template>
  <div class="search-panel">
    <div class="head-title">
      <span class="title-txt">{{title}}</span>
      <div class="oper-container">
        <slot name="search_operation"></slot>
      </div>
    </div>
    <div class="search-form">
      <slot name="search_form"></slot>
      <div class="search-form-operation">
        <slot name="search_form_operation"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="less" scoped>
.search-panel {
  padding: 6px 20px 4px 20px;
  background-color: #fff;
  min-width: 800px;
  border-radius: 4px;
  .head-title {
    padding: 8px;
    border-bottom: 1px solid #e5e5e5;
    font-size: 18px;
    color: #333;
    .oper-container {
      float: right;
    }
  }
  .search-form {
    margin: 20px 0 0 0;
    position: relative;
    padding: 0 180px 0 0;
    .search-form-operation {
      position: absolute;
      top: 0;
      right: 0;
      width: 170px;
    }
  }
}
</style>


