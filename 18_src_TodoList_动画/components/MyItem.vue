<template>
    <transition name="todo" appear>
        <li>
            <label>
                <!--            <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)">-->
                <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
                <!--            如下代码也能实现功能，但不推荐，因为违反原则，修改了props，只不过vue是浅层次监测，没有检测到-->
                <!--            <input type="checkbox" v-model="todo.done">-->
                <span v-show="!todo.isEdit">{{todo.title}}</span>
                <input
                        type="text"
                        v-show="todo.isEdit"
                        :value="todo.title"
                        @blur="handleBlur(todo, $event)"
                        ref="inputTitle"
                >
            </label>
            <!--        <button class="btn btn-danger" style="display: none">删除</button>-->
            <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
            <button class="btn btn-edit" v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
            <!--        页面的删除和编辑按钮的顺序不一致与 float: right;(与右浮动有关)-->
        </li>
    </transition>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:"MyItem",
        //声明接收todo对象
        props:['todo'],
        methods:{
            handleCheck(id) {
                //通知App组件讲对应的todo对象的done值取反(数据在哪里，操作数据的方法就在哪里)
                // console.log(id)
                // this.checkTodo(id)
                this.$bus.$emit('checkTodo', id)//使用全局事件总线
            },
            handleDelete(id) {
                if(confirm('确定删除吗？')) {
                    // this.deleteTodo(id)
                    // this.$bus.$emit('deleteTodo', id)
                    // console.log(id)
                    pubsub.publish("deleteTodo", id)
                }
            },
            handleEdit(todo){
                if(todo.hasOwnProperty('isEdit')) {
                    console.log("二次添加")
                    todo.isEdit = true
                } else {
                    // todo.isEdit = true //这种得到的不是响应式的，没有geter setter方法
                    this.$set(todo, 'isEdit', true)
                    console.log("初次添加")
                }
                // this.$refs.inputTitle.focus()//如果一个input框被隐藏了，再调用input框的focus不能获取焦点
                // setTimeout(()=>{
                //     this.$refs.inputTitle.focus()
                // },200)  可以使用定时器粗暴解决
                this.$nextTick(function(){
                    this.$refs.inputTitle.focus()
                })//nextTick所指定的回调函数会在dome节点更新完毕之后再执行
            },
            handleBlur(todo, e) {
                console.log("blur事件被触发了")
                // this.$set(todo, 'isEdit', false)
                todo.isEdit = false
                if (!e.target.value.trim()) return alert('输入不能为空')
                // console.log('updateTodo',todo.id, e.target.value)
                this.$bus.$emit('updateTodo',todo.id, e.target.value)
            },

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

    li:hover{
        background-color: #dddddd;
    }

    li:hover button{
        display: block;
    }

    .todo-enter-active{
        animation:atguigu 1s linear;
    }

    .todo-leave-active{
        animation:atguigu 1s linear reverse;
    }

    @keyframes atguigu {
        from{
            transform:translateX(100%);
        }
        to{
            transform:translateX(0px);
        }
    }
</style>