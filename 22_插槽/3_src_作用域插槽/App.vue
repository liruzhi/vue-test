<template>
    <div class="container">
        <Category title="游戏">
            <template scope="atguigu">
<!--                {{atguigu}}-->
                <ul>
                    <li v-for="(g,index) in atguigu.games" :key="index">{{g}}</li>
                </ul>
            </template>
        </Category>
        <Category title="游戏">
<!--            支持结构赋值(ES6语法)-->
            <template scope="{games}">
                <!--                {{atguigu}}-->
                <ul>
                    <li v-for="(g,index) in games" :key="index">{{g}}</li>
                </ul>
            </template>
        </Category>

        <Category title="游戏">
            <template slot-scope="{games}">
                <!--                {{atguigu}}-->
                <ul>
                    <li v-for="(g,index) in games" :key="index">{{g}}</li>
                </ul>
            </template>
        </Category>
<!--        <Category title="游戏">-->
<!--            <ul>-->
<!--                <li v-for="(g,index) in games" :key="index">{{g}}</li>-->
<!--            </ul>-->
<!--        </Category>-->
    </div>
</template>

<script>
    import Category  from './components/Category'
    export default {
        name:"App",
        components:{Category},

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
