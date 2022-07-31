<template>
    <!--    模板里面必须有一个根元素-->
    <div>
        <button @click="getStudents">获取学生信息</button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:"App",
        methods:{
            getStudents(){
                // axios.get('http://localhost:8090/student').then(
                axios.get('http://localhost:8080/atguigu/student').then(
                    response => {
                        console.log('请求成功了',response.data)
                    },
                    error => {
                        console.log('请求失败了', error)
                    }
                )
            }
        }
    }
</script>
