<template>
<!--    模板里面必须有一个根元素-->
    <div>
        <MyHeader></MyHeader>
        <MyList></MyList>
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