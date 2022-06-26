<template>
<!--    组件的结构-->
    <div>
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{age+1}}</h2>
        <h2>myAge：{{myAge+1}}</h2>
        <button @click="updateAge">修改年龄</button>
    </div>
</template>

<script>
    // 组件交互相关的代码
    export default {
        name:'Student',
        data(){
            return {
                msg:'我是一个学生',
                myAge:this.age
            }
        },
        methods:{
            updateAge(){
                // this.age++//直接写控制台会报错，单页面是正常的
                this.myAge++//直接写控制台会报错，单页面是正常的
            }
        },
        //简单接收
        // props:["name", 'sex', 'age']
        //接收的同时对数据进行类型限制
        // props:{
        //     name:String,
        //     age:Number,//控制台会提示接收的类型错误
        //     sex:String
        // }

        props:{
            name:{
                type:String,
                required:true
            },
            age:{
                type:Number,
                default:199,
            },
            sex:{
                type:String,
                required: true,
            }
        }

    }

</script>