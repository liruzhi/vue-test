<template>
<!--    组件的结构-->
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名给APP</button>
        <button @click="unbind">解绑自定义事件</button>
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
            },
            unbind() {
                this.$off("atguigu")//解绑一个
                this.$off(["atguigu", "demo"])//解绑多个
                this.$off()//解绑全部
            },
            death() {
                this.$destroy()//销毁后，所有student示例的自定义事件全部不奏效了。
            }
        }
    }
</script>

<style scoped>
    .student{
        background-color: orange;
    }
</style>