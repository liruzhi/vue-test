<template>
    <div class="category">
        <h3>{{title}}分类</h3>
<!--        <slot>我是插槽，当不传值时，展示默认值</slot>-->
        <slot>
            <ul>
                <li v-for="(item,index) in listData" :key="index">{{item}}</li>
            </ul>
        </slot>
<!--        <ul v-show="title !== '美食'">-->
<!--            <li v-for="(item,index) in listData" :key="index">{{item}}</li>-->
<!--        </ul>-->
<!--        <img v-show="title==='美食'" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FYlbtRyw3j5NtpfHk0klbU3W6yAsEQJoKmlkUQR_1WTaH61fr-g3xGka-k_pA73zUTYGVDmosZWTLal1WbWRW3A.jpg&refer=http%3A%2F%2Fqcloud.dpfile.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661854273&t=ff6bd282d22857075e80134deb097db9" alt="">-->
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