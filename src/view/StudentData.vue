<template>
    <div>studentData</div>
    <div>这是第{{ dangqianye }}页</div>

    <el-table :data="studentData" style="width: 100%">
        <el-table-column prop="id" label="学号" width="180" />
        <el-table-column prop="name" label="学生姓名" width="180" />
        <el-table-column prop="address" label="学生地址" />
        <el-table-column prop="sex" label="学生性别" />
        <el-table-column prop="age" label="学生年龄" />
        <el-table-column prop="imgSrc" label="学生头像" />
        <el-table-column label="Operations">
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.row)">修改</el-button>
                <el-button size="small" type="danger" @click="open(scope.row.id)">删除</el-button>
                <!-- @click="handleDelete(scope.row)" -->
            </template>
        </el-table-column>
    </el-table>
    <div style="width:200px;height:50px;background-color: #723232;left:700px;position: relative;"><el-button
            style="width: 100%;height:100%;" size="small" @click="Add">添加成员</el-button></div>
    <el-dialog v-model="dialogFormVisible" title="修改学生信息">
        <el-form :model="form">
            <el-form-item label="学号" :label-width="formLabelWidth">
                <el-input v-model="form.id" autocomplete="off" disabled />
            </el-form-item>
            <el-form-item label="学生姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="学生住址" :label-width="formLabelWidth">
                <el-input v-model="form.address" autocomplete="off" />
            </el-form-item>
            <el-form-item label="学生性别" :label-width="formLabelWidth">
                <el-select v-model="form.sex" placeholder="请选择性别">
                    <el-option label="男" value="男" />
                    <el-option label="女" value="女" />
                </el-select>
            </el-form-item>
            <el-form-item label="学生头像">
                <el-upload class="avatar-uploader" action="http://localhost:5003/api/uploadFile" name="myfile"
                    :show-file-list="false" :on-success="handleAvatarSuccess">
                    <img v-if="form.imgSrc" :src="'http://127.0.0.1:5003' + form.imgSrc" class="avatar" width="200" />
                    <el-icon v-else class="avatar-uploader-icon">
                        <Plus />
                    </el-icon>
                </el-upload>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="upDate()">
                    修改
                </el-button>
            </span>
        </template>
    </el-dialog>
    <!-- <el-button text >Click to open Message Box</el-button> -->












    <MyTable :danqianyeData="danqianyeData" @delStu="delStu"></MyTable>
    <Fenye :studentData="studentData" :maxPage="maxPage" @clickPage="clickPage" :dangqianye="dangqianye" @next="next"
        @pre="pre"></Fenye>
</template>

<script setup>
import http from '../js/http';
import Fenye from '../components/fenye.vue'
import MyTable from '../components/table.vue'
import { ref, computed, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

// window.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });

// window.addEventListener('keydown', function (e) {
//     if (e.key === 'PrintScreen' || (e.ctrlKey && e.shiftKey && e.key === 'S')) {
//         e.preventDefault();
//     }
// });

const open = (itemId) => {
    ElMessageBox.confirm(
        '确定要删除该项数据吗',
        '警告',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true,
        }
    )
        .then(() => {
            // 发送删除请求
            http.delete(`/data/${itemId}`)
                .then(response => {
                    // 删除成功
                    getdata()
                    ElMessage({
                        type: 'success',
                        message: '删除成功',
                    });
                    // 执行其他操作或刷新数据列表
                    // ...
                })
                .catch(error => {
                    // 处理删除请求的错误
                    // ...
                });
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '删除取消',
            })
        });
}


const studentData = ref([])

const getdata = onMounted(() => {
    http.get('/data').then((resp) => {
        console.log(resp.data)
        studentData.value = resp.data.studentData
    })
})

const danqianyeData = computed(() => {
    if (!studentData.value) {
        return [];
    }
    return studentData.value.slice((dangqianye.value - 1) * 5, dangqianye.value * 5);
});


const dangqianye = ref(1)
const pre = () => {
    dangqianye.value <= 1 ? dangqianye.value = 1 :
        dangqianye.value = dangqianye.value - 1

}
const clickPage = (page) => {
    console.log(page)
    dangqianye.value = page



}
const maxPage = computed(() => {
    return Math.ceil(studentData.value.length / 5)
})
const next = () => {
    dangqianye.value >= maxPage.value ? dangqianye.value = maxPage.value :
        dangqianye.value = dangqianye.value + 1
}
const delStu = (id) => {
    studentData.value = studentData.value.filter(item => item.id != id)
    http.post('/data', { 'studentData': studentData.value }).then((resp) => {
        console.log(resp)
    })
}


const dialogFormVisible = ref(false)
const form = ref({
    id: '',
    name: '',
    address: '',
    sex: '',
    imgSrc: ''
})
const handleEdit = (row) => {
    console.log(row)
    dialogFormVisible.value = true
    form.value.id = row.id
    form.value.name = row.name
    form.value.address = row.address
    form.value.sex = row.sex
    form.value.imgSrc = row.imgSrc
}

const handleAvatarSuccess = (res, file) => {
    // 上传成功后要执行的函数
    console.log(res)
    form.value.imgSrc = res.imgUploadSrc
    console.log(form.value.imgSrc)
}
const upDate = () => {
    console.log(form.value)
    http.post('/Onedata', form.value).then(res => {
        console.log(res)
        dialogFormVisible.value = false
        // selectData()
        getdata()
    })

    dialogFormVisible.value = false
}
const Add = () => {
    const newId = Math.max(...studentData.value.map(item => item.id)) + 1;
    const newData = {
        id: newId,
        name: '张三',
        address: '成都',
        sex: '男',
        imgSrc: '/upload/头像1.jpeg',
        age: '20'
    };

    studentData.value.push(newData);

    // Send the new data to the server or perform any other necessary operations
    http.post('/data', { 'studentData': studentData.value }).then((resp) => {
        console.log(resp)
        getdata()
    })

    dialogFormVisible.value = false;
};







</script>
<style scoped></style>