


<template>
    <h2>学生数据渲染</h2>
    <input type="text" v-model="dangqianye">
    <table border="'1'">
        <thead>
            <tr>
                <th>学号</th>
                <th>学生姓名</th>
                <th>学生年龄</th>
                <th>学生住址</th>
                <th>学生性别</th>
                <th>学生操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in danqianyeData">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.age }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.sex }}</td>
                <td>
                    <button @click="delStu(item.id)">删除</button>
                    <button @click="change(item.id)">修改</button>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="clear">
        <div class="yema" @click="pre()">上一页</div>
        <div class="clear">
            <div :class="['item', item == dangqianye ? 'active' : '']" @click="clickPage(item)" v-for="item in maxPage">{{
                item }}</div>
        </div>
        <div class="yema" @click="next()">下一页</div>
    </div>
    <el-dialog v-model="dialogFormVisible" title="修改学生信息">
        <el-form :model="changeData[0]">
            <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="changeData[0].name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="年龄" :label-width="formLabelWidth">
                <el-input v-model="changeData[0].age" autocomplete="off" />
            </el-form-item>
            <el-form-item label="地址" :label-width="formLabelWidth">
                <el-input v-model="changeData[0].address" autocomplete="off" />
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth">
                <el-select v-model="changeData[0].sex" placeholder="性别">
                    <el-option label="男" value="男" />
                    <el-option label="女" value="女" />
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="showchange()">修改完成</el-button>
                <!-- <el-button type="primary" @click="dialogFormVisible = false">
                    Confirm
                </el-button> -->
            </span>
        </template>
    </el-dialog>
</template>
<script setup>
import { ref, computed } from 'vue'
const dialogFormVisible = ref(false)
const studentData = ref([
    { id: 1, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 2, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 3, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 4, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 5, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 6, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 7, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 8, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 9, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 10, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 11, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 12, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 13, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 14, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 15, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 16, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 17, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 18, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 19, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 20, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 21, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 22, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 23, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 24, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 25, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 26, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 27, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 28, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 29, name: '张三', age: 18, address: '北京', sex: '男' },
    { id: 30, name: '张三', age: 18, address: '北京', sex: '男' },
])
const dangqianye = ref(1)
const danqianyeData = computed(() => {
    return studentData.value.slice((dangqianye.value - 1) * 5, dangqianye.value * 5)
})
const maxPage = computed(() => {
    return Math.ceil(studentData.value.length / 5)
})
const pre = () => {
    dangqianye.value <= 1 ? dangqianye.value = 1 :
        dangqianye.value = dangqianye.value - 1

}
const clickPage = (page) => {
    dangqianye.value = page

}
const next = () => {
    dangqianye.value >= maxPage.value ? dangqianye.value = maxPage.value :
        dangqianye.value = dangqianye.value + 1
}
const delStu = (id) => {
    studentData.value = studentData.value.filter(item => item.id != id)
}
const changeData = ref([{ id: 1, name: '张三', age: 18, address: '北京', sex: '男' }])
const change = (id) => {

    changeData.value = studentData.value.filter(item => item.id == id)  //id 代表要修改的学生的id 
    console.log(changeData.value[0].id)
    dialogFormVisible.value = true
}
const showchange = () => {
    console.log(changeData.value[0].name)
    dialogFormVisible.value = false
    //显示改变的学生的详细信息展示页面
}
</script>
<style scoped>
.yema,
.item {
    float: left;
    padding: 10px;
    background-color: pink;
    margin: 10px;
    cursor: pointer;
}

.active {
    background-color: red;
}
</style>