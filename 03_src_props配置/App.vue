<template>
<!--    模板里面必须有一个根元素-->
    <div>
        <Student name="李四" sex="女" :age="18"/>
        <hr>
<!--        数值类型的可以使用v-bind的形式-->
        <Student name="aa" sex="xx" :age="99"></Student>
    </div>
</template>

<script>
    // 引入组件
    import Student from "./components/Student";

    export default {
        name:"App",
        components:{
            Student,
        }
    }
</script>