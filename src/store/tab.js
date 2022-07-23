// import router from "@/router"
import Cookie from "js-cookie"

export default {
    state: {
        isCollapse: false,
        tabsList: [
            {
                path: '/',
                name: 'Home',
                label: '首页',
                icon: 'home'
            }
        ],
        currentMenu: null
    },
    menu: [],
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, val) {
            if (val.name !== 'home') {
                state.currentMenu = val
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if (result === -1) {
                    state.tabsList.push(val)
                }
                else {
                    state.currentMenu = null
                }
            }
        },
        closeTag(state, val) {
            const result = state.tabsList.findIndex(item => item.name === val.name)
            state.tabsList.splice(result, 1)
        }
    },
    setMenu(state, val) {
        state.menu = val
        Cookie.set('menu', JSON.stringify(val))
    },
    clearMenu(state) {
        state.menu = []
        Cookie.remove('menu')
    },
    addMenu(state, router) {
        if (!Cookie.get('menu')) {
            return
        }
        const menu = JSON.parse(Cookie.get('menu'))
        state.menu = menu
        const menuArray = []
        menu.forEach(item => {
            if (item.children) {
                item.children = item.children.map(item => {
                    item.component = () => import(`@/components/${item.url}`)
                    // console.log(item.component)
                    return item
                })
                menuArray.push(...item.children)
            } else {
                item.component = () => import(`@/components/${item.url}`)
                menuArray.push(item)
            }

        });
        menuArray.forEach(item => {
            router.addRoutes('Main', item)
        })
    }
}