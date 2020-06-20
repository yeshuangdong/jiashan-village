<template>
  <div class="header clearfix">
    <div class="fl">
      <div class="logo">
        <img class="logo-img" :src="logoSrc" alt="美丽乡村" />
        <span class="seperate"></span>
        <img class="logo-title" :src="titleFirst" alt="水韵嘉善" />
        <img class="logo-title" :src="titleSecond" alt="水韵嘉善" />
        <img class="logo-title" :src="titleThird" alt="水韵嘉善" />
        <img class="logo-title" :src="titleFouth" alt="水韵嘉善" />
      </div>
    </div>
    <i class="el-icon-switch-button fr" @click="logout"></i>
    <i class="el-icon-bell fr"></i>
    <el-dropdown class="fr">
      <p class="user">
        <i class="el-icon-s-custom"></i>
        <em>王二小</em>
      </p>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>修改资料</el-dropdown-item>
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoSrc: require('@/assets/img/logo.png'),
      titleFirst: require('@/assets/img/title-first.png'),
      titleSecond: require('@/assets/img/title-second.png'),
      titleThird: require('@/assets/img/title-third.png'),
      titleFouth: require('@/assets/img/title-fouth.png'),
    }
  },
  methods: {
    logout() {},
  },
}
</script>

<style lang="less" scoped>
.header {
  text-align: right;
  padding: 12px 0.2rem;
  color: #fff;
  .box;
  line-height: 40px; //border-bottom: 1px solid @bor;
  .fl {
    overflow: hidden;
    .logo {
      width: 480px;
      height: 40px;
      float: left;
      text-align: left;
      .logo-img {
        margin: 0 0 0 60px;
        height: 40px;
        width: 136px;
      }
      .logo-title {
        margin: 0 4px;
        height: 40px;
        width: 40px;
      }
      .seperate {
        border-right: 1px solid #048852;
        margin: 6px 16px 0 20px;
        display: inline-block;
        height: 28px;
      }
    }
    a {
      margin-right: 0.1rem;
      vertical-align: top;
      line-height: 40px;
      float: left;
      font-size: 24px;
      color: #ffffff;
      cursor: pointer;
    }
  }
  > i {
    vertical-align: top;
    line-height: 40px;
    margin-left: 20px;
    font-size: 20px;
    color: #ffffff;
    cursor: pointer;
    &.el-icon-switch-button {
      margin-right: 10px;
    }
  }
  .user {
    overflow: hidden;
    cursor: pointer;
    .el-icon-s-custom {
      line-height: 28px;
      font-size: 21px;
      vertical-align: middle;
      border: 1px solid #fff;
      padding: 1px 4px 1px 4px;
      border-radius: 50%;
    }
    em {
      display: inline-block;
      vertical-align: middle;
      padding-left: 10px;
    }
    .el-icon-s-custom,
    em {
      color: #ffffff;
    }
  }
}
</style>
