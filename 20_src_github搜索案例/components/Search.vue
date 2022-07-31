<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord">&nbsp;
            <button @click="searchUsers">search</button>
        </div>
    </section>
</template>

<script>
    import axios from "axios"
    export default {
        name:'Search',
        data(){
            return {
                keyWord:''
            }
        },
        methods:{
            searchUsers(){
                this.$bus.$emit("updateListData", {
                    isFirst:false,
                    isLoading:true,
                    errMsg:'',
                    users:[],
                    // false,true, '',[]
                })
                // axios.get('https://api.github.com/search/users?q=abcdefk')
                axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                    response => {
                        console.log("成功获取到数据",response.data.items)
                        this.$bus.$emit("updateListData", {
                            isLoading:false,
                            // errMsg:'',
                            users:response.data.items,
                            // false,true, '',[]
                        })
                        // this.$bus.$emit("updateListData", response.data.items)
                    },
                    error => {
                        console.log("失败了",error.message)
                        this.$bus.$emit("updateListData", {
                            isLoading:false,
                            errMsg:error.message,
                            users:[],
                            // false,true, '',[]
                        })
                    }
                )
            }
        }
    }
</script>