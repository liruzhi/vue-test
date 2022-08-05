<template>
    <div>
        <ul>
            <li v-for="m in  messageList" :key="m.id">
<!--                <router-link to="/home/message/detail?id=m.id">{{m.title}}</router-link>-->
<!--                字符串写法-->
<!--                <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>-->
<!--                对象写法,建议写法-->
                <router-link :to="{
                    path:'/home/message/detail',
                    query:{
                        id:m.id,
                        title:m.title,
                    }
                }">{{m.title}}</router-link>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name:"Meaage",
        data(){
            return {
                messageList:[
                    {id:"001",title:"消息001"},
                    {id:"002",title:"消息002"},
                    {id:"003",title:"消息003"},
                ]
            }
        }
    }
</script>