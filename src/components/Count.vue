<template>
    <div>
        <h1>当前求和为{{sum}}</h1>
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
    export default {
        name:'Count',
        data(){
            return{
                n:1,//用户选择的数据
                sum:0//当前的和
            }
        },
        methods:{
            increment(){
                this.sum += this.n
            },
            decrement(){
                this.sum -= this.n
            },
            incrementOdd(){
                if(this.sum % 2) {
                    this.sum += this.n
                }
            },
            incrementWait(){
                setTimeout(()=>{
                    this.sum += this.n
                },500)
            },
        }
    }
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>
