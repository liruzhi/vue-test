<template>
<!--    组件的结构-->
    <div>
        <h2>学校名称：{{name | mySlice}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="test">点我测试hello方法</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        data(){
            return {
                name:'这里是学校名称',
                address:"北京",
            }
        },
        methods:{
            test(){
                this.hello()
            }
        }
    }

</script>