<template>
<!--    模板里面必须有一个根元素-->
    <div>
        <MyHeader></MyHeader>
        <MyList :todos="todos" :checkTodo="checkTodo"></MyList>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
    // 引入组件
    import MyHeader from "@/components/MyHeader";
    import MyList from "@/components/MyList";
    import MyFooter from "@/components/MyFooter";
    export default {
        name:"App",
        components:{
            MyHeader,
            MyList,
            MyFooter
        },
        data() {
            return {
                todos: [
                    {id:"001", title:"抽烟",done:true},
                    {id:"002", title:"喝酒",done:false},
                    {id:"003", title:"开车",done:true},
                ]
            }
        },
        methods:{
            //添加一个todo
            addTodo(todoObj) {
                this.todos.unshift(todoObj)
            },
            //取消勾选一个todo
            checkTodo(id) {
                this.todos.forEach((todo)=>{
                    if (todo.id === id) todo.done = !todo.done
                })
            }
        }
    }
</script>

<style>
    /*base*/
    body {
        background: #fff;
    }
    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: center;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0,0,0,0.05);
        border-radius: 4px;
    }
    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }
    .btn-danger:hover {
        color: #ffffff;
        background-color: #bd362f;
    }
    .btn:focus {
        outline: none;
    }
    .todo-container {
        width: 600px;
        margin: 0 auto;
    }
    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #dddddd;
        border-radius: 5px;
    }
</style>