<template>
    <div class="logo">
        <img src="@/assets/images/logo.svg" alt="logo" />
        <span v-show="!isCollapse">Geeker Admin</span>
    </div>
</template>

<script setup lang='ts'>
defineProps<{ isCollapse: boolean }>();
</script>

<style lang='scss' scoped>
.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 55px;
    line-height: 55px;
    border-bottom: 1px solid #282a35;
    box-shadow: 2px 0 6px rgb(0 21 41 / 35%);


    span {
        font-size: 22px;
        font-weight: bold;
        color: #dadada;
        white-space: nowrap;
    }

    img {
        width: 30px;
        object-fit: contain;
        margin-right: 8px;
    }
}
</style>