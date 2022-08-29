<template>
    <el-icon class="collapse-icon" @click="menuStore.setCollapse()">
        <component :is="isCollapse ? 'Expand' : 'Fold'"></component>
    </el-icon>
</template>

<script setup lang='ts'>
import { computed } from "vue";
import { MenuStore } from "@/store/modules/menu";
const menuStore = MenuStore()
const isCollapse = computed((): boolean => menuStore.isCollapse)
</script>

<style lang='scss' scoped>
.collapse-icon {
    margin-right: 20px;
    font-size: 22px;
    cursor: pointer;
}
</style>