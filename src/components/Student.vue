<template>
<!--    组件的结构-->
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名给APP</button>
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
        },
        methods:{
            sendStudentName() {
                //触发Student组件实例对象身上的atguigu事件
                // this.$emit("atguigu")
                this.$emit("atguigu", this.name)
            }
        }
    }
</script>

<style scoped>
    .student{
        background-color: orange;
    }
</style>