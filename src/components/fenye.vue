<template>
    <div class="clear">
        <div class="yema" @click="$emit('pre')">上一页</div>
        <div class=" clear">
            <div :class="['item', item == props.dangqianye ? 'active' : '']" @click="$emit('clickPage', item)"
                v-for="item in props.maxPage">
                {{
                    item }}</div>
        </div>
        <div class="yema" @click="$emit('next')">下一页</div>
    </div>
</template>
<script setup>
import { defineProps, computed, ref, defineEmits } from 'vue';
const props = defineProps(['studentData', 'dangqianye', 'maxPage'])
defineEmits(['clickPage', 'next', 'pre'])

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