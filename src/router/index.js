import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/components/Main.vue'
import HomePage from '@/components/HomePage.vue'
import UserPage from '@/components/UserPage.vue'
import MallPage from '@/components/MallPage.vue'
import PageOne from '@/components/PageOne.vue'
import PageTwo from '@/components/PageTwo.vue'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home',
            name: 'Main',
            component: Main,
            children: [
                {
                    path: '/home',
                    name: 'Home',
                    component: HomePage
                },
                {
                    path: '/mall',
                    name: 'Mall',
                    component: MallPage
                },
                {
                    path: '/user',
                    name: 'User',
                    component: UserPage
                },
                {
                    path: '/page1',
                    name: 'Page1',
                    component: PageOne
                },
                {
                    path: '/page2',
                    name: 'Page2',
                    component: PageTwo
                }
            ]
        }

    ]
})

export default router