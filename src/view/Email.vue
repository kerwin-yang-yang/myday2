<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="邮件id" width="180" />
    <el-table-column prop="name" label="邮件主题" width="180" />
    <el-table-column prop="content" label="邮件内容" />

    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" @click="emainContent(scope.row)">修改邮件</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div style="width:200px;height:50px;background-color: #723232;left:700px;position: relative;"><el-button
      style="width: 100%;height:100%;" size="small" @click="Add">添加邮件</el-button></div>
</template>
<script setup>
// 当修改弹框显示完毕后 发现邮件一班都是富文本编辑器
// 所以下载富文本编辑器
// npm install @tinymce/tinymce-vue -S
// 然后需要引入改编辑器
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import http from '../js/http';
const router = useRouter()
const tableData = ref([])
// 配置初始化富文本编辑器的配置对象

// 富文本编辑器引入后配置完毕   富文本在上传的时候也会有文字和图片 表情包等等
// 第一种方案 先传图片 然后将图片和文本一起传到后台
// 第二种方案 将图片和文字一起放到formData当中 将这个formData传到后台
// 这里采用第一种方案
// 写代码的时候发现  弹框和富文本有冲突  所以改成页面跳转
const selectEmail = () => {
  http.get('/data').then(res => {
    console.log(res)
    tableData.value = res.data.email
    // studentData.value = resp.data
  })
}

const emainContent = (row) => {
  // 跳转到emailContent页面带参数 id
  router.push({ path: '/home/emailContent', query: { id: row.id } })
}

selectEmail()

const Add = () => {
  const newId = Math.max(...tableData.value.map(item => item.id)) + 1;
  const newData = {
    id: newId,
    name: '测试文本题目',
    content: '这是测试文本',

  };

  tableData.value.push(newData);

  // Send the new data to the server or perform any other necessary operations
  http.post('/email_data', { 'tableData': tableData.value }).then((resp) => {
    console.log(resp)
    selectEmail()
  })

  dialogFormVisible.value = false;
};

</script>
<style scoped></style>