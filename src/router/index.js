import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Detail from '@/components/Detail'
import Sample from '@/components/Sample'
import Category from '@/components/Category'
import Topic from '@/components/Topic'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: Index,
            meta: {
                title: '首页'
            }
        },
        {
            path: '/detail',
            name: 'detail',
            component: Detail,
            meta: {
                title: '详情'
            }
        }, {
            path: '/sample',
            name: 'sample',
            component: Sample,
            meta: {
                title: '单页面'
            }
        }, {
            path: '/category',
            name: 'category',
            component: Category,
            meta: {
                title: '分类'
            }
        }, {
            path: '/topic',
            name: 'topic',
            component: Topic,
            meta: {
                title: '专题'
            }
        }
    ]
})
