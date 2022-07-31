<template>
    <div class="container">
        <Category title="美食" :listData="foods">
            <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FYlbtRyw3j5NtpfHk0klbU3W6yAsEQJoKmlkUQR_1WTaH61fr-g3xGka-k_pA73zUTYGVDmosZWTLal1WbWRW3A.jpg&refer=http%3A%2F%2Fqcloud.dpfile.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661854273&t=ff6bd282d22857075e80134deb097db9" alt="">
        </Category>
        <Category title="游戏" :listData="games"></Category>
        <Category title="电影" :listData="films"></Category>
    </div>
</template>

<script>
    import Category  from './components/Category'
    export default {
        name:"App",
        components:{Category},
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
    .container{
        display: flex;
        justify-content: space-around;
    }
</style>
