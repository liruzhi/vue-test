<template>
<!--    组件的结构-->
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
    // 组件交互相关的代码
    // const school = Vue.extend({
    export default {
        name:'School',
        data(){
            return {
                schoolName:"尚硅谷",
                address:"北京昌平"
            }
        },
        methods:{
            showName() {
                alert(this.schoolName)
            }
        }
    }

</script>

<style>
    /*组件的样式*/
    .demo{
        background-color: orange;
    }
</style>