<template >
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
                    <button @click="$emit('delStu', item.id)">删除</button>
                    <button @click="$emit('change', item.id)">修改</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>

import { defineProps, computed, ref, defineEmits } from 'vue';
const props = defineProps(['danqianyeData'])
defineEmits(['delStu', ''])
</script>
<style scoped></style>