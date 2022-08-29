<template>
    <el-dropdown trigger="click">
        <div class="avatar">
            <img src="@/assets/images/avatar.gif" alt="avatar" />
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="openDialog('infoRef')">个人资料</el-dropdown-item>
                <el-dropdown-item @click="openDialog('passwordRef')">修改密码
                </el-dropdown-item>
                <el-dropdown-item @click="logout" divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
    <InfoDialog ref="infoRef"></InfoDialog>
</template>

<script setup lang='ts'>
import { ref } from "vue";
import InfoDialog from "./InfoDialog.vue";
import { useRouter } from "vue-router";
import { GlobalStore } from "@/store";

const router = useRouter();
const globalStore = GlobalStore();

const logout = () => {
    ElMessageBox.confirm("您是否确认退出登录?", "温馨提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
    }).then(() => {
        router.push({ name: "login" });
        globalStore.setToken("");
        ElMessage({
            type: "success",
            message: "退出登录成功！"
        });
    });
}

const infoRef = ref(null)

const openDialog = (refName: string) => {
    if (refName == 'infoRef') return infoRef.value?.openDialog()

}
</script>

<style lang='scss' scoped>
.avatar {
    width: 40px;
    height: 40px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 50%;

    img {
        width: 100%;
        height: 100%;
    }
}
</style>