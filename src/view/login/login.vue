<template>
    <div class="login-container">
        <div class="login-box">
            <div class="login-box-left">
                <img src="@/assets/images/login_left0.png" alt="login" />
            </div>
            <div class="login-box-right">
                <div class="login-title">
                    <img class="login-icon" src="@/assets/images/logo.svg" alt="" />
                    <p class="logo-text">请输入暗号</p>
                </div>
                <LoginFormVue></LoginFormVue>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import LoginFormVue from './components/LoginForm.vue';
</script>

<style lang='scss' scoped>
// @import "./index.scss"
.login-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 550px;
    height: 100%;
    min-height: 500px;
    background-color: #eeeeee;
    background-image: url("@/assets/images/login_bg.svg");
    background-position: 50%;
    background-size: 100% 100%;
    background-size: cover;

    // .dark {
    //     position: absolute;
    //     top: 4.5%;
    //     right: 3.2%;
    // }

    .login-box {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 96%;
        height: 94%;
        padding: 0 4% 0 50px;
        background-color: hsl(0deg 0% 100% / 80%);
        border-radius: 10px;

        .login-box-left {
            width: 800px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .login-box-right {
            width: 420px;
            padding: 50px 40px 45px;
            border-radius: 10px;
            box-shadow: 2px 3px 7px rgb(0 0 0 / 20%);

            .login-title {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 45px;

                .login-icon {
                    width: 45px;
                    height: 39px;
                }

                .logo-text {
                    padding-left: 25px;
                    font-size: 32px;
                    font-weight: bold;
                    color: #34495e;
                    white-space: nowrap;
                }
            }
        }
    }
}
</style>