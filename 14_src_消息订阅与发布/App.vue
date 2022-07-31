<template>
<!--    模板里面必须有一个根元素-->
    <div>
        <School></School>
        <hr>
        <Student></Student>
    </div>
</template>

<script>
    // 引入组件
    import School from "./components/School";
    import Student from "./components/Student";

    export default {
        name:"App",
        components:{
            Student,School
        }
    }
</script>

<style>
    .title{
        color: red;
    }
</style>