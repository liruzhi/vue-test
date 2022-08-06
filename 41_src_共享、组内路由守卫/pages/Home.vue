<template>
    <div>
        <h2>我是Home的内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <ul>
                    <li><router-link class="list-group-item" active-class="active" to="/home/news">News</router-link></li>
                    <li><router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link></li>
                </ul>
            </ul>
<!--            如果不加include则会将全部(News、Message)都缓存，include后面写组件名-->
            <keep-alive include="News">
                <router-view></router-view>
            </keep-alive>

        </div>
    </div>

</template>

<script>
    export default  {
        name:"Home"
    }
</script>