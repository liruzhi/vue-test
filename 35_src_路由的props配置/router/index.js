import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About,
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News,
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            // path:'detail',
                            path:'detail/:id/:title',
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