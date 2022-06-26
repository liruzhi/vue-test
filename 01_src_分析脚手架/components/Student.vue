<template>
<!--    组件的结构-->
    <div>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="showName">点我提示学生名</button>
    </div>
</template>

<script>
    // 组件交互相关的代码
    // const school = Vue.extend({
    export default {
        name:'Student',
        data(){
            return {
                name:"学生姓名",
                age:18
            }
        },
        methods:{
            showName() {
                alert(this.name)
            }
        }
    }

</script>