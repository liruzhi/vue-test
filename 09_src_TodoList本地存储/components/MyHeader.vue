<template>
    <div class="todo-header">
<!--        <input type="text" placeholder="请输入任务名称， 按回车键确认" @keyup.enter="add">-->
        <input type="text" placeholder="请输入任务名称， 按回车键确认" v-model="title" @keyup.enter="add">
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        name:"MyHeader",
        props:["addTodo"],
        data() {
            return {
                title:''
            }
        },
        methods : {
            add() {
                //校验数据
                if(!this.title.trim()) {
                    this.title = ''
                    return alert("输入不能为空")
                }
                //将用户的输入包装成一个todo对象
                // const todoObj = {id:nanoid(), title:e.target.value, done:false}
                const todoObj = {id:nanoid(), title:this.title, done:false}
                //通知App组件添加一个todo对象
                this.addTodo(todoObj)
                // e.target.value = ''
                this.title = ''
            }
        }
    }
</script>

<style scoped>
    /*header*/
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #cccccc;
        border-radius: 4px;
        padding: 4px 7px;
    }
    .todo-header input:focus {
        outline: none;
        border-color:rgba(82,168,236,0.8);
        box-shadow:inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(82,168,236, 0.6);
    }

</style>