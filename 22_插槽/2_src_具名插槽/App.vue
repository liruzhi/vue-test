<template>
    <div class="container">
        <Category title="美食" :listData="foods">
            <img slot="center" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FYlbtRyw3j5NtpfHk0klbU3W6yAsEQJoKmlkUQR_1WTaH61fr-g3xGka-k_pA73zUTYGVDmosZWTLal1WbWRW3A.jpg&refer=http%3A%2F%2Fqcloud.dpfile.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661854273&t=ff6bd282d22857075e80134deb097db9" alt="">
            <a slot="footer" href="http://www.baidu.com">更多美食</a>
        </Category>
        <Category title="游戏">
            <ul slot="center">
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
            <div class="foot" slot="footer">
                <a href="http://www.baidu.com">单机游戏</a>
                <a href="http://www.baidu.com">网络游戏</a>
            </div>

        </Category>
        <Category title="电影">
            <ul slot="center">
                <li v-for="(f,index) in films" :key="index">{{f}}</li>
            </ul>
<!--            template可以包裹元素，最终不生成真实的DOM元素-->
<!--            <template slot="footer">-->
<!--            template还可以使用下面这种写法，改写法只能用于template-->
            <template v-slot:footer>
                <div class="foot">
                    <a href="http://www.baidu.com">经典</a>
                    <a href="http://www.baidu.com">热门</a>
                    <a href="http://www.baidu.com">推荐</a>
                </div>
                <h4>欢迎来到影院</h4>
            </template>
<!--            <div class="foot" slot="footer">-->
<!--                <a href="http://www.baidu.com">经典</a>-->
<!--                <a href="http://www.baidu.com">热门</a>-->
<!--                <a href="http://www.baidu.com">推荐</a>-->
<!--            </div>-->
<!--            <h4 slot="footer">欢迎来到影院</h4>-->
        </Category>
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
    .container,.foot{
        display: flex;
        justify-content: space-around;
    }
    h4{
        text-align: center;
    }
</style>
