<template>
    <div class="header clearfix">
        <div class="fl">
            <div class="logo"></div>
            <a
                :class="
                    collapse ? 'ali-icon-icon-test3' : 'ali-icon-icon-test2'
                "
                @click="toggle"
            ></a>
        </div>
        <i class="el-icon-switch-button fr" @click="logout"></i>
        <i class="el-icon-bell fr"></i>
        <el-dropdown class="fr">
            <p class="user">
                <img
                    src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                    alt="avatar"
                />
                <em>caocq</em>
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
    props: {
        collapse: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {}
    },
    methods: {
        logout(){

        },
        toggle() {
            this.$emit('update:collapse', !this.collapse)
        }
    }
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
            width: 240px;
            height: 40px;
            float: left;
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
    }
    .user {
        overflow: hidden;
        img {
            width: 40px;
            height: 40px;
            .yj;
        }
        img,
        em {
            display: inline-block;
            vertical-align: top;
        }
        em {
            padding-left: 10px;
            color: #ffffff;
        }
    }
}
</style>
