<template>
    <div>
        <h2>我是Home的内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <ul>
                    <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                    <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                </ul>
            </ul>
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
    export default  {
        name:"Home"
    }
</script>