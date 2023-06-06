<template>
    <h1>邮件详情</h1>
    <el-form :model="form">
        <el-form-item label="邮件编号">
            <el-input disabled v-model="form.id" autocomplete="off" />
        </el-form-item>
        <el-form-item label="邮件主题">
            <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="邮件内容">
            <Editor v-model="form.content" :init="init"></Editor>
        </el-form-item>
        <el-form-item>
            <el-button @click="backEmail">取消</el-button>
            <el-button type="primary" @click="updateContent">
                确定修改
            </el-button>
        </el-form-item>
    </el-form>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Editor from '@tinymce/tinymce-vue'
import http from '../js/http';
const router = useRouter()
const id = ref(router.currentRoute.value.query.id)
const form = ref({
    id: '',
    name: '',
    content: '',
})
const init = {
    language: 'zh_CN', //语言类型
    plugins: ['quickbars', 'link', 'table', 'image', 'emoticons'],
    toolbar: 'fullscreen undo redo restoredraft  | forecolor backcolor bold italic underline fontselect fontsizeselect  | formatselect  |\
        alignleft aligncenter alignright alignjustify outdent indent | bullist numlist | cut copy paste pastetext| blockquote subscript superscript removeformat  | code selectall | indent2em lineheight formatpainter axupimgs |\
                table image media charmap emoticons hr pagebreak insertdatetime print preview ',
    fontsize_formats: '12px 14px 16px 18px 20px 22px 24px 28px 32px 36px 48px 56px 72px', //字体大小
    font_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;',

    file_picker_callback: function (callback, value, meta) {
        // 这个函数是上传图片要执行的回调函数
        let filetype =
            ".pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .mp3, .mp4,.mkv, .avi,.wmv, .rmvb,.mov,.mpg,.mpeg,.webm, .jpg, .jpeg, .png, .gif"; //限制文件的上传类型
        let inputElem = document.createElement("input"); //创建文件选择
        inputElem.setAttribute("type", "file");
        inputElem.setAttribute("accept", filetype);
        inputElem.click();
        inputElem.onchange = () => {
            let upurl = "";
            let file = inputElem.files[0]; //获取文件信息
            const ph = 'http://127.0.0.1:5003'
            let params = new FormData();
            // 这的myfile是和后端约定要的名字
            params.append("myfile", file);
            // file.type.slice(0, 5) == "image" ? upurl = "/template-html/multi-media": upurl = "/template-html/attachment";

            let config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };
            upurl = '/uploadFile'
            http.post(upurl, params, config).then((res) => {
                console.log(res.data);
                if (res.data.msg == '上传成功') {
                    console.log(ph + res.data.imgUploadSrc)
                    callback(ph + res.data.imgUploadSrc, {
                        text: res.data.alt,
                        title: res.data.name,
                    });
                }
            }).catch(() => {
                alert("上传出错，服务器开小差了呢");
            });
        }
    }
}
const selectEmailContent = () => {
    http.get(`/email/${id.value}`).then(res => {
        console.log(res.data)
        form.value = res.data
    })
}
const updateContent = () => {
    http.post('/updateEmail', form.value).then(res => {
        console.log(res.data)
        router.push('/home/email')
    })
}
const backEmail = () => {
    router.push('/home/email')
}
selectEmailContent()
</script>
<style></style>