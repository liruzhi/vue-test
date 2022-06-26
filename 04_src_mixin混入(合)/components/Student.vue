<template>
<!--    组件的结构-->
    <div>
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    //引入一个混合
    import {hunhe, hunhe2} from "../mixin"
    // 组件交互相关的代码
    export default {
        name:'Student',
        data(){
            return {
                name:'张三',
                sex:"女"
            }
        },
        mixins:[hunhe, hunhe2]
    }

</script>