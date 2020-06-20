<template>
  <div :class="['layout', { collapse: isCollapse }]">
    <top class="top" />
    <left-menu class="left-menu" :collapse.sync="isCollapse" />
    <div class="cont">
      <div class="page-tab clearfix">
        <p v-for="(item, key) in pageTab" :class="{ active: item.name === $route.name }" :key="key">
          <router-link :to="item.fullPath">{{ item.meta.title }}</router-link>
          <i class="el-icon-close" @click.stop="close(item.name)"></i>
        </p>
      </div>
      <router-view v-if="load" />
    </div>
  </div>
</template>

<script>
import top from './top'
import leftMenu from './leftMenu'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      load: true,
      isCollapse: false,
    }
  },
  components: {
    top,
    leftMenu,
  },
  computed: {
    ...mapState({
      pageTab: (state) => state.pageTab,
    }),
  },
  provide() {
    return {
      reload: () => {
        this.load = false
        this.$nextTick(() => (this.load = true))
      },
    }
  },
  methods: {
    close(name) {
      let list = Object.keys(this.$store.state.pageTab)
      if (list.length <= 1) return false
      this.$store.commit('delPageTab', name)
      list = Object.keys(this.$store.state.pageTab)
      this.$router.replace(
        this.$store.state.pageTab[list[list.length - 1]].fullPath
      )
    },
  },
}
</script>

<style lang="less" scoped>
.layout {
  padding: 78px 16px 20px 236px;
  .trans;
  .cont {
    .page-tab {
      margin-bottom: 14px;
      p {
        float: left;
        height: 28px;
        line-height: 28px;
        padding: 0 8px 0 12px;
        border-radius: 4px;
        margin-right: 10px;
        .bgf;
        a {
          color: #666666;
        }
        i {
          margin-left: 8px;
          font-weight: bold;
          cursor: pointer;
        }
        &.active {
          background: @green;
          color: #ffffff;
          a {
            color: #ffffff;
          }
        }
      }
    }
  }
  .top {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    height: 64px;
    background: #4cb493;
    z-index: 101;
    .trans;
  }
  .left-menu {
    position: fixed;
    left: 0;
    top: 64px;
    bottom: 0;
    width: 220px;
    background: @green;
    z-index: 100;
    .trans;
  }
  &.collapse {
    padding-left: 80px;
    .left-menu {
      width: 64px;
    }
  }
}
</style>
