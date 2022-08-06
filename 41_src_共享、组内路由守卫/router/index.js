import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
// export default new VueRouter({
const router = new VueRouter({
    routes:[
        {
            name:"guanyu",
            path:'/about',
            component:About,
            meta:{
                isAuth:false,
                title:"关于"
            }
        },
        {
            name:"zhuye",
            path:'/home',
            component:Home,
            meta:{
                isAuth:true,
                title:"主页",
            },
            children:[
                {
                    path:'news',
                    component:News,
                    meta:{
                        isAuth:false,
                        title:'新闻'
                    },
                    beforeEnter:(to,from,next) => {
                        console.log(to,from,next)
                        //可以写一些权限校验，判断是否放行
                        next()
                    }
                },
                {
                    name:"xiaoxi",
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            // path:'detail/:id/:title',
                            component:Detail,
                            //以props的方式传给Detail组件，基本上不使用，因为值是固定的
                            // props:{
                            //     a:1,
                            //     b:"hello"
                            // }
                            //props的第二种，以props的形式传给Detail组件
                            // props:true,

                            //props的第三种写法，值为函数
                            props($route) {
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title,
                                }
                            },
                            //解构赋值？解构赋值的连续写法
                            // props({query}) {
                            //     return {id:query.id, title:query.title}
                            // },
                            //解构赋值的连续写法
                            // props({query:{id,title}}) {
                            //     return {id,title}
                            // },
                        },
                    ]
                },
            ]
        },
    ],
})

//全局前置路由守卫--初始化的时候被调用、每次路由切换之前被调用
// router.beforeEach((to,from,next)=>{
//     // if(to.path === '/home/news' || to.path === '/home/message') {
//     if(to.meta.isAuth) {
//         console.log("isAuth")
//         //增加一些逻辑看是否应该放行
//         if(localStorage.getItem('school') === 'atguigu') {
//             next()//放行
//         } else {
//             next()//放行
//         }
//
//     } else {
//         next()//放行
//     }
//
// })
//
// //全局后置路由守卫--初始化的时候被调用、每次路由切换之后被调用
// router.afterEach((to,from)=>{
//     document.title = to.meta.title || "vue-test"
//     console.log(to,from)
// })

export default router