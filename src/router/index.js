import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/Main.vue'
// import HomePage from '@/components/HomePage.vue'
// import UserPage from '@/components/UserPage.vue'
// import MallPage from '@/components/MallPage.vue'
// import PageOne from '@/components/PageOne.vue'
// import PageTwo from '@/components/PageTwo.vue'
import Login from '@/components/Login.vue'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            // redirect: { name: 'home' },
            name: 'main',
            component: Main,
            children: [
                // {
                //     path: '/home',
                //     name: 'home',
                //     component: HomePage,
                //     meta: {
                //         requireAuth: true
                //     }
                // },
                // {
                //     path: '/mall',
                //     name: 'mall',
                //     component: MallPage
                // },
                // {
                //     path: '/user',
                //     name: 'user',
                //     component: UserPage
                // },
                // {
                //     path: '/page1',
                //     name: 'page1',
                //     component: PageOne
                // },
                // {
                //     path: '/page2',
                //     name: 'page2',
                //     component: PageTwo
                // }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                requireAuth: false
            }
        }

    ]
})



export default router