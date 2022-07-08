<template>
<!--    模板里面必须有一个根元素-->
    <div class="app">
        <h1>{{msg}}</h1>
        <School :getSchoolName="getSchoolName"></School>
        <hr>
<!--        通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（使用v-on）-->
<!--        <Student v-on:atguigu="getStudentName"></Student>-->
<!--        <Student @atguigu="getStudentName"></Student>-->
        <!--        通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(使用ref, 灵活性更强)-->
        <Student ref="student"></Student>
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
        },
        data() {
            return {
                msg :"这是msg"
            }
        },
        methods:{
            getSchoolName(name) {
                console.log("App收到了学校名：",name)
            },
            getStudentName(name) {
                console.log("getStudentName被调用了", name)
            }
        },
        mounted() {
            //app组件挂载后，等3s再给Student实例挂载atguigu事件
            setTimeout(()=>{
                this.$refs.student.$on("atguigu", this.getStudentName)
            }, 3000)
            // this.$refs.student.$on("atguigu", this.getStudentName)
            //只触发一次
            // this.$refs.student.$once("atguigu", this.getStudentName)
        }
    }
</script>

<style>
    .app{
        color: gray;
        padding: 5px;
    }
</style>