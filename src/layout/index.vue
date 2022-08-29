<template>
    <el-container>
        <el-aside width="200px">
            <Menu />
        </el-aside>
        <el-container>
            <el-header>
                <Header></Header>
                <Tabs></Tabs>
            </el-header>
            <el-main>
                <div class="main-box">
                    <router-view v-slot="{ Component, route }">
                        <transition appear name="fade-transform" mode="out-in">
                            <keep-alive :include="cacheRouter">
                                <component :is="Component" :key="route.path"></component>
                            </keep-alive>
                        </transition>
                    </router-view>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang='ts'>
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import cacheRouter from "@/router/cacheRouter";
import Tabs from './Tabs/index.vue'
</script>

<style lang='scss' scoped>
.el-container {
    display: flex;
    width: 100%;
    min-width: 970px;
    height: 100%;

    .el-aside {
        width: auto;
        overflow: inherit;
    }

    .el-header,
    .el-footer {
        height: auto;
        padding: 0;
    }

    .el-main {
        box-sizing: border-box;
        padding: 10px 13px;

        /* 防止切换出现横向滚动条 */
        overflow-x: hidden;
        background: #f0f2f5;

        .main-box {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            padding: 20px;
            overflow: auto;
            overflow-x: hidden !important;
            background-color: #ffffff;
            border-radius: 4px;
            box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);

            &::-webkit-scrollbar {
                background-color: white;
            }
        }
    }
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
    transition: all 0.2s;
}

.fade-transform-enter-from {
    opacity: 0;
    transition: all 0.2s;
    transform: translateX(-30px);
}

.fade-transform-leave-to {
    opacity: 0;
    transition: all 0.2s;
    transform: translateX(30px);
}
</style>