<template>
<!--    组件的结构-->
    <div class="demo">
        <h2 class="title">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名给School组件</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    // 组件交互相关的代码
    export default {
        name:'Student',
        data(){
            return {
                name:'张三',
                sex:"女"
            }
        },
        mounted() {
        },
        methods:{
            sendStudentName(){
                pubsub.publish("hello", 666)
            }
        }
    }
</script>

<style scoped>
    .demo{
        background-color: orange;
    }
</style>