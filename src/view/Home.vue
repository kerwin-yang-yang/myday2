<template>
    <el-container>
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu default-active="/home/student" class="el-menu-vertical-demo" router>

                    <el-menu-item index="/home/student">

                        <div>学生管理</div>
                    </el-menu-item>
                    <el-menu-item index="/home/class">
                        <router-link to="path"></router-link>

                        <span>班级管理</span>
                    </el-menu-item>
                    <el-menu-item index="/home/studentData">
  
                        <span>成绩管理</span>
                    </el-menu-item>
                    <el-menu-item index="/home/email">

                        <span>邮件管理</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>

                <!-- <h4>You are in home.</h4> -->




                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script></script>
<style scoped>
.el-header {
    background-color: gainsboro;
}

li {
    width: 100%;
}

.el-aside {
    background-color: beige;
    height: 100vh
}

.el-main {
    background-color: bisque;
    height: 100vh
}
</style>