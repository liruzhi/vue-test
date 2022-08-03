<template>
    <div>
        <h1>当前求和为{{sum}}</h1>
<!--        <h1>当前求和为{{ $store.state.sum}}</h1>-->
        <h1>当前求和放大10倍为{{bigSum}}</h1>
        <h1>我在{{school}},学习{{subject}}</h1>
<!--        <h1>我在{{$store.state.school}},学习{{$store.state.subject}}</h1>-->
<!--        <select v-model="n">-->
<!--        收集到的类型强制转化为number类型-->
        <select v-model.number="n">
<!--            value不加冒号1，2,3为字符串，影响计算。加上冒号为数字-->
            <option value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters} from 'vuex'
    export default {
        name:'Count',
        data(){
            return{
                n:1,//用户选择的数据
            }
        },
        computed:{
            //使用mapState简化写法(对象写法)
            // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'})
            //使用mapState简化写法(数组写法)
            ...mapState(['sum','school','subject']),

            ...mapGetters(['bigSum'])
        },
        methods:{
            increment(){
                this.$store.dispatch("jia", this.n)
            },
            decrement(){
                this.$store.commit("JIAN", this.n)
            },
            incrementOdd(){
                this.$store.dispatch("jiaOdd", this.n)
            },
            incrementWait(){
                // jiaWait
                this.$store.dispatch("jiaWait", this.n)
                // setTimeout(()=>{
                //     this.$store.dispatch("jia", this.n)
                // },500)
            },
        },
        // mounted() {
        //     // mapState({he:'sum',xuexiao:'school',xueke:'subject'})
        // }
    }
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>
