<template>
  <div class="left-menu">
    <el-menu :default-active="currentPath" router class="el-menu-vertical-demo" background-color="#2B9B7F" text-color="rgba(255,255,255,.6)"
      active-text-color="#fff" :collapse="collapse" :collapse-transition="false">
      <el-submenu index="work">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span>首页镇级地图</span>
        </template>
        <el-menu-item index="/member/fzvx">天凝镇参与详情</el-menu-item>
        <el-menu-item index="/member/asd">大云镇参与详情</el-menu-item>
      </el-submenu>
      <el-menu-item index="/member/honor">
        <i class="el-icon-set-up"></i>
        <span slot="title">积分光荣榜</span>
      </el-menu-item>
      <el-menu-item index="/member/add">
        <i class="el-icon-coin"></i>
        <span slot="title">添加居民信息</span>
      </el-menu-item>
    </el-menu>
    <div class="toggle-bar" @click="toggle">
      <i :class="{'el-icon-caret-left':true,'collapse':collapse}"></i>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentPath() {
      return this.$route.path
    },
  },
  methods: {
    toggle() {
      this.$emit('update:collapse', !this.collapse)
    },
  },
}
</script>

<style lang="less" scoped>
.left-menu {
  position: relative;
  .toggle-bar {
    position: absolute;
    cursor: pointer;
    top: 46%;
    right: -8px;
    width: 8px;
    height: 50px;
    background-color: #2c9b7e;
    &::before {
      position: absolute;
      top: -8px;
      content: '';
      width: 0;
      height: 0;
      border-bottom: 8px solid #2c9b7e;
      border-right: 8px solid transparent;
    }
    &::after {
      position: absolute;
      bottom: -8px;
      content: '';
      width: 0;
      height: 0;
      border-top: 8px solid #2c9b7e;
      border-right: 8px solid transparent;
    }
    i {
      position: absolute;
      color: #fff;
      top: 14px;
      font-size: 22px;
      right: -8px;
      &.collapse {
        right: -7px;
        transform: rotate(180deg);
      }
    }
  }
}
</style>
