<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot :games="games">我是插槽，当不传值时，展示默认值1</slot>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title'],
        data(){
            return {
                foods:['火锅','烧烤','小龙虾','牛排'],
                games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
                films:['《教父》','《肖申克的救赎》','《你好，李焕英》','《这个杀手不太冷静》']
            }
        }
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