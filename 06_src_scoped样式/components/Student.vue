<template>
<!--    组件的结构-->
    <div class="demo">
        <h2 class="title">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    // 组件交互相关的代码
    export default {
        name:'Student',
        data(){
            return {
                name:'张三',
                sex:"女"
            }
        }
    }
</script>

<style scoped>
    .demo{
        background-color: orange;
    }
</style>