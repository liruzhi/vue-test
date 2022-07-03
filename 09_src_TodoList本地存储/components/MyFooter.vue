<template>
    <div class="todo-footer" v-show="total">
        <label>
<!--            <input type="checkbox" :checked="isAll" @change="checkAll">-->
            <input type="checkbox" v-model="isAll">
        </label>
        <span>
            <span>已完成{{doneTotal}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name:"MyFooter",
        props:['todos', "checkAllTodo","clearAllTodo"],
        computed:{
            total(){
                return this.todos.length
            },
            doneTotal() {
                return this.todos.reduce((pre,current)=>current.done ? pre + 1 : pre, 0)
            },
            // isAll() {
            //     return this.total == this.doneTotal && this.total > 0
            // },
            isAll: {
                get() {
                    return this.total == this.doneTotal && this.total > 0
                },
                set(value) {
                    this.checkAllTodo(value)
                }
            },
            // doneTotal() {
            //     return this.todos.reduce((pre,current)=>{
            //         return current.done ? pre + 1 : pre;
            //     }, 0)
            // },
            // doneTotal() {
            //     let i = 0
            //     this.todos.forEach((todo) => {
            //         if (todo.done) i++
            //     })
            //     return i
            // }
        },
        methods:{
             checkAll(e) {
                 this.checkAllTodo(e.target.checked)
                // console.log(e.target.checked)
             },
            clearAll() {
                this.clearAllTodo()
            }
        }
    }
</script>

<style scoped>
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }
    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }
    .todo-footer label input {
        position: relative;
        top:-1px;
        vertical-align: middle;
        margin-right: 5px;
    }
    .todo-footer button {
        float: right;
        margin: 5px;
    }
</style>