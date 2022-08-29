<template>
    <template v-for="subItem in menuList" :key="subItem.path">
        <el-sub-menu v-if="subItem.children && subItem.children.length > 0" :index="subItem.path">
            <template #title>
                <el-icon>
                    <component :is="subItem.icon"></component>
                </el-icon>
                <span>{{ subItem.title }}</span>
            </template>
            <SubItem :menuList="subItem.children" />
        </el-sub-menu>
        <el-menu-item v-else :index="subItem.path">
            <el-icon>
                <component :is="subItem.icon"></component>
            </el-icon>
            <span>{{ subItem.title }}</span>
        </el-menu-item>
    </template>

</template>

<script setup lang='ts'>
defineProps<{ menuList: Menu.MenuOptions[] }>()
</script>

<style lang='scss' scoped>
.menu {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #191a20;
    transition: all 0.3s ease;

    .el-scrollbar {
        height: calc(100% - 55px);

        .el-menu {
            flex: 1;
            overflow: auto;
            overflow-x: hidden;
            border-right: none;
        }
    }
}

// .el-menu,
// .el-menu--popup {
//     .el-menu-item {
//         &.is-active {
//             background-color: #060708;

//             &::before {
//                 position: absolute;
//                 top: 0;
//                 bottom: 0;
//                 left: 0;
//                 width: 4px;
//                 content: "";
//             }
//         }
//     }
// }
</style>