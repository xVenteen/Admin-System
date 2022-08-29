<template>
    <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="loginRules" label-width="120px">
        <el-form-item label="你是谁？" prop="username">
            <el-input v-model="loginForm.username">
                <template #prefix>
                    <el-icon class="el-input__icon">
                        <UserFilled />
                    </el-icon>
                </template>
            </el-input>
        </el-form-item>
        <el-form-item label="报上暗号" prop="checkPass">
            <el-input v-model="loginForm.password" type="password" autocomplete="off" show-password>
                <template #prefix>
                    <el-icon class="el-input__icon">
                        <Lock />
                    </el-icon>
                </template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <!-- <el-button :icon="CircleClose" type="primary" @click="submitForm(loginFormRef)">Submit</el-button> -->
            <el-button :icon="UserFilled" @click="login(loginFormRef)">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from "vue-router";
import { Login } from '@/api/interface/index'
import { UserFilled, Lock } from "@element-plus/icons-vue";
import type { ElForm } from "element-plus";

// 定义 formRef（校验规则）
type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>();
const loginRules = reactive({
    username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }]
});

const loginForm = reactive<Login.LoginForm>({
    username: '',
    password: ''
})

const loading = ref<boolean>(false);

const router = useRouter()
const login = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate(async valid => {
        if (valid) {
            loading.value = true;
            try {
                // const requestLoginForm: Login.ReqLoginForm = {
                // 	username: loginForm.username,
                // 	password: md5(loginForm.password)
                // };
                // const res = await loginApi(requestLoginForm);
                // * 存储 token
                // globalStore.setToken(res.data!.access_token);
                // * 登录成功之后清除上个账号的 menulist 和 tabs 数据
                // menuStore.setMenuList([]);
                // tabStore.closeMultipleTab();

                ElMessage.success("登录成功！");
                console.log(router.getRoutes());

                router.push({ name: "home" });
            } finally {
                loading.value = false;
            }
        }
    });
}

</script>

<style lang='scss' scoped>
</style>