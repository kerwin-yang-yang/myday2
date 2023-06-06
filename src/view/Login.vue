<template>
    <el-form class="login" label-width="120px">
        <el-form-item label="用户名">
            <el-input v-model="userObj.username" />
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="userObj.password" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click='login'>登录</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>
<script setup>
import { ref } from 'vue'
import http from '../js/http'
import { useRouter } from 'vue-router'
// 1.给登录按钮绑定点击事件，定义事件处理函数
// 2.在事件处理函数中，获取用户名和密码
// 3.通过ajax发送给后端 （axios）
// 4.接受后端的响应 根据响应的结果判断是否登录成功
// 4.1 登录成功挑战home页面
// 3.2 登录失败提示用户，并清空输入框
const userObj = ref({
    username: '',
    password: ''
})
const router = useRouter()
const login = () => {
    console.log(userObj.value)
    http.post('/login', userObj.value).then((resp) => {
        console.log(resp)
        if (resp.status === 200) {
            // 这里应该将登录信息保存到浏览器里面
            console.log(resp.data)
            sessionStorage.setItem('user', resp.data.userName)
            sessionStorage.setItem('token', resp.data.Authorization)
            router.push('/home/Studentdata')
        } else {
            userObj.value.username = ''
            userObj.value.password = ''
            alert('登录失败')
        }
    })
}
  //这时简单的登录已经完成  但是发现 我依旧可以通过url进入需要登录的页面
  // 我们应该在每一次页面挑战的时候进行判断  判断是否登录 如果没有登录则跳转到登录页面 如果登录了则跳转到对应页面

</script>
<style scoped>
.login {
    width: 40%;
    margin: 100px auto;
    border: 1px solid #ccc;
    padding: 200px;
}
</style>
  
  
  <!-- 用户前端         服务器端 对所有接口进行token验证（/login） -->
  <!-- 这时 只要后端响应token给前端  前端就需要去保存
  前端每次发起请求都应该携带token 验证身份 -->