<template>
<!--    组件的结构-->
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'School',
        data(){
            return {
                name:'这里是学校名称',
                address:"北京",
            }
        },
        mounted() {
             // this.pubId = pubsub.subscribe('hello', function(msgName, data){
                //087消息订阅与发布
                // console.log(this) //注意：此处的this是未定义的，第三方库中的方法不能解析this.解决方法：①使用箭头函数②将方法写为vue中methods中的方法，靠vue调整this
             // }
             this.pubId = pubsub.subscribe('hello', (msgName, data)=>{
                console.log(this)
                console.log('有人发布了hello消息，hello消息的回调执行了', data)
            })
        },
        beforeDestroy() {
            pubsub.unsubscribe(this.pubId)
        },
    }
</script>

<style scoped>
    .demo{
        background-color: skyblue;
    }
</style>