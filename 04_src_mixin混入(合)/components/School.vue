<template>
<!--    组件的结构-->
    <div>
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    // 组件交互相关的代码
    import {hunhe, hunhe2} from "../mixin";

    export default {
        name:'School',
        data(){
            return {
                name:'学校名',
                address:"北京",
                x:666
            }
        },
        mixins:[hunhe, hunhe2]
    }

</script>