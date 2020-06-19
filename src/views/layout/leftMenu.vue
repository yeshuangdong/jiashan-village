<template>
    <div>
        <el-menu
            :default-active="currentPath"
            router
            class="el-menu-vertical-demo"
            background-color="#2B9B7F"
            text-color="rgba(255,255,255,.6)"
            active-text-color="#fff"
            :collapse="collapse"
        >
            <el-submenu index="work">
                <template slot="title">
                    <i class="el-icon-s-home"></i>
                    <span>首页镇级地图</span>
                </template>
                <el-menu-item index="/member/fzvx">天凝镇参与详情</el-menu-item>
                <el-menu-item index="/member/asd">大云镇参与详情</el-menu-item>
            </el-submenu>
            <el-menu-item index="/member/point">
                <i class="el-icon-set-up"></i>
                <span slot="title">积分光荣榜</span>
            </el-menu-item>
            <el-menu-item index="/member/add">
                <i class="el-icon-coin"></i>
                <span slot="title">添加居民信息</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    props: {
        collapse: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        currentPath() {
            return this.$route.path
        }
    }
}
</script>

<style lang="less" scoped></style>
