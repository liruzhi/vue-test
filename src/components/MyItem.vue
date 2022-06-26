<template>
    <li>
        <label>
<!--            <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)">-->
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
<!--            如下代码也能实现功能，但不推荐，因为违反原则，修改了props，只不过vue是浅层次监测，没有检测到-->
<!--            <input type="checkbox" v-model="todo.done">-->
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" style="display: none">删除</button>
    </li>
</template>

<script>
    export default {
        name:"MyItem",
        //声明接收todo对象
        props:['todo', "checkTodo"],
        methods:{
            handleCheck(id) {
                //通知App组件讲对应的todo对象的done值取反(数据在哪里，操作数据的方法就在哪里)
                // console.log(id)
                this.checkTodo(id)
            }

        }
    }
</script>

<style scoped>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #dddddd;
    }
    li label {
        float: left;
        cursor: pointer;
    }
    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }
    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }
    li:before {
        content:initial;
    }
    li:last-child {
        border-bottom: none;
    }
</style>