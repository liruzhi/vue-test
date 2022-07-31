<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot name="center">我是插槽，当不传值时，展示默认值1</slot>
        <slot name="footer">我是插槽，当不传值时，展示默认值2</slot>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title','listData']
    }
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }

    h3{
        text-align: center;
        background-color: orange;
    }
    img{
        width: 100%;
    }
</style>